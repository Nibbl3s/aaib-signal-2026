// The Last Check · customs dossier page (students/jasper-derieuw/pages/the-last-check.md).
// Loaded by theme.js on extra pages only. All data below comes from my own files:
// probe run 1 (16 Nov 2026, 10 testers), the test-kit answer key, and the recorded
// prompt v2 answers (Claude Sonnet 5.5, Week 8 run 1) with their routing (route-check).
(() => {
  const body = document.body, article = document.querySelector('article');
  if (!article) return;
  body.classList.add('ls');
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  // ---------- cover: the page title and byline move into the manila file ----------
  const cover = article.querySelector('.ls-cover');
  const h1 = article.querySelector(':scope > h1'), by = article.querySelector(':scope > .byline'), meta = article.querySelector(':scope > .meta');
  if (by) by.textContent = by.textContent.replace(/(\d{4})-(\d{2})-(\d{2})/, (m, y, mo, d) =>
    new Date(+y, +mo - 1, +d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));
  if (cover && h1) { cover.querySelector('.ls-label').after(h1); if (by) h1.after(by); }
  if (meta) meta.remove();

  // ---------- card stacks: one card per planted mistake ----------
  article.querySelectorAll('.ls-stack').forEach(s => {
    const caught = +s.dataset.caught, total = +s.dataset.total, row = el('div', 'ls-cards');
    row.setAttribute('role', 'img');
    row.setAttribute('aria-label', `${caught} of ${total} caught`);
    for (let i = 0; i < total; i++) row.append(el('span', 'ls-card' + (i < caught ? ' k' : '')));
    s.append(row);
  });
  article.querySelectorAll('.ls-stacks[data-legend]').forEach(s => s.append(el('p', 'ls-legend', s.dataset.legend)));

  // ---------- glossary words: tap to explain ----------
  article.querySelectorAll('span.ls-gl[title]').forEach(s => {
    const b = el('button', 'ls-gl'); b.type = 'button'; b.textContent = s.textContent;
    b.setAttribute('aria-expanded', 'false');
    const def = s.title;
    b.onclick = () => {
      const open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!open));
      const host = b.closest('p, li, span, div');
      const old = host.parentNode.querySelector(`.ls-def[data-for="${CSS.escape(b.textContent)}"]`);
      if (open && old) old.remove();
      if (!open) { const d = el('span', 'ls-def'); d.dataset.for = b.textContent; d.textContent = b.textContent + ': ' + def; host.after(d); }
    };
    s.replaceWith(b);
  });

  // ---------- flip cards ----------
  article.querySelectorAll('.ls-flip').forEach(f => {
    f.setAttribute('aria-pressed', 'false');
    f.onclick = () => { const on = f.classList.toggle('on'); f.setAttribute('aria-pressed', String(on)); };
  });

  // ---------- exhibit 5: one invoice, two worlds ----------
  const V = { C: ['CLEAR', 'clear'], R: ['NEEDS REVIEW', 'review'], H: ['HIGH RISK', 'high'] };
  const CARDS = [
    { n: 1, inv: 'INV-2026-01-1102', text: 'Supplier: Foshan Nanhai Textiles Co. Ltd.\nOrigin: China\nHS code: 6302.60\nValue: EUR 8,400.00\nShipment: 500 cotton bath towels,\n  Foshan to Antwerp', card: 'C', hold: false,
      desk: 'A clean invoice. All 10 testers cleared it.',
      ai: '{"supplier_name": "Foshan Nanhai Textiles Co. Ltd.", "flag_status": "clear"}', why: [], lane: 'quick' },
    { n: 2, inv: 'INV-2026-01-1108', text: '供应商 (Supplier):\n黑河农村商业银行有限公司\nOrigin: China\nHS code: 8471.30\nValue: EUR 88,000.00\nShipment: computer hardware,\n  Heihe to Antwerp', card: 'C', hold: true, planted: true,
      desk: 'This is a bank on the sanctions list, written in Chinese characters. 4 of 10 testers cleared it: 3 of 5 with a quick tick, 1 of 5 with the key.',
      ai: '{"supplier_name": "黑河农村商业银行有限公司 (Heihe Rural Commercial Bank Co., Ltd.)", "flag_status": "high risk match"}', why: ['listed name in the invoice', 'supplier name not in Latin script', 'AI flag: high risk match'], lane: 'full' },
    { n: 3, inv: 'INV-2026-01-1107', text: 'Supplier: Huawei Technologies Co. Ltd.\nOrigin: China\nHS code: 8517.62\nValue: EUR 210,000.00\nShipment: networking equipment,\n  Shenzhen to Rotterdam', card: 'C', hold: false,
      desk: 'A famous name, but not on the list. All 10 testers cleared it.',
      ai: '{"supplier_name": "Huawei Technologies Co. Ltd.", "flag_status": "clear"}', why: [], lane: 'quick' },
    { n: 4, inv: 'INV-2026-01-1109', text: 'Supplier: Suifenhe Commercial Bank\nOrigin: China\nHS code: 8517.62\nValue: EUR 44,000.00\nShipment: telecom parts,\n  Suifenhe to Hamburg', card: 'R', hold: true,
      desk: 'A partial match with a listed bank: it needs a person. All 10 testers held it.',
      ai: '{"supplier_name": "Suifenhe Commercial Bank", "flag_status": "needs review"}', why: ['listed name in the invoice', 'AI flag: needs review'], lane: 'full' },
    { n: 5, inv: '[illegible]', text: 'Supplier: [text corrupted\n  in transmission]\nOrigin: China\nHS code: 85XX.XX\nValue: [amount not legible]\nShipment: electronics,\n  origin port unclear', card: 'C', hold: true, planted: true,
      desk: 'The invoice is unreadable, so the AI\'s "clear" was a guess. 2 of 10 testers cleared it, both with a quick tick; nobody with the key.',
      ai: '{"supplier_name": "not found", "hs_code": "not found", "declared_value": "not found", "flag_status": "cannot be determined"}', why: ['AI flag: cannot be determined', 'missing: supplier, HS code, value'], lane: 'full' },
    { n: 6, inv: 'INV-2026-01-1103', text: 'Supplier: Heihe Rural Commercial\n  Bank Co. Ltd.\nOrigin: China\nHS code: 8471.30\nValue: EUR 152,000.00\nShipment: server hardware,\n  Heihe to Rotterdam', card: 'H', hold: true,
      desk: 'An exact match with a listed bank. All 10 testers held it.',
      ai: '{"supplier_name": "Heihe Rural Commercial Bank Co. Ltd.", "flag_status": "high risk match"}', why: ['listed name in the invoice', 'AI flag: high risk match'], lane: 'full' },
    { n: 7, inv: 'INV-2026-01-1110', text: 'Bill to: EuroTrade Logistics NV\nForwarder: Kuehne Nagel Intl AG\nSupplier: Alibaba Group Holding Ltd.\nOrigin: China · HS 3926.90\nValue: EUR 15,750.00\nShipment: plastic packaging,\n  Shanghai to Antwerp', card: 'C', hold: false,
      desk: 'Several parties, none of them on the list. All 10 testers cleared it.',
      ai: '{"supplier_name": "Alibaba Group Holding Ltd.", "flag_status": "clear"}', why: [], lane: 'quick' },
    { n: 8, inv: 'INV-2026-01-1112', text: 'Supplier: Heihe Rural Commercial\n  Bank Co. Ltd. (Hong Kong Branch)\nOrigin: Hong Kong\nHS code: 8471.30\nValue: EUR 73,400.00\nShipment: computer hardware,\n  Hong Kong to Antwerp', card: 'R', hold: true, planted: true,
      desk: 'A branch of a listed bank: the right call is high risk, not just review. All 10 testers held it, but only 5 marked it high risk.',
      ai: '{"supplier_name": "Heihe Rural Commercial Bank Co. Ltd. (Hong Kong Branch)", "flag_status": "high risk match"}', why: ['listed name in the invoice', 'AI flag: high risk match'], lane: 'full' },
  ];
  const tryBox = document.getElementById('ls-try');
  if (tryBox) {
    tryBox.textContent = '';
    let cur = 0, view = 'desk';
    const answers = {};
    const bar = el('div', 'ls-bar'), cardRow = el('div', 'ls-cardrow'), viewRow = el('div', 'ls-views');
    const tabs = CARDS.map((c, i) => { const b = el('button', 'ls-tab', `<span class="w">Card </span>${c.n}`); b.type = 'button'; b.setAttribute('aria-label', `Card ${c.n}`); b.onclick = () => { cur = i; draw(); }; cardRow.append(b); return b; });
    const views = [['desk', 'On the desk'], ['pc', 'On the computer']].map(([k, t]) => { const b = el('button', 'ls-tab', t); b.type = 'button'; b.onclick = () => { view = k; draw(); }; viewRow.append(b); return [k, b]; });
    bar.append(cardRow, viewRow);
    const grid = el('div', 'ls-grid'), inv = el('div', 'ls-invoice'), panel = el('div', 'ls-panel');
    const score = el('p', 'ls-score');
    grid.append(inv, panel);
    tryBox.append(bar, grid, score);
    function draw() {
      const c = CARDS[cur];
      tabs.forEach((b, i) => { b.classList.toggle('on', i === cur); const a = answers[i]; b.classList.toggle('done', a === true); b.classList.toggle('miss', a === false); });
      views.forEach(([k, b]) => b.classList.toggle('on', k === view));
      inv.innerHTML = '';
      inv.append(el('span', 'no', `CARD ${c.n} · INVOICE #${c.inv}`), document.createTextNode(c.text));
      const v = V[c.card], st = el('span', 'ls-verdict ' + v[1], 'AI: ' + v[0]);
      inv.append(st);
      panel.innerHTML = '';
      if (view === 'desk') {
        panel.append(el('h3', '', "You're the last check."));
        const btns = el('div', 'ls-btns'), out = el('p', 'ls-out');
        [['Clear it', 'clear', false], ['Hold it', 'hold', true]].forEach(([t, cls, hold]) => {
          const b = el('button', 'ls-btn ' + cls, t); b.type = 'button';
          b.onclick = () => {
            const right = hold === c.hold; answers[cur] = right;
            out.innerHTML = `<b class="${right ? 'ok' : 'no'}">${right ? 'Right.' : 'That one slipped through.'}</b> ${c.desk}`;
            draw(); panel.querySelector('.ls-out').innerHTML = out.innerHTML;
          };
          btns.append(b);
        });
        panel.append(btns, out);
        if (answers[cur] !== undefined) out.innerHTML = `<b class="${answers[cur] ? 'ok' : 'no'}">${answers[cur] ? 'Right.' : 'That one slipped through.'}</b> ${c.desk}`;
      } else {
        const t = el('div', 'ls-term');
        const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
        let h = `<span class="d">&gt; check card-${c.n}</span><br><span class="d">model answer:</span><br><span class="y">${esc(c.ai)}</span><br><span class="d">rules:</span><br>`;
        h += c.why.length ? c.why.map(w => `<span class="r">✗</span> ${esc(w)}`).join('<br>') : '<span class="g">✓</span> no list match, no warning, Latin script, all fields found';
        h += `<br>${c.lane === 'full' ? '<span class="r">→ FULL CHECK by a person</span>' : '<span class="g">→ QUICK CHECK: a person still confirms</span>'}`;
        t.innerHTML = h;
        panel.append(el('h3', '', 'What my Build does today'), t,
          el('p', 'ls-note', 'The card shows my first version\'s answer (23 September). This is the current version, with its rules, on the same invoice: the recorded answer from my Build log.'));
      }
      const done = Object.keys(answers).length, caught = CARDS.filter((x, i) => x.planted && answers[i] === true).length;
      score.innerHTML = done < CARDS.length
        ? `Answered ${done} of 8 cards. Three of them carry a wrong AI verdict.`
        : `You caught <b>${caught} of 3</b> planted mistakes. The testers: 7 of 15 with a quick tick, 12 of 15 with the key.`;
    }
    draw();
  }

  // ---------- exhibit 6: the money ----------
  const calc = document.getElementById('ls-calc');
  if (calc) {
    calc.textContent = '';
    const MAX = 10, eur = v => '€' + Math.round(Math.abs(v)).toLocaleString('en-GB');
    const saving = (t, errors) => 81000 - (12520 + 18000 * 0.75 * (0.7 * t + 0.3 * 6) + errors);
    const be = errors => ((81000 - 12520 - errors) / 13500 - 1.8) / 0.7;   // minutes where the saving hits zero
    const beHi = be(0), beLo = be(17982);
    const lab = el('label', '', 'Minutes per AI-assisted check');
    lab.htmlFor = 'ls-mins';
    const mins = el('div', 'ls-mins');
    const range = el('input', 'ls-range'); Object.assign(range, { type: 'range', id: 'ls-mins', min: 0.5, max: MAX, step: 0.1, value: 2 });
    const scale = el('div', 'ls-scale'), pct = m => (m / MAX * 100) + '%';
    const zone = (a, b, c) => { const z = el('div', 'ls-zone ' + c); z.style.left = pct(a); z.style.width = `calc(${pct(b)} - ${pct(a)})`; scale.append(z); };
    zone(0, beLo, 'g'); zone(beLo, beHi, 'a'); zone(beHi, MAX, 'r');
    const mark = (m, txt, cls = '') => { const k = el('div', 'ls-mark ' + cls, txt); k.style.left = pct(m); scale.append(k); return k; };
    mark(0.4, 'paper test,<br>name only', 'low');
    mark(2, 'my<br>assumption');
    const sp = mark(5, 'a customs specialist:<br>5–10 min', 'span'); sp.style.width = `calc(${pct(10)} - ${pct(5)})`;
    const ticks = el('div', 'ls-ticks', [0, 2, 4, 6, 8, 10].map(x => `<span>${x} min</span>`).join(''));
    const res = el('p', 'ls-result'), sub = el('p', 'ls-result-sub');
    const key = el('p', 'ls-note', `Green: saves money even with the most AI errors · striped: it depends on the errors (${beLo.toFixed(1)}–${beHi.toFixed(1)} min) · red: costs more than today`);
    calc.append(lab, mins, range, scale, ticks, res, sub, key);
    const upd = () => {
      const t = +range.value, hi = saving(t, 0), lo = saving(t, 17982);
      mins.textContent = t.toFixed(1) + ' min';
      res.classList.toggle('loss', hi < 0);
      if (lo >= 0) { res.textContent = `Saves ${eur(lo)} to ${eur(hi)} a year`; sub.textContent = 'The range depends on how many AI errors the analysts must correct.'; }
      else if (hi > 0) { res.textContent = `Between a loss of ${eur(lo)} and a saving of ${eur(hi)} a year`; sub.textContent = 'Here, the number of AI errors decides whether it pays.'; }
      else { res.textContent = `Costs ${eur(hi)} to ${eur(lo)} a year more than today`; sub.textContent = 'At this speed, checking the AI takes longer than doing it by hand.'; }
    };
    range.oninput = upd; upd();
  }

  // ---------- reveal sheets on scroll ----------
  const sheets = article.querySelectorAll('.ls-sheet');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 });
    sheets.forEach(s => { s.classList.add('ls-reveal'); io.observe(s); });
  }
})();
