// Class leaderboard: Top 5 per game, stored in Supabase. The key below is a public "publishable" key;
// the database itself only allows reading the Top 5 and adding a score (see the scores table rules).
(() => {
  const API = 'https://ksefikpdcsmudncwphdr.supabase.co/rest/v1';
  const KEY = 'sb_publishable__MyQtzlIoKtzFFmnCk-o_w_PIxXq87O';
  const TOP = 5;
  const BOARDS = [
    { id: 'runner', label: 'Signal Runner' },
    { id: 'sudoku', label: 'Sudoku', levels: ['easy', 'medium', 'hard', 'expert'] },
    { id: '2048', label: '2048' },
    { id: 'snake', label: 'Snake' },
  ];
  const BLOCKED = ['fuck', 'shit', 'bitch', 'cunt', 'nigg', 'fag', 'whore', 'slut', 'dick', 'cock', 'pussy', 'porn', 'nazi', 'hitler', 'retard', 'kanker', 'hoer', 'kut', 'lul', 'slet', 'tering'];
  const headers = { apikey: KEY, 'Content-Type': 'application/json' };
  const isTime = board => board.startsWith('sudoku');
  const fmt = (board, n) => isTime(board)
    ? String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0')
    : Math.floor(n).toLocaleString('en');
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const remembered = { get() { try { return localStorage.getItem('signal-name') || ''; } catch (e) { return ''; } },
                       set(v) { try { localStorage.setItem('signal-name', v); } catch (e) {} } };

  async function top(board) {
    const r = await fetch(API + '/rpc/top_scores', { method: 'POST', headers, body: JSON.stringify({ p_game: board, p_limit: TOP }) });
    if (!r.ok) throw new Error('unavailable');
    return r.json();
  }
  async function submit(board, name, score) {
    const r = await fetch(API + '/scores', { method: 'POST', headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({ game: board, name, score }) });
    if (r.ok) return;
    let message = 'Could not save your score. Try again later.';
    try { const j = await r.json(); if (j.code === 'P0001') message = j.message; } catch (e) {}
    throw new Error(message);
  }
  const qualifies = (board, score, list) => list.length < TOP ||
    (isTime(board) ? score < list[list.length - 1].score : score > list[list.length - 1].score);
  function checkName(name) {
    if (name.length < 3 || name.length > 12) return 'Use 3 to 12 characters.';
    if (!/^[A-Za-z0-9 _.-]+$/.test(name)) return 'Letters, numbers, spaces and _ . - only.';
    const flat = name.toLowerCase().replace(/[^a-z]/g, '');
    if (BLOCKED.some(w => flat.includes(w))) return 'Please choose another name.';
    return '';
  }

  // ---------- homepage board ----------
  const box = document.getElementById('g-lb');
  let tab = 'runner', level = 'medium';
  function renderShell() {
    box.innerHTML =
      '<div class="g-lb-head"><h3>Class leaderboard</h3><div class="g-lb-tabs" role="group" aria-label="Game">' +
        BOARDS.map(b => `<button type="button" data-tab="${b.id}" aria-pressed="${b.id === tab}">${b.label}</button>`).join('') + '</div></div>' +
      '<div class="g-lb-levels" role="group" aria-label="Sudoku difficulty"' + (tab === 'sudoku' ? '' : ' hidden') + '>' +
        BOARDS[1].levels.map(l => `<button type="button" data-level="${l}" aria-pressed="${l === level}">${cap(l)}</button>`).join('') + '</div>' +
      '<ol class="g-lb-list"><li class="g-lb-note">Loading…</li></ol>';
  }
  async function loadBoard() {
    const board = tab === 'sudoku' ? 'sudoku-' + level : tab;
    renderShell();
    const list = box.querySelector('.g-lb-list');
    try {
      const rows = await top(board);
      if ((tab === 'sudoku' ? 'sudoku-' + level : tab) !== board) return;   // switched tabs meanwhile
      list.innerHTML = rows.length ? '' : '<li class="g-lb-note">No scores yet. Be the first!</li>';
      rows.forEach((row, i) => {
        const li = document.createElement('li');
        li.innerHTML = '<span class="g-lb-rank"></span><span class="g-lb-name"></span><span class="g-lb-score"></span>';
        li.children[0].textContent = i + 1;
        li.children[1].textContent = row.name;
        li.children[2].textContent = fmt(board, row.score);
        list.appendChild(li);
      });
    } catch (e) {
      list.innerHTML = '<li class="g-lb-note">Leaderboard unavailable right now.</li>';
    }
  }
  if (box) {
    box.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.tab) tab = b.dataset.tab;
      if (b.dataset.level) level = b.dataset.level;
      loadBoard();
    });
    // only ask the database once the section is (almost) on screen
    const seen = new IntersectionObserver(entries => {
      if (entries.some(en => en.isIntersecting)) { seen.disconnect(); loadBoard(); }
    }, { rootMargin: '300px' });
    seen.observe(box);
  }

  // ---------- "add your score" panel in the game window ----------
  const form = document.getElementById('g-submit');
  let pending = null;
  function hideOffer() { if (form) form.hidden = true; pending = null; }
  async function offer(board, score) {
    if (!form || !(score > 0)) return;
    let list;
    try { list = await top(board); } catch (e) { return; }   // offline: just skip the offer
    if (!qualifies(board, score, list)) return;
    pending = { board, score };
    const label = board.startsWith('sudoku-') ? 'Sudoku ' + cap(board.slice(7)) : BOARDS.find(b => b.id === board).label;
    form.querySelector('.g-submit-title').textContent = `🏆 Top ${TOP} score in ${label}: ${fmt(board, score)}`;
    form.querySelector('.g-submit-msg').textContent = 'Names are public. Use a nickname.';
    const input = form.querySelector('input');
    input.value = remembered.get();
    form.querySelector('button[type="submit"]').disabled = false;
    form.hidden = false;
  }
  if (form) {
    const input = form.querySelector('input'), msg = form.querySelector('.g-submit-msg');
    // typing a name must not steer, jump or fill Sudoku cells
    input.addEventListener('keydown', e => { if (e.key !== 'Escape') e.stopPropagation(); });
    form.querySelector('.g-submit-skip').addEventListener('click', hideOffer);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!pending) return;
      const name = input.value.trim(), problem = checkName(name);
      if (problem) { msg.textContent = problem; return; }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; msg.textContent = 'Saving…';
      try {
        await submit(pending.board, name, pending.score);
        remembered.set(name);
        const rows = await top(pending.board).catch(() => []);
        const rank = rows.findIndex(r => r.name.toLowerCase() === name.toLowerCase()) + 1;
        msg.textContent = rank ? `Added! You're #${rank} on the class leaderboard.` : 'Added to the leaderboard!';
        pending = null;
        if (box) loadBoard();
      } catch (err) {
        msg.textContent = err.message; btn.disabled = false;
      }
    });
  }

  window.SignalBoard = { offer, hideOffer };
})();
