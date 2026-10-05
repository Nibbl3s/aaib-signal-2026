// The Noise: neon "not an ad" cards. Wide screens: a column on each side of the posts, from the first week
// down to the games section. Smaller screens: a row of 2 between the weeks. Random order on every page load.
// Ads without a page yet (ready: false) are skipped.
(() => {
  const ADS = [
    { icon: '💸', title: 'FREE MONEY!', sub: 'Claim 1,000,000 tokens NOW', href: 'noise/free-money.html', c: 'c', ready: true },
    { icon: '👑', title: 'A PRINCE NEEDS YOUR API KEY', sub: 'Urgent. Very legit.', href: 'noise/prince.html', c: 'y', ready: true },
    { icon: '🚨', title: 'BREAKING', sub: 'AI vendor actually replies to pricing email', href: 'noise/vendor-replies.html', c: 'm', ready: true },
    { icon: '📊', title: '94% OF "UP TO 94%" CLAIMS', sub: 'are up to 0%. Study.', href: 'noise/up-to-94.html', c: 'c', ready: true },
    { icon: '🤖', title: 'CHATGPT ASKS FOR AN EXTENSION', sub: 'Student shocked', href: 'noise/chatbot-extension.html', c: 'y', ready: true },
    { icon: '💼', title: '€500K AI = SPREADSHEET', sub: 'You won\'t believe #3', href: 'noise/waffle-ai.html', c: 'm', ready: true },
    { icon: '⚠️', title: '69 VIRUSES DETECTED!', sub: 'Clean your laptop NOW', href: '?play=runner', c: 'r', ready: true },
    { icon: '🎉', title: 'YOU ARE THE 1,000,000th VISITOR!', sub: 'Claim your prize', href: 'noise/certificate.html', c: 'c', ready: false },
    { icon: '📈', title: '€5,000/DAY', sub: 'with this ONE AI trick', href: 'noise/bingo.html', c: 'y', ready: false },
    { icon: '🎰', title: 'JACKPOT GUARANTEED*', sub: '*not guaranteed', href: 'noise/casino.html', c: 'm', ready: false },
  ];
  const RAIL_W = 160, GAP = 18, MIN_GUTTER = RAIL_W + GAP + 12;

  const feed = document.getElementById('feed');
  const content = feed?.closest('.wrap');
  const games = document.getElementById('games');
  if (!feed || !content) return;

  // ---------- random order, without the same ad twice in a row ----------
  const pool = ADS.filter(a => a.ready);
  const used = new Map(pool.map(a => [a, 0]));
  // each pick avoids the previous ad (and the ad next to it on the other side); least-shown ads go first
  function sequence(n, beside = []) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const options = pool.filter(a => a !== out[i - 1] && a !== beside[i]);
      const least = Math.min(...options.map(a => used.get(a)));
      const fresh = options.filter(a => used.get(a) === least);
      const pick = fresh[Math.floor(Math.random() * fresh.length)];
      used.set(pick, used.get(pick) + 1);
      out.push(pick);
    }
    return out;
  }
  const LEFT = sequence(40), RIGHT = sequence(40, LEFT), ROWS = sequence(30);

  function card(a, i) {
    const el = document.createElement('a');
    el.className = `nz-ad ${a.c}${i % 3 === 1 ? ' flick' : ''}`;
    el.href = a.href;
    el.innerHTML = '<span class="nz-tag">NOT AN AD 😉</span><div class="nz-ic"></div><div class="nz-t"></div><div class="nz-s"></div><div class="nz-go">CLICK HERE ›</div>';
    el.querySelector('.nz-ic').textContent = a.icon;
    el.querySelector('.nz-t').textContent = a.title;
    el.querySelector('.nz-s').textContent = a.sub;
    return el;
  }

  // ---------- wide screens: two columns from the first week down to the games ----------
  const rails = [0, 1].map(() => {
    const rail = document.createElement('div');
    rail.className = 'nz-rail';
    rail.setAttribute('aria-label', 'Joke ads');
    rail.hidden = true;
    document.body.appendChild(rail);
    return rail;
  });
  let railKey = '';
  function fillRails() {
    const box = content.getBoundingClientRect();
    const anchor = feed.querySelector('.week h2') || feed;
    const top = anchor.getBoundingClientRect().top + window.scrollY;
    const end = (games ? games.getBoundingClientRect().top : box.bottom) + window.scrollY - 24;
    const key = [top, end, box.left, box.right].map(Math.round).join();
    if (key === railKey) return;   // nothing moved: keep the current cards
    railKey = key;
    rails.forEach((rail, side) => {
      rail.hidden = false;
      rail.style.top = top + 'px';
      rail.style.left = (side ? box.right + window.scrollX + GAP : box.left + window.scrollX - RAIL_W - GAP) + 'px';
      rail.innerHTML = '';
      const seq = side ? RIGHT : LEFT;
      for (let i = 0; i < seq.length; i++) {   // add cards until the column reaches the games section
        const c = card(seq[i], i + side);
        rail.appendChild(c);
        if (rail.offsetHeight > end - top) { c.remove(); break; }
      }
    });
  }
  function clearRails() { rails.forEach(r => { r.hidden = true; r.innerHTML = ''; }); railKey = ''; }

  // ---------- smaller screens: a row of 2 between the weeks ----------
  function fillRows() {
    const weeks = [...feed.querySelectorAll(':scope > .week')];
    const rows = [...feed.querySelectorAll(':scope > .nz-row')];
    const right = rows.length === Math.max(0, weeks.length - 1) && rows.every((r, i) => r.previousElementSibling === weeks[i]);
    if (right) return;
    rows.forEach(r => r.remove());
    weeks.slice(0, -1).forEach((week, i) => {
      const row = document.createElement('div');
      row.className = 'nz-row';
      row.setAttribute('aria-label', 'Joke ads');
      row.append(card(ROWS[(2 * i) % ROWS.length], 0), card(ROWS[(2 * i + 1) % ROWS.length], 1));
      week.after(row);
    });
  }
  function clearRows() { feed.querySelectorAll(':scope > .nz-row').forEach(r => r.remove()); }

  let queued = false;
  function place() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      const wide = content.getBoundingClientRect().left >= MIN_GUTTER;
      if (wide) { clearRows(); fillRails(); } else { clearRails(); fillRows(); }
    });
  }
  place();
  window.addEventListener('resize', place);
  // the post list loads a moment later and changes with the week/skill filters: follow it
  new ResizeObserver(place).observe(content);
  new MutationObserver(place).observe(feed, { childList: true });
})();
