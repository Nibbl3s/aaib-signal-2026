// Max Moor · quote-intake tool at O&D 3D — theme "The Drawing Sheet".
// Each weekly post becomes one sheet of an engineering drawing set: title block, where the sheet sits in the
// quote process, a sheet index, dimension-line key figures, general notes and a revision history of the 12 sheets.
// All figures below are taken from the post they describe. If this script fails, the plain post is still shown.
(() => {
  const metaEl = document.getElementById('post-meta');
  const article = document.querySelector('article');
  if (!metaEl || !article) return;
  const meta = JSON.parse(metaEl.textContent);
  const TOTAL = 12;
  const week = +meta.week || 1;
  const nn = n => String(n).padStart(2, '0');
  const slugOf = n => `Max-Moor-week-${nn(n)}`;
  const url = n => `/posts/${slugOf(n)}`;
  const BEAT = 'How can AI automation transform the workflow of a digital manufacturing company?';
  const STAGES = ['Customer finds O&D', 'Web form', 'AI extraction', 'Human check', 'Spreadsheet price', 'Quote out'];

  // which stages of the quote process each sheet examines (0 = first stage)
  const W = {
    1: { skill: 'Cost literacy', short: 'Tokens are the cheap part: $0.79 a month', date: '2026-09-25', focus: [2],
      verdict: 'The token bill is not the question',
      stats: [['$0.79', 'a month in tokens for 300 requests (GPT-5 mini)'], ['$9.50', 'a year, before any other software or integration cost'], ['$7.90', 'a month at ten times the volume']],
      take: ['The model is the cheap part; the manufacturing knowledge is the hard part', 'The benefit is employee time and faster replies, not saved tokens', 'AI becomes interesting once it is wired into existing processes'] },
    2: { skill: 'Capability skepticism', short: 'The price belongs in a spreadsheet, not an AI', date: '2026-10-02', focus: [4],
      verdict: 'AI reads the request, a formula sets the price',
      stats: [['4 of 4', 'answers of the “no AI” test point away from AI'], ['0', 'tokens needed to compute a price'], ['1 cell', 'to edit when a filament price or machine rate changes']],
      take: ['Split the workflow: AI reads, the slicer measures, a spreadsheet prices, a human approves', 'The real cost is the human check on each AI-generated price', 'Counting the whole workflow as AI hides where the risk sits'] },
    3: { skill: 'Vendor claim detection', short: 'Xometry’s AI claims: fact, aspiration or avoidance', date: '2026-10-09', focus: [5],
      verdict: 'Pilot, don’t copy',
      stats: [['6', 'Xometry claims tagged fact, aspiration or avoidance'], ['$50M', 'Siemens stock purchase: a fact, but not performance evidence'], ['10', 'of our own past parts to upload as a cheap, honest test']],
      take: ['The strongest claim is the easiest to test; the weakest have the biggest words', 'Real AI delivering real value, but at a scale that is not O&D’s', 'AI transforms one step (quoting at scale), not the whole workflow'] },
    4: { skill: 'Value quantification', short: '12 requests a month: no-go now', date: '2026-10-18', focus: [1, 2, 3],
      verdict: 'No-go now, re-open at about 50 requests a month',
      stats: [['12', 'quote requests a month, counted (the Week 1 guess was 300)'], ['−€175', 'net per year on measured numbers'], ['Never', 'payback on the €920 build']],
      take: ['One counted number (12, not 300) changed the whole case', 'The real ROI is volume times minutes, which I had assumed, not measured', 'The cheaper fix is boring: make material, quantity and dimensions required in the form'] },
    5: { skill: 'Market mechanism thinking', short: 'GEO audit of my own company: 10/18', date: '2026-10-18', rev: 'B', revDate: '2026-11-28', focus: [0],
      verdict: 'Visible, on thin support',
      stats: [['10/18', 'GEO score after the retest (first audit: 3/18)'], ['11 of 12', 'answers name O&D (6 queries, 2 engines)'], ['6 of 8', 'discovery queries put O&D first']],
      take: ['An audit of AI visibility has to question the AI, not a search engine', 'Visibility depends on the customer’s city, not on the size of the footprint', 'Fix the facts first: both addresses, the structured data, the SLS volume'] },
    6: { skill: 'Cost projection', short: 'A call costs $0.00026; failures cost 3,243× more', date: '2026-10-29', focus: [2],
      verdict: 'The token line is the least interesting number',
      stats: [['$0.00026', 'per call: 554 tokens in, 79 out'], ['1 / 3,243', 'tokens against the cost of failures, at 400 requests a day'], ['250', 'requests a month needed for a 12-month payback at 50% failures (today: 12)']],
      take: ['Failure rate and minutes per fix decide the economics, not the price per token', 'The weakest assumption is the 2-minute fix, an estimate and not a measurement', 'Time ten real fixes before opening a pricing page'] },
    7: { skill: 'Lock-in detection', short: 'Lock-in score 6/15: connect thinly, measure the exit', date: '2026-11-20', focus: [2],
      verdict: 'Connect, in its thinnest form',
      stats: [['6/15', 'lock-in scorecard, moderate'], ['+42%', 'per call: the successor model priced above the one I costed'], ['€8.66 vs €4,950', 'a month: Google triples its price vs. switching to a local model']],
      take: ['Lock-in is in how a model fails, not in the price per token', 'Score the exit before you build', 'Measure the second model yourself'] },
    8: { skill: 'Design defense', short: 'A €1,788 design: the model is the cheapest box', date: '2026-11-27', focus: [1, 2, 3, 4],
      verdict: 'The design is sound, the Build is not ready',
      stats: [['€1,788', 'year-one total, including 15% contingency'], ['€24.80 → €10.60', 'cost per correctly handled request at 3× volume'], ['75%', 'failure rate at which the tool is switched off']],
      take: ['The model is the cheapest box in the drawing; checking and building are the bill', 'The honest alternative is a better form, and I have not shown it loses', 'A stop rule and a monthly audit are part of the design'] },
  };

  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const longDate = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? `${+m[3]} ${MONTHS[+m[2] - 1]} ${m[1]}` : (iso || ''); };
  const d = W[week];

  document.body.classList.add('dr-ready');

  // ---------- zone markers on the frame ----------
  const zones = el('div', 'dr-zones'); zones.setAttribute('aria-hidden', 'true');
  for (let i = 1; i <= 6; i++) zones.append(el('span', '', String(i)));
  article.prepend(zones);

  // ---------- eyebrow ----------
  const metaLine = article.querySelector('.meta');
  if (metaLine) metaLine.textContent = `Week ${week} · ${meta.skill || (d && d.skill) || ''} · Sheet ${nn(week)} of ${TOTAL}`;
  const h1 = article.querySelector('h1');
  const byline = article.querySelector('.byline');

  // ---------- title block ----------
  const tb = el('div', 'dr-titleblock');
  tb.setAttribute('aria-label', 'Title block');
  const cell = (k, v, cls) => { const c = el('div', 'dr-tb' + (cls ? ' ' + cls : '')); c.append(el('span', 'k', k), el('span', 'v', v)); return c; };
  if (d) tb.append(cell('Verdict', d.verdict, 'wide'));
  tb.append(cell('Drawn by', 'Max Moor'));
  tb.append(cell('Date', longDate(meta.date) + (d && d.revDate ? ` · updated ${longDate(d.revDate)}` : '')));
  tb.append(cell('Week / sheet', `${week} · ${nn(week)} / ${TOTAL}`));
  tb.append(cell('Rev', (d && d.rev) || 'A'));
  (byline || h1).after(tb);

  // ---------- where this sheet sits in the quote process ----------
  let anchor = tb;
  if (d) {
    const sec = el('section', 'dr-process');
    const lab = el('div', 'dr-pl', 'WHERE THIS SHEET SITS IN THE QUOTE PROCESS ');
    lab.append(el('em', '', 'highlighted = examined here'));
    const flow = el('div', 'dr-flow');
    STAGES.forEach((name, i) => {
      const n = el('div', 'dr-node' + (d.focus.includes(i) ? ' on' : ''));
      n.append(el('span', 'ni', String(i + 1)), el('span', 'nt', name));
      flow.append(n);
      if (i < STAGES.length - 1) { const a = el('span', 'dr-arr'); a.setAttribute('aria-hidden', 'true'); flow.append(a); }
    });
    sec.append(lab, flow);
    tb.after(sec); anchor = sec;
  }

  // ---------- sheet index ----------
  const idx = el('div', 'dr-index');
  idx.append(el('span', 'il', 'SHEET INDEX'));
  const sqs = el('div', 'dr-sqs');
  const issued = Object.keys(W).map(Number);
  for (let n = 1; n <= TOTAL; n++) {
    if (W[n] || n === week) {
      const a = el('a', 'dr-sq done' + (n === week ? ' now' : ''), nn(n));
      a.href = url(n); a.title = `Sheet ${nn(n)}` + (W[n] ? ` · ${W[n].short}` : '');
      if (n === week) a.setAttribute('aria-current', 'page');
      sqs.append(a);
    } else {
      const s = el('span', 'dr-sq todo', nn(n)); s.title = `Sheet ${nn(n)} · not issued yet`; sqs.append(s);
    }
  }
  const count = new Set([...issued, week]).size;
  idx.append(sqs, el('span', 'ic', `${count} issued · ${TOTAL - count} to come`));
  anchor.after(idx);

  // ---------- paper: key figures, notes, then the post ----------
  const paper = el('div', 'dr-paper');
  idx.after(paper);
  if (d) {
    const stats = el('div', 'dr-stats');
    d.stats.forEach(([v, l]) => {
      const s = el('div', 'dr-stat');
      const dim = el('div', 'dim'); dim.append(el('i'), el('i'));
      s.append(dim, el('div', 'sv', v), el('div', 'sl', l));
      stats.append(s);
    });
    const notes = el('aside', 'dr-notes');
    notes.append(el('h2', '', 'General notes'));
    const ol = el('ol'); d.take.forEach(t => ol.append(el('li', '', t))); notes.append(ol);
    paper.append(stats, notes);
  }
  const body = el('div', 'dr-prose');
  // everything after the inserted blocks is the post body, up to the back link
  const back = article.querySelector('.back');
  const move = [];
  for (let cur = paper.nextSibling; cur && cur !== back; cur = cur.nextSibling) move.push(cur);
  move.forEach(x => body.append(x));
  body.querySelectorAll('table').forEach(t => { const w = el('div', 'dr-tablewrap'); t.before(w); w.append(t); });
  paper.append(body);

  // ---------- lower blocks ----------
  const scope = el('section', 'dr-block');
  scope.append(el('h2', '', 'Scope of the series'),
    el('p', '', `${BEAT} Case study: O&D Impression 3D, a two-partner 3D printing shop in Welkenraedt, and its quote-intake tool.`));
  const rev = el('section', 'dr-block');
  rev.append(el('h2', '', 'Revision history'));
  const wrap = el('div', 'dr-tablewrap');
  const table = el('table', 'dr-revs');
  const thead = el('thead'); const hr = el('tr');
  ['Rev', 'Sheet', 'Date', 'Status'].forEach(h => hr.append(el('th', '', h)));
  thead.append(hr); table.append(thead);
  const tbody = el('tbody');
  for (let i = 1; i <= TOTAL; i++) {
    const tr = el('tr', i === week ? 'now' : (W[i] ? '' : 'pending'));
    tr.append(el('td', 'r', nn(i)));
    const td = el('td');
    if (W[i]) {
      const a = el('a'); a.href = url(i);
      a.append(el('strong', '', W[i].skill), el('span', 'rs', W[i].short)); td.append(a);
    } else { td.append(el('strong', '', 'Not issued yet')); }
    tr.append(td);
    tr.append(el('td', 'd', W[i] ? W[i].date + (W[i].revDate ? ` · rev ${W[i].rev} ${W[i].revDate}` : '') : '—'));
    tr.append(el('td', 'st', W[i] ? (i === week ? 'CURRENT SHEET' : 'ISSUED') : '—'));
    tbody.append(tr);
  }
  table.append(tbody); wrap.append(table); rev.append(wrap);
  (back || article.lastElementChild).before(scope, rev);
})();
