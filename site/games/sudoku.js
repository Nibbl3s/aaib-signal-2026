// Sudoku 9×9: generated puzzles with exactly one solution, four difficulties, notes, hints, check and a timer.
(() => {
  const LEVELS = { easy: 40, medium: 32, hard: 27, expert: 24 };   // number of given cells
  const HINT_PENALTY = 30;                                           // seconds added per hint
  const SAVE = 'signal-sudoku-game';

  // ---------- puzzle engine (cells 0–80, digits as bitmasks) ----------
  const PEERS = Array.from({ length: 81 }, (_, i) => {
    const r = Math.floor(i / 9), c = i % 9, br = r - r % 3, bc = c - c % 3, s = new Set();
    for (let k = 0; k < 9; k++) { s.add(r * 9 + k); s.add(k * 9 + c); s.add((br + Math.floor(k / 3)) * 9 + bc + k % 3); }
    s.delete(i);
    return [...s];
  });
  const candidates = (g, i) => { let used = 0; for (const p of PEERS[i]) used |= 1 << g[p]; return ~used & 0x3FE; };
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // counts solutions up to `limit`, always trying the cell with the fewest candidates first
  function solve(g, limit, random) {
    let best = -1, mask = 0, fewest = 10;
    for (let i = 0; i < 81; i++) {
      if (g[i]) continue;
      const m = candidates(g, i);
      let n = 0; for (let d = 1; d <= 9; d++) if (m & (1 << d)) n++;
      if (n === 0) return 0;
      if (n < fewest) { best = i; mask = m; fewest = n; if (n === 1) break; }
    }
    if (best < 0) return 1;
    let count = 0;
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(d => mask & (1 << d));
    for (const d of random ? shuffle(digits) : digits) {
      g[best] = d;
      count += solve(g, limit - count, random);
      if (count >= limit) return count;   // leave the grid filled: used to build a full solution
    }
    g[best] = 0;
    return count;
  }

  function generate(level) {
    const sol = Array(81).fill(0);
    solve(sol, 1, true);
    const puz = sol.slice();
    let givens = 81;
    for (const i of shuffle([...Array(81).keys()])) {
      if (givens <= LEVELS[level]) break;
      const keep = puz[i];
      puz[i] = 0;
      if (solve(puz.slice(), 2, false) !== 1) puz[i] = keep; else givens--;
    }
    return { level, puz, sol, cur: puz.slice(), notes: Array(81).fill(0), elapsed: 0, hints: 0, done: false, wrong: [] };
  }

  SignalGames.register('sudoku', (stage, api) => {
    let game = null, sel = -1, notesMode = false, ticker = 0, lastTick = 0;

    const root = document.createElement('div');
    root.className = 'sd';
    root.innerHTML =
      '<div class="sd-levels" role="group" aria-label="Difficulty">' +
        Object.keys(LEVELS).map(l => `<button type="button" data-level="${l}">${l[0].toUpperCase() + l.slice(1)}</button>`).join('') +
        '<button type="button" class="sd-new">New game</button></div>' +
      '<div class="sd-board" role="grid" aria-label="Sudoku board"></div>' +
      '<div class="sd-msg" aria-live="polite"></div>' +
      '<div class="sd-pad">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => `<button type="button" data-digit="${d}">${d}<small></small></button>`).join('') + '</div>' +
      '<div class="sd-tools">' +
        '<button type="button" data-tool="notes" aria-pressed="false">Notes</button>' +
        '<button type="button" data-tool="erase">Erase</button>' +
        '<button type="button" data-tool="hint">Hint +30s</button>' +
        '<button type="button" data-tool="check">Check</button></div>';
    stage.appendChild(root);
    const board = root.querySelector('.sd-board'), msg = root.querySelector('.sd-msg');
    const cells = Array.from({ length: 81 }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'sd-cell'; b.dataset.i = i;
      if (i % 9 === 2 || i % 9 === 5) b.classList.add('sd-br');
      if (Math.floor(i / 9) === 2 || Math.floor(i / 9) === 5) b.classList.add('sd-bb');
      board.appendChild(b);
      return b;
    });

    // ---------- saving ----------
    function save() { try { localStorage.setItem(SAVE, JSON.stringify(game)); } catch (e) {} }
    function restore() { try { const g = JSON.parse(localStorage.getItem(SAVE)); return g && g.sol && g.sol.length === 81 ? g : null; } catch (e) { return null; } }

    function start(level) {
      msg.textContent = 'Generating…';
      setTimeout(() => {   // let "Generating…" paint before the (short) work
        game = generate(level); sel = -1; api.variant(level); save(); render(); msg.textContent = '';
      }, 20);
    }

    // ---------- timer ----------
    const seconds = () => Math.floor(game.elapsed / 1000) + game.hints * HINT_PENALTY;
    function tick(now) {
      if (game && !game.done && !document.hidden) {
        game.elapsed += Math.min(now - lastTick, 1000);
        api.score(seconds());
      }
      lastTick = now;
    }
    ticker = setInterval(() => tick(performance.now()), 250);
    lastTick = performance.now();
    const saver = setInterval(() => { if (game && !game.done) save(); }, 5000);

    // ---------- rules ----------
    function conflicts() {
      const bad = new Set();
      for (let i = 0; i < 81; i++) {
        const v = game.cur[i];
        if (v && PEERS[i].some(p => game.cur[p] === v)) bad.add(i);
      }
      return bad;
    }

    function finishIfSolved() {
      if (game.cur.every((v, i) => v === game.sol[i])) {
        game.done = true; sel = -1;
        const t = seconds();
        const best = api.gameOver(t);
        const mm = String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
        msg.textContent = (best ? 'New best! ' : 'Solved! ') + 'Time ' + mm + (game.hints ? ` (incl. ${game.hints} hint${game.hints > 1 ? 's' : ''})` : '') + '. Pick a level for a new puzzle.';
        save();
      }
    }

    function enter(d) {
      if (!game || game.done || sel < 0 || game.puz[sel]) return;
      msg.textContent = '';
      game.wrong = game.wrong.filter(i => i !== sel);
      if (notesMode && d) {
        if (game.cur[sel]) return;
        game.notes[sel] ^= 1 << d;
      } else {
        game.cur[sel] = game.cur[sel] === d ? 0 : d;
        game.notes[sel] = 0;
        if (d) for (const p of PEERS[sel]) game.notes[p] &= ~(1 << d);   // clear that note from peers
      }
      save(); render(); finishIfSolved();
    }

    function hint() {
      if (!game || game.done) return;
      let i = sel >= 0 && !game.puz[sel] && game.cur[sel] !== game.sol[sel] ? sel : -1;
      if (i < 0) {
        const open = [...Array(81).keys()].filter(k => game.cur[k] !== game.sol[k]);
        if (!open.length) return;
        i = open[Math.floor(Math.random() * open.length)];
      }
      game.cur[i] = game.sol[i]; game.notes[i] = 0; game.hints++; sel = i;
      game.wrong = game.wrong.filter(k => k !== i);
      for (const p of PEERS[i]) game.notes[p] &= ~(1 << game.sol[i]);
      api.score(seconds()); save(); render(); finishIfSolved();
    }

    function check() {
      if (!game || game.done) return;
      game.wrong = [...Array(81).keys()].filter(i => game.cur[i] && game.cur[i] !== game.sol[i]);
      const empty = game.cur.filter(v => !v).length;
      msg.textContent = game.wrong.length
        ? `${game.wrong.length} wrong number${game.wrong.length > 1 ? 's' : ''} marked.`
        : `No mistakes so far${empty ? ` — ${empty} cell${empty > 1 ? 's' : ''} to go` : ''}.`;
      save(); render();
    }

    // ---------- drawing ----------
    function render() {
      if (!game) return;
      const bad = conflicts(), wrong = new Set(game.wrong);
      const sv = sel >= 0 ? game.cur[sel] : 0;
      const sr = Math.floor(sel / 9), sc = sel % 9, sb = Math.floor(sr / 3) * 3 + Math.floor(sc / 3);
      cells.forEach((b, i) => {
        const v = game.cur[i], r = Math.floor(i / 9), c = i % 9;
        const peer = sel >= 0 && (r === sr || c === sc || Math.floor(r / 3) * 3 + Math.floor(c / 3) === sb);
        b.className = b.className.replace(/ ?sd-(given|sel|peer|same|bad|wrong|user)/g, '');
        if (game.puz[i]) b.classList.add('sd-given'); else if (v) b.classList.add('sd-user');
        if (i === sel) b.classList.add('sd-sel'); else if (peer) b.classList.add('sd-peer');
        if (sv && v === sv && i !== sel) b.classList.add('sd-same');
        if (bad.has(i) && !game.puz[i]) b.classList.add('sd-bad');
        if (wrong.has(i)) b.classList.add('sd-wrong');
        if (v) b.textContent = v;
        else if (game.notes[i]) b.innerHTML = '<span class="sd-notes">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => `<i>${game.notes[i] & (1 << d) ? d : ''}</i>`).join('') + '</span>';
        else b.textContent = '';
        b.setAttribute('aria-label', `Row ${r + 1}, column ${c + 1}, ${v || 'empty'}`);
      });
      root.querySelectorAll('[data-level]').forEach(b => b.setAttribute('aria-pressed', b.dataset.level === game.level));
      root.querySelectorAll('[data-digit]').forEach(b => {
        const d = +b.dataset.digit, left = 9 - game.cur.filter(v => v === d).length;
        b.querySelector('small').textContent = left > 0 ? left : '';
        b.disabled = left <= 0 && !notesMode;
      });
      root.querySelector('[data-tool="notes"]').setAttribute('aria-pressed', notesMode);
      api.score(seconds());
    }

    // ---------- input ----------
    function onClick(e) {
      const t = e.target.closest('button');
      if (!t || !root.contains(t)) return;
      if (t.dataset.i !== undefined) { sel = +t.dataset.i; render(); return; }
      if (t.dataset.digit) { enter(+t.dataset.digit); return; }
      if (t.dataset.level || t.classList.contains('sd-new')) {
        const level = t.dataset.level || game.level;
        const busy = game && !game.done && game.cur.some((v, i) => v && !game.puz[i]);
        if (!busy || confirm('Start a new puzzle? Your current one will be lost.')) start(level);
        return;
      }
      const tool = t.dataset.tool;
      if (tool === 'notes') { notesMode = !notesMode; render(); }
      else if (tool === 'erase') enter(0);
      else if (tool === 'hint') hint();
      else if (tool === 'check') check();
    }
    function onKey(e) {
      if (!game || e.ctrlKey || e.metaKey || e.altKey) return;
      const moves = { ArrowUp: -9, ArrowDown: 9, ArrowLeft: -1, ArrowRight: 1 };
      if (moves[e.key] !== undefined) {
        e.preventDefault();
        if (sel < 0) sel = 40;
        else {
          const n = sel + moves[e.key];
          if (n >= 0 && n < 81 && !(Math.abs(moves[e.key]) === 1 && Math.floor(n / 9) !== Math.floor(sel / 9))) sel = n;
        }
        render(); return;
      }
      if (/^[1-9]$/.test(e.key)) { e.preventDefault(); enter(+e.key); }
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') { e.preventDefault(); enter(0); }
      else if (e.key === 'n' || e.key === 'N') { notesMode = !notesMode; render(); }
    }
    root.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey);

    const saved = restore();
    if (saved && !saved.done) { game = saved; game.wrong = game.wrong || []; api.variant(game.level); render(); }
    else start((saved && saved.level) || 'medium');

    return {
      destroy() {
        if (game && !game.done) save();
        clearInterval(ticker); clearInterval(saver);
        window.removeEventListener('keydown', onKey);
      },
    };
  });
})();
