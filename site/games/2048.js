// 2048: slide tiles with arrows or swipes, merge equal numbers. Three undos per game; the game is saved on close.
(() => {
  const N = 4, UNDOS = 3, SAVE = 'signal-2048-game';

  SignalGames.register('2048', (stage, api) => {
    let game = null, prev = null, nextId = 1, busy = false;

    const root = document.createElement('div');
    root.className = 't48';
    root.innerHTML =
      '<div class="t48-top"><span class="t48-msg" aria-live="polite"></span>' +
      '<button type="button" data-act="undo">Undo</button><button type="button" data-act="new">New game</button></div>' +
      '<div class="t48-board" aria-label="2048 board">' + '<div class="t48-cell"></div>'.repeat(N * N) + '<div class="t48-tiles"></div></div>';
    stage.appendChild(root);
    const tilesEl = root.querySelector('.t48-tiles'), msg = root.querySelector('.t48-msg');
    const undoBtn = root.querySelector('[data-act="undo"]');
    const els = new Map();   // tile id -> element

    // ---------- state ----------
    const empty = () => { const out = []; for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!game.tiles.some(t => t.r === r && t.c === c)) out.push({ r, c }); return out; };
    function addTile() {
      const spots = empty();
      if (!spots.length) return;
      const s = spots[Math.floor(Math.random() * spots.length)];
      game.tiles.push({ id: nextId++, v: Math.random() < 0.9 ? 2 : 4, r: s.r, c: s.c, isNew: true });
    }
    function fresh() {
      game = { tiles: [], score: 0, undos: UNDOS, won: false, over: false };
      prev = null; addTile(); addTile();
    }
    function save() { try { localStorage.setItem(SAVE, JSON.stringify({ game, prev, nextId })); } catch (e) {} }
    function restore() {
      try {
        const s = JSON.parse(localStorage.getItem(SAVE));
        if (s && s.game && !s.game.over) { game = s.game; prev = s.prev; nextId = s.nextId; return true; }
      } catch (e) {}
      return false;
    }
    const clone = g => JSON.parse(JSON.stringify(g));

    // ---------- moving ----------
    function canMove() {
      if (empty().length) return true;
      const at = (r, c) => game.tiles.find(t => t.r === r && t.c === c);
      for (const t of game.tiles) {
        const right = at(t.r, t.c + 1), down = at(t.r + 1, t.c);
        if ((right && right.v === t.v) || (down && down.v === t.v)) return true;
      }
      return false;
    }

    function move(dir) {   // dir: 'left' | 'right' | 'up' | 'down'
      if (!game || game.over || busy) return;
      const before = clone(game);
      const horizontal = dir === 'left' || dir === 'right';
      const forward = dir === 'right' || dir === 'down';
      let moved = false, gained = 0;
      game.tiles.forEach(t => { t.isNew = false; t.merged = false; });
      for (let line = 0; line < N; line++) {
        // tiles in this row/column, ordered from the edge they slide towards
        const row = game.tiles.filter(t => (horizontal ? t.r : t.c) === line)
          .sort((a, b) => (horizontal ? a.c - b.c : a.r - b.r) * (forward ? -1 : 1));
        let pos = 0, last = null;
        for (const t of row) {
          if (last && last.v === t.v && !last.merged) {
            // merge t into last: t slides onto last's spot, then disappears
            last.v *= 2; last.merged = true; gained += last.v;
            t.r = last.r; t.c = last.c; t.gone = true; moved = true;
            continue;
          }
          const idx = forward ? N - 1 - pos : pos;
          const nr = horizontal ? line : idx, nc = horizontal ? idx : line;
          if (t.r !== nr || t.c !== nc) moved = true;
          t.r = nr; t.c = nc; pos++; last = t;
        }
      }
      if (!moved) { game = before; return; }
      prev = before;
      game.score += gained;
      render(true);   // slide everything, including tiles about to disappear
      busy = true;
      setTimeout(() => {
        busy = false;
        game.tiles = game.tiles.filter(t => !t.gone);
        addTile();
        if (!game.won && game.tiles.some(t => t.v >= 2048)) { game.won = true; msg.textContent = 'You reached 2048! Keep going for a higher score.'; }
        else msg.textContent = '';
        if (!canMove()) {
          game.over = true;
          const best = api.gameOver(game.score);
          msg.textContent = (best ? 'New best! ' : 'Game over. ') + 'Score ' + game.score.toLocaleString('en') + '.';
        }
        save(); render(false);
      }, 120);
    }

    function undo() {
      if (!prev || game.undos <= 0 || busy) return;
      const left = game.undos - 1;
      game = prev; game.undos = left; prev = null;
      msg.textContent = left ? `${left} undo${left > 1 ? 's' : ''} left.` : 'No undos left.';
      save(); render(false);
    }

    function newGame() {
      if (game && !game.over && game.score > 0) {
        if (!confirm('Start a new game? Your current score will be kept as a result.')) return;
        api.gameOver(game.score);
      }
      msg.textContent = ''; fresh(); save(); render(false);
    }

    // ---------- drawing ----------
    function render(sliding) {
      const seen = new Set();
      for (const t of game.tiles) {
        let el = els.get(t.id);
        if (!el) {
          el = document.createElement('div');
          el.className = 't48-tile';
          tilesEl.appendChild(el);
          els.set(t.id, el);
        }
        seen.add(t.id);
        el.style.setProperty('--r', t.r);
        el.style.setProperty('--c', t.c);
        if (!sliding) {
          el.textContent = t.v; el.dataset.v = t.v > 2048 ? 'big' : t.v;
          el.classList.toggle('t48-new', !!t.isNew);
          el.classList.toggle('t48-merged', !!t.merged);
        }
        el.style.zIndex = t.gone ? 1 : 2;
      }
      for (const [id, el] of els) if (!seen.has(id)) { el.remove(); els.delete(id); }
      undoBtn.textContent = `Undo (${game.undos})`;
      undoBtn.disabled = !prev || game.undos <= 0 || game.over;
      api.score(game.score);
    }

    // ---------- input ----------
    const KEYS = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', KeyA: 'left', KeyD: 'right', KeyW: 'up', KeyS: 'down' };
    function onKey(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (KEYS[e.code]) { e.preventDefault(); move(KEYS[e.code]); }
      else if (e.code === 'KeyZ' || e.code === 'KeyU') undo();
    }
    let start = null;
    function onTouchStart(e) { start = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }
    function onTouchMove(e) { if (start) e.preventDefault(); }
    function onTouchEnd(e) {
      if (!start) return;
      const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
      start = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
      move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
    }
    function onClick(e) {
      const act = e.target.closest('button')?.dataset.act;
      if (act === 'undo') undo(); else if (act === 'new') newGame();
    }
    const board = root.querySelector('.t48-board');
    window.addEventListener('keydown', onKey);
    board.addEventListener('touchstart', onTouchStart, { passive: true });
    board.addEventListener('touchmove', onTouchMove, { passive: false });
    board.addEventListener('touchend', onTouchEnd);
    root.addEventListener('click', onClick);

    if (!restore()) fresh();
    save(); render(false);

    return {
      destroy() {
        save();
        window.removeEventListener('keydown', onKey);
        board.removeEventListener('touchstart', onTouchStart);
        board.removeEventListener('touchmove', onTouchMove);
        board.removeEventListener('touchend', onTouchEnd);
        root.removeEventListener('click', onClick);
      },
    };
  });
})();
