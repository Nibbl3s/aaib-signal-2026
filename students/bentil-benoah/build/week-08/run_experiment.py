"""Run once from any directory with the original Week 7 Ollama model available."""
import datetime
import hashlib
import json
from pathlib import Path
import time
import urllib.request

HERE = Path(__file__).resolve().parent
BUILD = HERE.parent
LABELS = ['Order Status', 'Invoice/Payment', 'Return/Refund', 'Product Issue', 'Other']
MODEL = 'llama3.2:3b'
DIGEST = 'a80c4f17acd55265feec403c7aef86be0c25983ab279d83f3bcd3abbcb5b8b72'

def get(path):
    with urllib.request.urlopen('http://127.0.0.1:11434' + path, timeout=30) as r:
        return json.load(r)

def main():
    if (HERE / 'results.jsonl').exists():
        raise SystemExit('Results already exist; preserve them. Do not rerun over evidence.')
    prediction = json.loads((HERE / 'prediction.json').read_text())
    test_bytes = (BUILD / 'test-set.md').read_bytes()
    assert hashlib.sha256(test_bytes).hexdigest() == prediction['test_set_sha256']
    cases = []
    for line in test_bytes.decode().splitlines():
        cells = [c.strip() for c in line.split('|')[1:-1]]
        if len(cells) == 3 and cells[0].isdigit():
            cases.append(dict(case=int(cells[0]), input=cells[1], expected=cells[2]))
    assert len(cases) == 10
    tags, version = get('/api/tags'), get('/api/version')
    model = next(m for m in tags['models'] if m['name'] == MODEL)
    if model['digest'] != DIGEST:
        raise SystemExit('Model digest differs from Week 7. No experiment executed.')
    prompt = (BUILD / 'prompt-v2.txt').read_text().strip()
    metadata = dict(started_utc=datetime.datetime.now(datetime.timezone.utc).isoformat(),
                    model=MODEL, version=version, model_details=model,
                    prediction=prediction, prompt=prompt, method='Fresh /api/chat context; system prompt + user enquiry; stream=true; no explicit options, seed, schema, retries or repair; server defaults as in Week 7. Effective defaults may differ by runtime version.')
    (HERE / 'metadata.json').write_text(json.dumps(metadata, indent=2)+'\n')
    records = []
    start_all = time.monotonic()
    with (HERE / 'results.jsonl').open('x') as out:
        for run in (1, 2):
            for case in cases:
                body = dict(model=MODEL, messages=[dict(role='system', content=prompt), dict(role='user', content=case['input'])], stream=True)
                req = urllib.request.Request('http://127.0.0.1:11434/api/chat', data=json.dumps(body).encode(), headers={'Content-Type':'application/json'})
                start = time.monotonic()
                chunks, first = [], None
                with urllib.request.urlopen(req, timeout=180) as response:
                    for line in response:
                        chunk = json.loads(line)
                        if chunk.get('error'):
                            raise RuntimeError(chunk['error'])
                        chunks.append(chunk)
                        if first is None and chunk.get('message', {}).get('content'):
                            first = time.monotonic()-start
                assert chunks and chunks[-1].get('done'), 'Incomplete response'
                reply = ''.join(c.get('message', {}).get('content', '') for c in chunks)
                clean = reply.strip()
                valid = clean in LABELS
                row = dict(run=run, **case, reply=reply, exact_match=clean == case['expected'],
                           wrong_category=(clean != case['expected']) if valid else None,
                           unusable_format=not valid, first_token_seconds=first,
                           total_seconds=time.monotonic()-start,
                           input_tokens=chunks[-1].get('prompt_eval_count'),
                           output_tokens=chunks[-1].get('eval_count'), raw_chunks=chunks)
                out.write(json.dumps(row, ensure_ascii=False)+'\n'); out.flush()
                records.append(row)
    inconsistent = [c['case'] for c in cases if records[c['case']-1]['reply'].strip() != records[10+c['case']-1]['reply'].strip()]
    scores = [sum(r['exact_match'] for r in records if r['run']==run) for run in (1,2)]
    totals = {}
    for field in ['input_tokens', 'output_tokens']:
        values = [r[field] for r in records]
        totals[field] = sum(values) if all(v is not None for v in values) else None
    summary = dict(scores_out_of_10=scores, improvement_vs_week7_pp=[s*10-20 for s in scores],
                   difference_vs_historical_week2_pp=[s*10-100 for s in scores],
                   prediction_correct=all(s>=8 for s in scores), inconsistent_cases=inconsistent,
                   valid_wrong_category_count=sum(r['wrong_category'] is True for r in records),
                   unusable_format_count=sum(r['unusable_format'] for r in records),
                   token_totals=totals, total_experiment_seconds=time.monotonic()-start_all,
                   note='Wrong category is null when format is invalid; inspect raw text for semantic errors. F1 Wrong, F2 Fabricated, F3 Missed, F4 Format, F5 Refused, F6 Inconsistent. Review F2/F3/F5 manually; codes can overlap. Token counts are runtime-reported, not a bill.')
    (HERE / 'summary.json').write_text(json.dumps(summary, indent=2)+'\n')
    print(json.dumps(summary, indent=2))

if __name__ == '__main__':
    main()
