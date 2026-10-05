// Take a break: opens games in an overlay, loads each game's code on first use, keeps personal bests.
// A game file calls SignalGames.register(id, factory); factory(stage, api) returns { destroy() }.
(() => {
  const GAMES = {
    runner: { title: 'Signal Runner', file: 'runner.js', ready: true,
      help: '<span><kbd>Space</kbd> / <kbd>↑</kbd> / tap — jump</span><span><kbd>↓</kbd> / swipe down — duck</span><span class="k"><kbd>Esc</kbd> — close</span>' },
    sudoku: { title: 'Sudoku', ready: false },
    '2048': { title: '2048', ready: false },
    snake: { title: 'Snake', ready: false },
  };
  const factories = {};
  const loading = {};
  const base = document.currentScript.src.replace(/[^/]*$/, '');
  let current = null, opener = null;

  const store = {
    get(id) { try { return Number(localStorage.getItem('signal-best-' + id)) || 0; } catch (e) { return 0; } },
    set(id, v) { try { localStorage.setItem('signal-best-' + id, String(v)); } catch (e) {} },
  };
  const fmt = n => Math.floor(n).toLocaleString('en');

  function showBests() {
    document.querySelectorAll('[data-best]').forEach(el => {
      const b = store.get(el.dataset.best);
      el.textContent = b ? 'Your best: ' + fmt(b) : 'Your best: —';
    });
  }

  function load(id) {
    if (factories[id]) return Promise.resolve();
    return loading[id] || (loading[id] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = base + GAMES[id].file;
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    }));
  }

  const overlay = document.getElementById('g-overlay');
  const stage = overlay.querySelector('.g-stage');
  const scoreEl = overlay.querySelector('[data-score]');
  const bestEl = overlay.querySelector('[data-overlay-best]');

  async function open(id, from) {
    const g = GAMES[id];
    if (!g || !g.ready) return;
    opener = from || null;
    overlay.querySelector('h3').textContent = g.title;
    overlay.querySelector('.g-help').innerHTML = g.help;
    scoreEl.textContent = '0';
    bestEl.textContent = fmt(store.get(id));
    overlay.hidden = false;
    document.body.classList.add('g-open');
    overlay.querySelector('.g-close').focus();
    try { await load(id); } catch (e) { stage.textContent = 'Could not load the game. Check your connection and try again.'; return; }
    if (overlay.hidden) return;   // closed while loading
    stage.innerHTML = '';
    current = factories[id](stage, {
      score(n) { scoreEl.textContent = fmt(n); },
      best: () => store.get(id),
      gameOver(n) {   // the single place every game reports a final score (leaderboard hooks in here later)
        if (n > store.get(id)) { store.set(id, Math.floor(n)); bestEl.textContent = fmt(n); showBests(); return true; }
        return false;
      },
    });
  }

  function close() {
    if (overlay.hidden) return;
    if (current) { current.destroy(); current = null; }
    stage.innerHTML = '';
    overlay.hidden = true;
    document.body.classList.remove('g-open');
    if (opener) opener.focus();
  }

  window.SignalGames = { register(id, factory) { factories[id] = factory; } };

  document.querySelectorAll('[data-game]').forEach(b => b.addEventListener('click', () => open(b.dataset.game, b)));
  overlay.querySelector('.g-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  showBests();
})();
