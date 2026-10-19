// Tim Lampe · AI in M&A Valuation theme ("The Valuation Desk").
// Builds the cover (ticker + football-field timeline), the analyst-rating stamp, KPI tiles,
// thesis box and sidebar from the post's frontmatter.
// Optional frontmatter: verdict, rating, kpis ("value | label ; …"; start a value with "-" for a red tile),
// takeaways ("a ; b ; …"), ticker ("text ; text ; …").
(() => {
  const BEAT = 'How AI changes M&A valuation: peer-group (comps) selection, multiples, due-diligence analysis and the tools that sell them. A field where a number is only as good as the comparables behind it.';
  const GLOSSARY = [
    ['Comparable companies (comps)', 'Listed or transacted peers whose multiples are used to value a target.'],
    ['EV/EBITDA', 'Enterprise value divided by EBITDA: the most common multiple in M&A.'],
    ['Football field', 'A chart that stacks valuation ranges from different methods on one axis.'],
    ['GEO', 'Generative Engine Optimization: being named and cited by AI answer engines.'],
  ];
  const DEFAULT_TICKER = ['AI IN M&A VALUATION', 'PEER GROUPS ▲', 'MULTIPLES ▲', 'MANUAL COMPS ▼', 'BLIND TRUST IN AI ▼'];

  const metaEl = document.getElementById('post-meta');
  const article = document.querySelector('article');
  if (!metaEl || !article) return;
  const meta = JSON.parse(metaEl.textContent);
  const week = Math.max(1, Math.min(12, +meta.week || 1));
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
  top.append(el('span', '', `Valuation desk · Week ${week} of 12`), el('span', '', 'Football field: 12 weeks'));

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 880 96');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `Timeline: week ${week} of 12`);
  const svgEl = (tag, attrs, text, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text) e.textContent = text; parent.appendChild(e); return e; };
  const X0 = 20, W = 840, step = W / 12;
  // axis line + ticks
  svgEl('line', { x1: X0, x2: X0 + W, y1: 70, y2: 70, stroke: 'rgba(255,255,255,.25)', 'stroke-width': 1 });
  const bars = [];
  for (let i = 0; i < 12; i++) {
    const done = i < week, now = i === week - 1;
    // each week is a bar in the "football field": published weeks are filled, the current one is gold
    const g = svgEl('a', { class: 'tm-wk' + (now ? ' now' : '') });
    const h = done ? 30 + (i % 3) * 6 : 16;
    svgEl('rect', { x: X0 + i * step + 5, y: 66 - h, width: step - 10, height: h, rx: 2,
      fill: now ? '#c99a2e' : done ? '#1b8a5a' : 'transparent', stroke: done ? 'transparent' : 'rgba(255,255,255,.35)',
      'stroke-dasharray': done ? '0' : '3 3', class: 'bar' }, null, g);
    svgEl('text', { class: 'axis' + (now ? ' now' : ''), x: X0 + i * step + step / 2, y: 86, 'text-anchor': 'middle' }, 'W' + String(i + 1).padStart(2, '0'), g);
    svgEl('title', {}, `Week ${i + 1} · not published yet`, g);
    bars.push(g);
  }
  // "current price" marker on the current week
  const cx = X0 + (week - 1) * step + step / 2;
  svgEl('line', { x1: cx, x2: cx, y1: 14, y2: 70, stroke: '#c99a2e', 'stroke-width': 1.5, 'stroke-dasharray': '4 3' });
  const tag = svgEl('g', {});
  svgEl('rect', { x: cx - 30, y: 0, width: 60, height: 16, rx: 2, fill: '#c99a2e' }, null, tag);
  svgEl('text', { class: 'tag', x: cx, y: 12, 'text-anchor': 'middle' }, 'NOW · W' + nn, tag);
  field.append(top, svg);

  const who = el('div', 'tm-who');
  who.append(el('span', '', meta.author || 'Tim Lampe'));
  if (meta.date) who.append(el('span', '', new Date(meta.date + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })));
  if (meta.verdict) who.append(el('span', 'tm-badge', 'Verdict: ' + meta.verdict));
  inner.append(field, el('div', 'tm-eyebrow', `AI in M&A Valuation · Note ${nn}${meta.skill ? ' · ' + meta.skill : ''}`), el('h1', '', meta.title || ''), who);
  cover.append(ticker, inner);
  document.querySelector('nav.top').after(cover);

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
    if (last < 12) { const li = el('li'); li.append(el('span', 'tm-next', `${String(last + 1).padStart(2, '0')} · next up`)); voyage.append(li); }
  }).catch(() => { voyage.textContent = ''; });
})();
