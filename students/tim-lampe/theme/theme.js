// Tim Lampe · AI in M&A Valuation theme ("The Valuation Desk").
// Builds the cover (ticker + candlestick progress chart), the analyst-rating stamp, KPI tiles,
// thesis box and sidebar (simulated index chart + watchlist) from the post's frontmatter.
// All market data on the page is simulated (seeded random walks) and labelled as such.
// Optional frontmatter: verdict, rating, kpis ("value | label ; …"; start a value with "-" for a red tile),
// takeaways ("a ; b ; …"), ticker ("text ; text ; …").
(() => {
  const BEAT = 'How AI changes M&A valuation: peer-group (comps) selection, multiples, due-diligence analysis and the tools that sell them. A field where a number is only as good as the comparables behind it.';
  const GLOSSARY = [
    ['Comparable companies (comps)', 'Listed or transacted peers whose multiples are used to value a target.'],
    ['EV/EBITDA', 'Enterprise value divided by EBITDA: the most common multiple in M&A.'],
    ['Football field', 'A chart that stacks valuation ranges from different methods on one axis.'],
    ['Candlestick', 'One bar per period showing open, high, low and close. Green closed higher, red lower.'],
    ['GEO', 'Generative Engine Optimization: being named and cited by AI answer engines.'],
  ];
  const DEFAULT_TICKER = ['AI IN M&A VALUATION', 'PEER GROUPS ▲', 'MULTIPLES ▲', 'MANUAL COMPS ▼', 'BLIND TRUST IN AI ▼'];

  const metaEl = document.getElementById('post-meta');
  const article = document.querySelector('article');
  if (!metaEl || !article) return;
  const meta = JSON.parse(metaEl.textContent);
  const TOTAL = 12; // weeks shown on the progress chart
  const week = Math.max(1, Math.min(TOTAL, +meta.week || 1));
  const nn = String(week).padStart(2, '0');
  const split = (s, sep) => (s || '').split(sep).map(x => x.trim()).filter(Boolean);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  // ---------- cover ----------
  const cover = el('header', 'tm-cover');
  const ticker = el('div', 'tm-ticker');
  const items = split(meta.ticker, ';');
  (items.length ? items : DEFAULT_TICKER).forEach(t => {
    const s = el('span', t.includes('▲') ? 'up' : t.includes('▼') ? 'dn' : '', t); ticker.append(s);
  });
  const inner = el('div', 'tm-in');
  const field = el('div', 'tm-field');
  const top = el('div', 'tm-field-top');
  top.append(el('span', '', `Valuation desk · Week ${week} of ${TOTAL}`), el('span', '', `Progress chart · ${TOTAL} weeks · simulated`));

  // seeded random numbers: the "market" looks the same on every page and every reload
  const rng = seed => () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const walk = (seed, n, start, vol, drift = 0) => { const r = rng(seed), out = [start];
    for (let i = 1; i < n; i++) out.push(Math.max(1, out[i - 1] * (1 + drift + (r() - .5) * vol))); return out; };

  // one candle per course week: open, high, low, close, volume
  const cr = rng(314), candles = []; let px = 100;
  for (let i = 0; i < TOTAL; i++) {
    const o = px, c = o * (1 + .02 + (cr() - .45) * .2);
    candles.push({ o, c, h: Math.max(o, c) * (1 + cr() * .035), l: Math.min(o, c) * (1 - cr() * .035), v: 25 + cr() * 75 });
    px = c;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 880 152');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `Candlestick chart: week ${week} of ${TOTAL} of the series (simulated prices)`);
  const svgEl = (tag, attrs, text, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text) e.textContent = text; parent.appendChild(e); return e; };
  const L = 16, R = 806, step = (R - L) / TOTAL, P0 = 24, P1 = 104, V1 = 132, GOLD = '#c99a2e', UP = '#4fd69c', DN = '#ff7b72';
  const pMin = Math.min(...candles.map(c => c.l)) * .98, pMax = Math.max(...candles.map(c => c.h)) * 1.02;
  const Y = p => P1 - (p - pMin) / (pMax - pMin) * (P1 - P0);
  const yLast = Y(candles[week - 1].c);
  // grid lines + price scale on the right
  for (let g = 0; g <= 3; g++) {
    const p = pMin + (pMax - pMin) * g / 3, y = Y(p);
    svgEl('line', { x1: L, x2: R, y1: y, y2: y, stroke: 'rgba(255,255,255,.09)', 'stroke-width': 1 });
    if (Math.abs(y - yLast) > 11) svgEl('text', { class: 'axis pl', x: R + 8, y: y + 3 }, p.toFixed(0));
  }
  svgEl('line', { x1: L, x2: R, y1: V1 + 2, y2: V1 + 2, stroke: 'rgba(255,255,255,.25)', 'stroke-width': 1 });
  const cx = L + (week - 1) * step + step / 2;
  svgEl('line', { x1: cx, x2: cx, y1: 16, y2: V1 + 2, stroke: GOLD, 'stroke-width': 1, 'stroke-dasharray': '4 3', opacity: .7 });
  const bars = [];
  for (let i = 0; i < TOTAL; i++) {
    const done = i < week, now = i === week - 1, c = candles[i], x = L + i * step + step / 2;
    const g = svgEl('a', { class: 'tm-wk' + (now ? ' now' : '') });
    svgEl('rect', { class: 'col', x: x - step / 2, y: 16, width: step, height: V1 - 12, fill: 'transparent' }, null, g);
    if (done) {
      const col = now ? GOLD : c.c >= c.o ? UP : DN;
      svgEl('line', { x1: x, x2: x, y1: Y(c.h), y2: Y(c.l), stroke: col, 'stroke-width': 2 }, null, g);
      const yo = Y(c.o), yc = Y(c.c);
      svgEl('rect', { class: 'bar', x: x - 14, y: Math.min(yo, yc), width: 28, height: Math.max(3, Math.abs(yo - yc)), rx: 1.5,
        fill: col, stroke: 'transparent', 'stroke-width': 2 }, null, g);
      const vh = c.v / 100 * 22;
      svgEl('rect', { x: x - 14, y: V1 - vh, width: 28, height: vh, fill: col, opacity: .4 }, null, g);
    }
    svgEl('text', { class: 'axis' + (now ? ' now' : ''), x, y: 148, 'text-anchor': 'middle' }, 'W' + String(i + 1).padStart(2, '0'), g);
    svgEl('title', {}, done ? `Week ${i + 1} (simulated candle)` : `Week ${i + 1} · not published yet`, g);
    bars.push(g);
  }
  // last price line + tag, like a trading terminal
  const last = candles[week - 1], yl = Y(last.c);
  svgEl('line', { x1: L, x2: R, y1: yl, y2: yl, stroke: GOLD, 'stroke-width': 1, 'stroke-dasharray': '2 3', opacity: .8 });
  const lt = svgEl('g', { class: 'lastp' });
  svgEl('rect', { x: R + 2, y: yl - 8, width: 54, height: 16, rx: 2, fill: GOLD }, null, lt);
  svgEl('text', { class: 'tag', x: R + 29, y: yl + 4, 'text-anchor': 'middle' }, last.c.toFixed(1), lt);
  const tag = svgEl('g', {});
  svgEl('rect', { x: cx - 30, y: 0, width: 60, height: 16, rx: 2, fill: GOLD }, null, tag);
  svgEl('text', { class: 'tag', x: cx, y: 12, 'text-anchor': 'middle' }, 'NOW · W' + nn, tag);
  const scroller = el('div', 'tm-scroll'); scroller.append(svg);
  field.append(top, scroller);

  const who = el('div', 'tm-who');
  who.append(el('span', '', meta.author || 'Tim Lampe'));
  if (meta.date) who.append(el('span', '', new Date(meta.date + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })));
  if (meta.verdict) who.append(el('span', 'tm-badge', 'Verdict: ' + meta.verdict));
  inner.append(field, el('div', 'tm-eyebrow', `AI in M&A Valuation · Note ${nn}${meta.skill ? ' · ' + meta.skill : ''}`), el('h1', '', meta.title || ''), who);
  cover.append(ticker, inner);
  document.querySelector('nav.top').after(cover);
  // on a phone the chart scrolls sideways; start with the current week in view
  requestAnimationFrame(() => { scroller.scrollLeft = cx / 880 * svg.clientWidth - scroller.clientWidth / 2; });

  // ---------- report card + sidebar ----------
  const layout = el('div', 'tm-layout');
  article.before(layout);
  layout.append(article);
  const byline = article.querySelector('.byline');
  const intro = document.createDocumentFragment();
  if (meta.rating) {
    article.classList.add('tm-rated');
    const r = el('div', 'tm-rating'); r.append(el('small', '', 'Analyst rating'), el('b', '', meta.rating));
    intro.append(r);
  }
  const kpis = split(meta.kpis, ';');
  if (kpis.length) {
    const box = el('div', 'tm-kpis');
    kpis.forEach(k => {
      let [v, l] = k.split('|').map(s => s.trim());
      const neg = v.startsWith('-') && v.length > 1 && !/\d\s*\/\s*\d/.test(v);
      if (neg) v = v.slice(1).trim();
      const c = el('div', 'tm-kpi' + (neg ? ' neg' : '')); c.append(el('b', '', v), el('span', '', l || '')); box.append(c);
    });
    intro.append(box);
  }
  const takeaways = split(meta.takeaways, ';');
  if (takeaways.length) {
    const box = el('div', 'tm-thesis'), ul = el('ul');
    box.append(el('h3', '', 'Investment thesis'));
    takeaways.forEach(t => ul.append(el('li', '', t)));
    box.append(ul); intro.append(box);
  }
  (byline || article.firstChild).after(intro);
  // the post repeats its title as a heading: hide that copy (it is on the cover already)
  article.querySelectorAll(':scope > h2').forEach(h => { if (h.textContent.trim() === (meta.title || '').trim()) h.classList.add('tm-dup'); });
  // claim tags in tables become coloured pills
  article.querySelectorAll('td').forEach(td => {
    const t = td.textContent.trim().toLowerCase();
    const k = ['fact', 'aspiration', 'avoidance'].find(w => t.startsWith(w));
    if (k && td.children.length === 0) { const p = el('span', 'tm-pill ' + k, td.textContent.trim()); td.textContent = ''; td.append(p); }
  });

  // ---------- sidebar ----------
  const side = el('aside', 'tm-side');
  side.setAttribute('aria-label', 'About this series');
  const card = (title, ...kids) => { const c = el('div', 'tm-card'); c.append(el('h4', '', title), ...kids); side.append(c); return c; };
  card('The beat', el('p', '', BEAT));

  // simulated index chart with range tabs and a hover read-out
  const RANGES = { '1W': [8, 11, .03], '1M': [30, 12, .035], '1Y': [52, 13, .05] };
  const idx = el('div', 'tm-idx up');
  const head = el('div', 'tm-idx-head'), val = el('b'), chg = el('span');
  head.append(val, chg);
  const tabs = el('div', 'tm-tabs');
  const IW = 240, IH = 96;
  const isvg = document.createElementNS(NS, 'svg');
  isvg.setAttribute('viewBox', `0 0 ${IW} ${IH}`); isvg.setAttribute('role', 'img');
  isvg.setAttribute('aria-label', 'Simulated AI-VAL index chart');
  let cur = null;
  const fmt = (v, first) => { const p = (v / first - 1) * 100; return [v.toFixed(2), (p >= 0 ? '▲ +' : '▼ ') + p.toFixed(1) + '%', p >= 0]; };
  const show = (i) => {
    const [v, c, up] = fmt(cur.s[i], cur.s[0]);
    val.textContent = v; chg.textContent = c; idx.className = 'tm-idx ' + (up ? 'up' : 'dn');
  };
  const draw = (key) => {
    const [n, seed, vol] = RANGES[key];
    const s = walk(seed, n, 100, vol, .004);
    const mn = Math.min(...s), mx = Math.max(...s);
    const X = i => i / (n - 1) * IW, YY = v => IH - 6 - (v - mn) / (mx - mn || 1) * (IH - 16);
    isvg.textContent = '';
    cur = { s, X, YY };
    const pts = s.map((v, i) => `${X(i).toFixed(1)},${YY(v).toFixed(1)}`);
    svgEl('path', { d: `M${pts.join('L')}L${IW},${IH}L0,${IH}Z`, fill: 'currentColor', opacity: .12 }, null, isvg);
    svgEl('polyline', { points: pts.join(' '), fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, null, isvg);
    cur.cross = svgEl('line', { y1: 0, y2: IH, stroke: 'currentColor', 'stroke-width': 1, opacity: 0, 'stroke-dasharray': '3 3' }, null, isvg);
    cur.dot = svgEl('circle', { r: 3.5, fill: 'currentColor', cx: X(n - 1), cy: YY(s[n - 1]) }, null, isvg);
    show(n - 1);
    tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.textContent === key)));
  };
  isvg.addEventListener('pointermove', e => {
    const r = isvg.getBoundingClientRect(), n = cur.s.length;
    const i = Math.max(0, Math.min(n - 1, Math.round((e.clientX - r.left) / r.width * (n - 1))));
    cur.cross.setAttribute('x1', cur.X(i)); cur.cross.setAttribute('x2', cur.X(i)); cur.cross.setAttribute('opacity', .6);
    cur.dot.setAttribute('cx', cur.X(i)); cur.dot.setAttribute('cy', cur.YY(cur.s[i])); show(i);
  });
  isvg.addEventListener('pointerleave', () => { const n = cur.s.length; cur.cross.setAttribute('opacity', 0);
    cur.dot.setAttribute('cx', cur.X(n - 1)); cur.dot.setAttribute('cy', cur.YY(cur.s[n - 1])); show(n - 1); });
  Object.keys(RANGES).forEach(k => { const b = el('button', '', k); b.type = 'button'; b.addEventListener('click', () => draw(k)); tabs.append(b); });
  idx.append(el('small', '', 'AI-VAL index'), head, isvg, tabs, el('p', 'tm-note', 'Simulated data, not real prices.'));
  card('Market watch', idx);
  draw('1M');

  // watchlist: four made-up tickers with sparklines
  const WATCH = [['COMPS', 21, 142.3], ['MULTX', 22, 87.6], ['GEOX', 23, 31.9], ['HYPE', 24, 64.2]];
  const list = el('div', 'tm-watch');
  WATCH.forEach(([name, seed, base]) => {
    const s = walk(seed, 24, base, .07), p = s[s.length - 1] / s[s.length - 2] - 1, up = p >= 0;
    const row = el('div', 'tm-w ' + (up ? 'up' : 'dn'));
    const sp = document.createElementNS(NS, 'svg'); sp.setAttribute('viewBox', '0 0 64 22'); sp.setAttribute('aria-hidden', 'true');
    const mn = Math.min(...s), mx = Math.max(...s);
    svgEl('polyline', { points: s.map((v, i) => `${(i / 23 * 64).toFixed(1)},${(20 - (v - mn) / (mx - mn || 1) * 18).toFixed(1)}`).join(' '),
      fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, null, sp);
    row.append(el('b', '', name), sp, el('span', '', s[s.length - 1].toFixed(1)), el('em', '', (up ? '▲ +' : '▼ ') + (p * 100).toFixed(1) + '%'));
    list.append(row);
  });
  list.append(el('p', 'tm-note', 'Made-up tickers, simulated prices.'));
  card('Watchlist', list);
  const voyage = el('ul'); voyage.append(el('li', '', 'Loading…'));
  card('The series so far', voyage);
  const dl = el('dl');
  GLOSSARY.forEach(([t, d]) => dl.append(el('dt', '', t), el('dd', '', d)));
  card('Glossary', dl);
  const evidence = [...article.querySelectorAll('a[href*="/evidence/"]')];
  if (evidence.length) {
    const links = el('div', 'tm-links');
    evidence.forEach(a => { const l = el('a', '', a.textContent); l.href = a.href; links.append(l); });
    card('Evidence', el('p', '', 'The full workings behind this week:'), links);
  }
  layout.append(side);

  // the series: every published week, from the site's post list
  fetch('../manifest.json').then(r => r.json()).then(all => {
    const mine = all.filter(p => p.url.startsWith(`posts/${meta.folder}-`)).sort((a, b) => a.week - b.week);
    voyage.textContent = '';
    mine.forEach(p => {
      const li = el('li', p.week === week && p.url.endsWith(meta.slug + '.html') ? 'now' : '');
      const a = el('a'); a.href = '../' + p.url;
      a.append(el('b', '', `${String(p.week).padStart(2, '0')} ${p.skill || 'Week ' + p.week}`), el('small', '', (p.meta && p.meta.verdict) || p.title));
      li.append(a); voyage.append(li);
      const bar = bars[p.week - 1];
      if (bar && !bar.hasAttribute('href')) {
        const label = `Week ${p.week}${p.skill ? ' · ' + p.skill : ''}${p.meta && p.meta.verdict ? ': ' + p.meta.verdict : ''}`;
        bar.setAttribute('href', '../' + p.url); bar.setAttribute('aria-label', label);
        bar.classList.add('linked'); bar.querySelector('title').textContent = label;
      }
    });
    const last = mine.length ? Math.max(...mine.map(p => p.week)) : week;
    if (last < TOTAL) { const li = el('li'); li.append(el('span', 'tm-next', `${String(last + 1).padStart(2, '0')} · next up`)); voyage.append(li); }
  }).catch(() => { voyage.textContent = ''; });
})();
