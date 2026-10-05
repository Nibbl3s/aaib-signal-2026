// Jasper Derieuw · EU–China Trade Compliance theme.
// Builds the cover (Shanghai → Antwerp route), the stamp, KPI cards, key takeaways and the sidebar
// from the post's frontmatter. Optional frontmatter: verdict, stamp, kpis ("value | label ; …"), takeaways ("a ; b ; …").
(() => {
  const PORTS = ['Shanghai', 'Ningbo', 'Hong Kong', 'Singapore', 'Colombo', 'Jeddah', 'Suez', 'Port Said', 'Piraeus', 'Algeciras', 'Rotterdam', 'Antwerp'];
  const BEAT = 'How AI changes trade compliance between the EU and China: sanctions and denied-party screening, customs data and the EU AI Act. A field where a wrong answer is not a bad experience but a legal risk.';
  const GLOSSARY = [
    ['Denied-party screening', 'Checking every supplier, buyer and intermediary against sanctions lists before trading.'],
    ['HS code', 'The international product code customs uses to classify goods and set duties.'],
    ['Transshipment', 'Goods routed via a third port; that port is not the country of origin.'],
    ['False positive', 'A clean party flagged as a match: it costs analyst time, not fines.'],
  ];

  const metaEl = document.getElementById('post-meta');
  const article = document.querySelector('article');
  if (!metaEl || !article) return;
  const meta = JSON.parse(metaEl.textContent);
  const week = Math.max(1, Math.min(12, +meta.week || 1));
  const nn = String(week).padStart(2, '0');
  const split = (s, sep) => (s || '').split(sep).map(x => x.trim()).filter(Boolean);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  // ---------- cover ----------
  const cover = el('header', 'jd-cover');
  const inner = el('div', 'jd-in');
  const route = el('div', 'jd-route');
  const top = el('div', 'jd-route-top');
  top.append(el('span', '', `EU–China corridor · Week ${week} of 12`), el('span', '', 'Shanghai → Antwerp'));
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 880 90');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `Route map: week ${week} of 12, at ${PORTS[week - 1]}`);
  const pt = i => [30 + i * (820 / 11), 46 + Math.sin(i / 11 * Math.PI * 2) * 14];
  const path = n => PORTS.slice(0, n).map((_, i) => (i ? 'L' : 'M') + pt(i).map(v => v.toFixed(1)).join(' ')).join(' ');
  const svgEl = (tag, attrs, text, parent = svg) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text) e.textContent = text; parent.appendChild(e); return e; };
  svgEl('path', { d: path(12), fill: 'none', stroke: 'rgba(255,255,255,.3)', 'stroke-width': 2, 'stroke-dasharray': '5 5' });
  svgEl('path', { d: path(week), fill: 'none', stroke: '#ffd400', 'stroke-width': 3 });
  // each port is a group that becomes a link once we know that week is published (see the voyage below)
  const ports = PORTS.map((p, i) => {
    const [x, y] = pt(i), past = i < week, now = i === week - 1;
    const g = svgEl('a', { class: 'jd-port' + (now ? ' now' : '') });
    svgEl('circle', { cx: x, cy: y, r: 16, fill: 'transparent' }, null, g);   // a bigger, invisible tap area
    svgEl('circle', { class: 'dot', cx: x, cy: y, r: now ? 7 : 4.5, fill: past ? '#ffd400' : 'transparent', stroke: past ? '#ffd400' : 'rgba(255,255,255,.5)', 'stroke-width': 2 }, null, g);
    svgEl('text', { class: 'lbl' + (now ? ' now' : ''), x, y: i % 2 ? y + 22 : y - 14, 'text-anchor': 'middle' }, `${String(i + 1).padStart(2, '0')} ${p}`, g);
    svgEl('title', {}, `Week ${i + 1} · not published yet`, g);
    return g;
  });
  const [sx, sy] = pt(week - 1);
  svgEl('text', { x: sx, y: sy + 6, 'font-size': 18, 'text-anchor': 'middle', 'aria-hidden': 'true', 'pointer-events': 'none' }, '🚢');
  route.append(top, svg);
  const who = el('div', 'jd-who');
  who.append(el('span', '', meta.author || 'Jasper Derieuw'));
  if (meta.date) who.append(el('span', '', new Date(meta.date + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })));
  if (meta.verdict) who.append(el('span', 'jd-badge', 'Verdict: ' + meta.verdict));
  inner.append(route, el('div', 'jd-eyebrow', `EU–China Trade Compliance · Briefing ${nn}${meta.skill ? ' · ' + meta.skill : ''}`),
    el('h1', '', meta.title || ''), who);
  cover.append(inner);
  document.querySelector('nav.top').after(cover);

  // ---------- report card + sidebar layout ----------
  const layout = el('div', 'jd-layout');
  article.before(layout);
  layout.append(article);
  const byline = article.querySelector('.byline');
  const intro = document.createDocumentFragment();
  if (meta.stamp) { article.classList.add('jd-stamped'); article.prepend(el('div', 'jd-stamp', meta.stamp)); }
  const kpis = split(meta.kpis, ';');
  if (kpis.length) {
    const box = el('div', 'jd-kpis');
    kpis.forEach(k => { const [v, l] = k.split('|').map(s => s.trim()); const c = el('div', 'jd-kpi'); c.append(el('b', '', v), el('span', '', l || '')); box.append(c); });
    intro.append(box);
  }
  const takeaways = split(meta.takeaways, ';');
  if (takeaways.length) {
    const box = el('div', 'jd-takeaways'), ul = el('ul');
    box.append(el('h3', '', 'Key takeaways'));
    takeaways.forEach(t => ul.append(el('li', '', t)));
    box.append(ul); intro.append(box);
  }
  (byline || article.firstChild).after(intro);
  // the post repeats its title as a heading: hide that copy (it is on the cover already)
  article.querySelectorAll(':scope > h2').forEach(h => { if (h.textContent.trim() === (meta.title || '').trim()) h.classList.add('jd-dup'); });
  // claim tags in tables become coloured pills
  article.querySelectorAll('td').forEach(td => {
    const t = td.textContent.trim().toLowerCase();
    const k = ['fact', 'aspiration', 'avoidance'].find(w => t.startsWith(w));
    if (k && td.children.length === 0) { const p = el('span', 'jd-pill ' + k, td.textContent.trim()); td.textContent = ''; td.append(p); }
  });

  // ---------- sidebar ----------
  const side = el('aside', 'jd-side');
  side.setAttribute('aria-label', 'About this series');
  const card = (title, ...kids) => { const c = el('div', 'jd-card'); c.append(el('h4', '', title), ...kids); side.append(c); return c; };
  card('The beat', el('p', '', BEAT));
  const voyage = el('ul');
  voyage.append(el('li', '', 'Loading…'));
  card('The voyage so far', voyage);
  const dl = el('dl');
  GLOSSARY.forEach(([t, d]) => dl.append(el('dt', '', t), el('dd', '', d)));
  card('Glossary', dl);
  const evidence = [...article.querySelectorAll('a[href*="/evidence/"]')];
  if (evidence.length) {
    const links = el('div', 'jd-links');
    evidence.forEach(a => { const l = el('a', '', a.textContent); l.href = a.href; links.append(l); });
    card('Evidence', el('p', '', 'The full workings behind this week:'), links);
  }
  layout.append(side);

  // the voyage: every week of this series, with skill and verdict, from the site's post list
  fetch('../manifest.json').then(r => r.json()).then(all => {
    const mine = all.filter(p => p.url.startsWith(`posts/${meta.folder}-`)).sort((a, b) => a.week - b.week);
    voyage.textContent = '';
    mine.forEach(p => {
      const li = el('li', p.week === week && p.url.endsWith(meta.slug + '.html') ? 'now' : '');
      const a = el('a'); a.href = '../' + p.url;
      a.append(el('b', '', `${String(p.week).padStart(2, '0')} ${p.skill || 'Week ' + p.week}`), el('small', '', (p.meta && p.meta.verdict) || p.title));
      li.append(a); voyage.append(li);
      // the matching port on the route map becomes a link to that week
      const port = ports[p.week - 1];
      if (port && !port.hasAttribute('href')) {
        const label = `Week ${p.week}${p.skill ? ' · ' + p.skill : ''}${p.meta && p.meta.verdict ? ': ' + p.meta.verdict : ''}`;
        port.setAttribute('href', '../' + p.url);
        port.setAttribute('aria-label', label);
        port.classList.add('linked');
        port.querySelector('title').textContent = label;
      }
    });
    const last = mine.length ? Math.max(...mine.map(p => p.week)) : week;
    if (last < 12) { const li = el('li'); li.append(el('span', 'jd-next', `${String(last + 1).padStart(2, '0')} · next port: ${PORTS[last]}`)); voyage.append(li); }
  }).catch(() => { voyage.textContent = ''; });
})();
