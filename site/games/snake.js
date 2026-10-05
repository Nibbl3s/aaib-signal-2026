// Snake: eat the bits, grow, don't hit the walls or yourself. Gets faster as you grow.
(() => {
  const CELLS = 18, SIZE = 360, CELL = SIZE / CELLS;
  const START_MS = 140, MIN_MS = 62, SPEEDUP = 3;   // milliseconds per step, and how much faster per bit eaten
  const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const OPPOSITE = { up: 'down', down: 'up', left: 'right', right: 'left' };

  SignalGames.register('snake', (stage, api) => {
    const wrap = document.createElement('div');
    wrap.className = 'snk';
    const cv = document.createElement('canvas');
    wrap.appendChild(cv);
    stage.appendChild(wrap);
    const x = cv.getContext('2d');
    let colors = {}, raf = 0, last = 0, acc = 0;
    let state = 'ready', snake, dir, queue, food, score, stepMs, overAt = 0, overText = '', t = 0;

    function readColors() {
      const s = getComputedStyle(document.documentElement);
      for (const k of ['bg', 'ink', 'faint', 'rule', 'accent', 'muted']) colors[k] = s.getPropertyValue('--' + k).trim();
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = SIZE * dpr; cv.height = SIZE * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function reset() {
      const mid = Math.floor(CELLS / 2);
      snake = [[mid, mid], [mid - 1, mid], [mid - 2, mid]];
      dir = 'right'; queue = []; score = 0; stepMs = START_MS;
      placeFood();
      api.score(0);
    }
    function placeFood() {
      const free = [];
      for (let cx = 0; cx < CELLS; cx++) for (let cy = 0; cy < CELLS; cy++)
        if (!snake.some(([sx, sy]) => sx === cx && sy === cy)) free.push([cx, cy]);
      food = free.length ? free[Math.floor(Math.random() * free.length)] : null;
    }

    function step() {
      if (queue.length) dir = queue.shift();
      const [dx, dy] = DIRS[dir];
      const head = [snake[0][0] + dx, snake[0][1] + dy];
      const eating = food && head[0] === food[0] && head[1] === food[1];
      const body = eating ? snake : snake.slice(0, -1);   // the tail moves away this step unless we grow
      const outside = head[0] < 0 || head[1] < 0 || head[0] >= CELLS || head[1] >= CELLS;
      if (outside || body.some(([sx, sy]) => sx === head[0] && sy === head[1])) return end();
      snake.unshift(head);
      if (eating) {
        score++; api.score(score);
        stepMs = Math.max(MIN_MS, stepMs - SPEEDUP);
        placeFood();
        if (!food) return end(true);   // filled the whole board
      } else snake.pop();
    }

    function end(perfect) {
      state = 'over'; overAt = performance.now();
      const best = api.gameOver(score);
      overText = perfect ? 'You filled the board!' : best && score > 0 ? 'New best!' : 'Game over';
    }

    // ---------- drawing ----------
    function cellRect(cx, cy, inset) { x.beginPath(); x.roundRect(cx * CELL + inset, cy * CELL + inset, CELL - inset * 2, CELL - inset * 2, 5); }
    function draw() {
      if (!snake) return;
      x.fillStyle = colors.bg; x.fillRect(0, 0, SIZE, SIZE);
      x.fillStyle = colors.rule;
      for (let cx = 0; cx < CELLS; cx++) for (let cy = 0; cy < CELLS; cy++) x.fillRect(cx * CELL + CELL / 2 - 1, cy * CELL + CELL / 2 - 1, 2, 2);
      if (food) {   // a pulsing data bit
        const pulse = 1 + Math.sin(t / 8) * 0.12, cx = food[0] * CELL + CELL / 2, cy = food[1] * CELL + CELL / 2;
        x.fillStyle = colors.accent; x.globalAlpha = 0.25;
        x.beginPath(); x.arc(cx, cy, CELL * 0.55 * pulse, 0, 7); x.fill();
        x.globalAlpha = 1; x.beginPath(); x.arc(cx, cy, CELL * 0.3, 0, 7); x.fill();
        x.fillStyle = '#fff'; x.font = '700 9px ui-monospace, Consolas, monospace'; x.textAlign = 'center'; x.textBaseline = 'middle';
        x.fillText(score % 2 ? '1' : '0', cx, cy + 0.5);
      }
      snake.forEach(([sx, sy], i) => {
        x.fillStyle = i === 0 ? colors.accent : colors.ink;
        x.globalAlpha = i === 0 ? 1 : Math.max(0.45, 1 - i * 0.025);
        cellRect(sx, sy, i === 0 ? 1 : 2); x.fill();
      });
      x.globalAlpha = 1;
      const [hx, hy] = snake[0], [dx, dy] = DIRS[dir];   // eyes look where the snake is going
      x.fillStyle = '#fff';
      for (const side of [-1, 1]) {
        const ex = hx * CELL + CELL / 2 + dx * 4 + dy * side * 4, ey = hy * CELL + CELL / 2 + dy * 4 + dx * side * 4;
        x.beginPath(); x.arc(ex, ey, 2.2, 0, 7); x.fill();
      }
      const touch = matchMedia('(pointer: coarse)').matches;
      if (state !== 'running') {
        x.fillStyle = colors.bg; x.globalAlpha = 0.78; x.fillRect(0, SIZE / 2 - 46, SIZE, 80); x.globalAlpha = 1;
        x.textAlign = 'center'; x.textBaseline = 'alphabetic'; x.fillStyle = colors.ink;
        const big = state === 'ready' ? 'Snake' : state === 'paused' ? 'Paused' : overText;
        const small = state === 'ready' ? (touch ? 'Swipe to start' : 'Press an arrow key to start')
          : state === 'paused' ? (touch ? 'Tap to continue' : 'Press Space to continue')
          : (touch ? 'Tap to play again' : 'Press Space to play again');
        x.font = '700 26px Fraunces, Georgia, serif'; x.fillText(big, SIZE / 2, SIZE / 2 - 8);
        x.font = '500 13px Inter, system-ui, sans-serif'; x.fillStyle = colors.muted; x.fillText(small, SIZE / 2, SIZE / 2 + 18);
      }
    }

    function loop(now) {
      raf = requestAnimationFrame(loop);
      t++;
      if (state === 'running') {
        acc += Math.min(now - (last || now), 250);
        while (acc >= stepMs && state === 'running') { step(); acc -= stepMs; }
      }
      last = now;
      draw();
    }

    // ---------- input ----------
    function turn(d) {
      if (state === 'over') return;
      if (state === 'ready' || state === 'paused') { state = 'running'; last = 0; acc = 0; }
      const lastDir = queue.length ? queue[queue.length - 1] : dir;
      if (d !== lastDir && d !== OPPOSITE[lastDir] && queue.length < 3) queue.push(d);
    }
    function restartOrPause() {
      if (state === 'over') { if (performance.now() - overAt > 500) { reset(); state = 'ready'; } return; }
      if (state === 'running') state = 'paused';
      else if (state === 'paused') { state = 'running'; last = 0; acc = 0; }
    }
    const KEYS = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', KeyW: 'up', KeyS: 'down', KeyA: 'left', KeyD: 'right' };
    function onKey(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (KEYS[e.code]) { e.preventDefault(); turn(KEYS[e.code]); }
      else if (e.code === 'Space' || e.code === 'KeyP') { e.preventDefault(); restartOrPause(); }
    }
    let start = null;
    function onTouchStart(e) { start = { x: e.touches[0].clientX, y: e.touches[0].clientY }; e.preventDefault(); }
    function onTouchEnd(e) {
      if (!start) return;
      const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
      start = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 20) return restartOrPause();   // a tap
      turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
    }
    function onVisibility() { if (document.hidden && state === 'running') state = 'paused'; }

    readColors(); reset(); resize();
    const themeWatch = new MutationObserver(() => { readColors(); draw(); });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const darkQuery = matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => { readColors(); draw(); };
    darkQuery.addEventListener('change', onScheme);
    window.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', onVisibility);
    cv.addEventListener('touchstart', onTouchStart, { passive: false });
    cv.addEventListener('touchend', onTouchEnd);
    raf = requestAnimationFrame(loop);

    return {
      destroy() {
        cancelAnimationFrame(raf);
        themeWatch.disconnect();
        darkQuery.removeEventListener('change', onScheme);
        window.removeEventListener('keydown', onKey);
        document.removeEventListener('visibilitychange', onVisibility);
        cv.removeEventListener('touchstart', onTouchStart);
        cv.removeEventListener('touchend', onTouchEnd);
      },
    };
  });
})();
