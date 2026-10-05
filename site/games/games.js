// Take a break: opens games in an overlay, loads each game's code on first use, keeps personal bests.
// A game file calls SignalGames.register(id, factory); factory(stage, api) returns { destroy() }.
(() => {
  const GAMES = {
    runner: { title: 'Signal Runner', file: 'runner.js', ready: true,
      help: '<span><kbd>Space</kbd> / <kbd>↑</kbd> / tap — jump</span><span><kbd>↓</kbd> / swipe down — duck</span><span class="k"><kbd>Esc</kbd> — close</span>' },
    sudoku: { title: 'Sudoku', file: 'sudoku.js', ready: true, time: true, variants: true, label: 'Time',
      help: '<span class="k"><kbd>1</kbd>–<kbd>9</kbd> enter</span><span class="k"><kbd>N</kbd> notes</span><span class="k"><kbd>⌫</kbd> erase</span><span class="k"><kbd>←↑→↓</kbd> move</span><span>Your game is saved when you close it</span>' },
    '2048': { title: '2048', file: '2048.js', ready: true,
      help: '<span><kbd>←↑→↓</kbd> / swipe — slide tiles</span><span class="k"><kbd>Z</kbd> undo</span><span>Your game is saved when you close it</span>' },
    snake: { title: 'Snake', file: 'snake.js', ready: true,
      help: '<span><kbd>←↑→↓</kbd> / swipe — steer</span><span><kbd>Space</kbd> / tap — pause</span><span class="k"><kbd>Esc</kbd> — close</span>' },
  };
  const factories = {};
  const loading = {};
  const base = document.currentScript.src.replace(/[^/]*$/, '');
  let current = null, opener = null, currentId = null, variant = '';

  const store = {
    get(key) { try { return Number(localStorage.getItem('signal-best-' + key)) || 0; } catch (e) { return 0; } },
    set(key, v) { try { localStorage.setItem('signal-best-' + key, String(v)); } catch (e) {} },
    text(key, v) { try { if (v === undefined) return localStorage.getItem('signal-' + key) || ''; localStorage.setItem('signal-' + key, v); } catch (e) { return ''; } },
  };
  const num = n => Math.floor(n).toLocaleString('en');
  const time = s => { s = Math.floor(s); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  const fmt = (id, n) => (GAMES[id].time ? time(n) : num(n));
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  // best key: per variant (e.g. a Sudoku difficulty) where a game has variants
  const bestKey = (id, v) => (GAMES[id].variants ? id + '-' + (v || store.text('last-' + id) || 'medium') : id);
  // a time is better when lower; a score when higher
  const better = (id, n, old) => (GAMES[id].time ? !old || n < old : n > old);

  function showBests() {
    document.querySelectorAll('[data-best]').forEach(el => {
      const id = el.dataset.best, b = store.get(bestKey(id));
      const label = GAMES[id].variants ? 'Your best (' + cap(store.text('last-' + id) || 'medium') + '): ' : 'Your best: ';
      el.textContent = label + (b ? fmt(id, b) : '—');
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
  const labelEl = scoreEl.previousSibling;
  const showBest = () => { const b = store.get(bestKey(currentId, variant)); bestEl.textContent = b ? fmt(currentId, b) : '—'; };

  async function open(id, from) {
    const g = GAMES[id];
    if (!g || !g.ready) return;
    opener = from || null; currentId = id; variant = '';
    if (window.SignalBoard) SignalBoard.hideOffer();
    overlay.querySelector('h3').textContent = g.title;
    overlay.querySelector('.g-help').innerHTML = g.help;
    labelEl.textContent = (g.label || 'Score') + ' ';
    scoreEl.textContent = fmt(id, 0);
    showBest();
    overlay.hidden = false;
    document.body.classList.add('g-open');
    overlay.querySelector('.g-close').focus();
    try { await load(id); } catch (e) { stage.textContent = 'Could not load the game. Check your connection and try again.'; return; }
    if (overlay.hidden) return;   // closed while loading
    stage.innerHTML = '';
    current = factories[id](stage, {
      score(n) { scoreEl.textContent = fmt(id, n); if (!n && window.SignalBoard) SignalBoard.hideOffer(); },
      best: () => store.get(bestKey(id, variant)),
      variant(v) { variant = v; store.text('last-' + id, v); showBest(); showBests(); },
      gameOver(n) {   // the single place every game reports a final score 
        const key = bestKey(id, variant);
        if (window.SignalBoard) SignalBoard.offer(key, Math.floor(n));   // shows "add to leaderboard" if it's a Top 5 score
        if (better(id, n, store.get(key))) { store.set(key, Math.floor(n)); showBest(); showBests(); return true; }
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
