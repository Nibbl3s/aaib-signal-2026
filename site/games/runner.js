// Signal Runner: jump over computers, duck under viruses. Drawn on a canvas in the page's colours.
(() => {
  const HEAD = new URL('assets/head.webp', document.currentScript.src).href;
  const H = 280, G = 232;                         // logical height and ground line
  const STEP = 1000 / 60;                         // physics runs at a fixed 60 steps per second
  const JUMP = 9.6, GRAVITY = 0.55, FAST_FALL = 1.6;

  SignalGames.register('runner', (stage, api) => {
    const cv = document.createElement('canvas');
    stage.appendChild(cv);
    const x = cv.getContext('2d');
    const head = new Image(); head.src = HEAD;
    let W = 800, colors = {}, raf = 0, last = 0, acc = 0;
    let state = 'ready', t = 0, speed, score, obstacles, nextGap, p, bits;

    function readColors() {
      const s = getComputedStyle(document.documentElement);
      for (const k of ['bg', 'ink', 'faint', 'rule', 'accent']) colors[k] = s.getPropertyValue('--' + k).trim();
      colors.panel = s.getPropertyValue('--panel').trim() || colors.rule;
    }

    function resize() {
      const r = stage.getBoundingClientRect();
      W = Math.round(Math.max(480, Math.min(800, r.width)));   // phones get a zoomed-in view, desktops the full width
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function reset() {
      t = 0; speed = 6; score = 0; obstacles = []; nextGap = 380;
      p = { y: 0, vy: 0, duck: 0, held: false };
      bits = Array.from({ length: 16 }, () => ({ x: Math.random() * 800, y: 18 + Math.random() * 120, s: Math.random() < .5 ? '0' : '1' }));
      api.score(0);
    }

    // ---------- obstacles ----------
    const KINDS = [
      { k: 'laptop', w: 46, h: 30, weight: 3 },
      { k: 'tower', w: 28, h: 50, weight: 3 },
      { k: 'rack', w: 36, h: 64, weight: 2 },
      { k: 'virusLow', w: 26, h: 26, weight: 2 },
      { k: 'virusHigh', w: 30, h: 30, weight: 2, minT: 600 },   // ducking is introduced after ~10 seconds
    ];
    function spawn() {
      const pool = KINDS.filter(k => !k.minT || t > k.minT);
      let r = Math.random() * pool.reduce((s, k) => s + k.weight, 0), kind = pool[0];
      for (const k of pool) { if ((r -= k.weight) < 0) { kind = k; break; } }
      const o = { k: kind.k, x: W + 20, w: kind.w, h: kind.h };
      o.y = kind.k === 'virusHigh' ? G - 82 : kind.k === 'virusLow' ? G - 30 : G - kind.h;
      obstacles.push(o);
      // a jump covers about 35 steps of distance; keep every gap clearable, with some variety
      nextGap = speed * 38 + o.w + Math.random() * (220 + speed * 18);
    }

    // ---------- hitboxes (slightly forgiving) ----------
    function playerBox() {
      const by = G - p.y;
      return p.duck > 0 && p.y === 0
        ? { l: 98, r: 132, t: by - 40, b: by }
        : { l: 100, r: 130, t: by - 62, b: by };
    }
    function obstacleBox(o) {
      const pad = o.k.startsWith('virus') ? 5 : 3;
      return { l: o.x + pad, r: o.x + o.w - pad, t: o.y + pad, b: o.y + o.h - pad };
    }
    const hit = (a, b) => a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;

    // ---------- one physics step ----------
    function step() {
      t++;
      speed = Math.min(13, 6 + t * 0.0016);
      score += speed / 6;
      api.score(score);
      if (p.y > 0 || p.vy > 0) {
        p.y += p.vy;
        p.vy -= p.held ? GRAVITY * FAST_FALL : GRAVITY;
        if (p.y <= 0) { p.y = 0; p.vy = 0; }
      }
      if (p.duck > 0 && !p.held) p.duck--;
      bits.forEach(b => { b.x -= speed * 0.25; if (b.x < -10) { b.x = W + 10; b.y = 18 + Math.random() * 120; } });
      obstacles.forEach(o => { o.x -= speed; });
      obstacles = obstacles.filter(o => o.x > -80);
      const lastObs = obstacles[obstacles.length - 1];
      if (!lastObs || W + 20 - (lastObs.x + lastObs.w) >= nextGap) spawn();
      const pb = playerBox();
      if (obstacles.some(o => hit(pb, obstacleBox(o)))) end();
    }

    function end() {
      state = 'over';
      overAt = performance.now();
      const isBest = api.gameOver(score);
      overText = isBest && score > 0 ? 'New best!' : 'Game over';
    }
    let overText = '', overAt = 0;

    // ---------- drawing ----------
    function drawRunner() {
      const ducking = p.duck > 0 && p.y === 0, by = G - p.y;
      const run = state === 'running' && p.y === 0 ? Math.sin(t * 0.45) : 0;
      const bodyH = ducking ? 18 : 30;
      x.lineCap = 'round'; x.strokeStyle = colors.ink; x.lineWidth = 4;
      x.beginPath();
      if (p.y > 0) { x.moveTo(110, by - 12); x.lineTo(102, by - 2); x.moveTo(120, by - 12); x.lineTo(130, by - 4); }
      else { x.moveTo(112, by - 12); x.lineTo(112 + run * 9, by); x.moveTo(118, by - 12); x.lineTo(118 - run * 9, by); }
      x.stroke();
      x.fillStyle = '#f4f1ea'; x.lineWidth = 2;
      x.beginPath(); x.roundRect(100, by - 12 - bodyH, 30, bodyH, 6); x.fill(); x.stroke();
      x.fillStyle = colors.accent; x.fillRect(112, by - 12 - bodyH + 6, 6, 3);
      x.lineWidth = 3.5; x.beginPath();
      x.moveTo(102, by - bodyH); x.lineTo(94 - run * 4, by - bodyH + 12);
      x.moveTo(128, by - bodyH); x.lineTo(138 + run * 4, by - bodyH + 10); x.stroke();
      const hs = ducking ? 36 : 44;
      const hy = by - bodyH - (ducking ? 14 : 24) - hs / 2 + 10 + Math.abs(run) * 2;
      x.lineWidth = 2; x.beginPath(); x.moveTo(115, hy); x.lineTo(115, hy - 10); x.stroke();
      x.fillStyle = colors.accent; x.beginPath(); x.arc(115, hy - 12, 3, 0, 7); x.fill();
      if (head.complete && head.naturalWidth) x.drawImage(head, 115 - hs / 2, hy, hs, hs);
      x.strokeStyle = colors.ink; x.lineWidth = 2.5; x.beginPath(); x.arc(115, hy + hs / 2, hs / 2, 0, 7); x.stroke();
    }

    function drawObstacle(o) {
      x.lineWidth = 2; x.strokeStyle = colors.ink;
      if (o.k === 'laptop') {
        x.fillStyle = colors.panel; x.beginPath(); x.roundRect(o.x + 6, o.y, o.w - 12, o.h - 6, 3); x.fill(); x.stroke();
        x.fillStyle = '#4b8bd6'; x.fillRect(o.x + 10, o.y + 4, o.w - 20, o.h - 14);
        x.fillStyle = colors.ink; x.fillRect(o.x, o.y + o.h - 6, o.w, 6);
      } else if (o.k === 'tower') {
        x.fillStyle = colors.panel; x.beginPath(); x.roundRect(o.x, o.y, o.w, o.h, 3); x.fill(); x.stroke();
        x.fillStyle = colors.accent; x.beginPath(); x.arc(o.x + o.w / 2, o.y + 10, 3, 0, 7); x.fill();
        x.fillStyle = colors.ink; for (let i = 0; i < 3; i++) x.fillRect(o.x + 6, o.y + 20 + i * 7, o.w - 12, 2);
      } else if (o.k === 'rack') {
        x.fillStyle = colors.ink; x.beginPath(); x.roundRect(o.x, o.y, o.w, o.h, 3); x.fill();
        for (let i = 0; i < 6; i++) {
          x.fillStyle = colors.panel; x.fillRect(o.x + 4, o.y + 5 + i * 10, o.w - 8, 6);
          x.fillStyle = (i + Math.floor(t / 20)) % 2 ? '#3ecf6e' : colors.accent; x.fillRect(o.x + o.w - 9, o.y + 7 + i * 10, 3, 2);
        }
      } else {
        const cx = o.x + o.w / 2, cy = o.y + o.h / 2 + Math.sin(t * 0.2) * 2, r = o.w / 2 - 4;
        x.strokeStyle = '#c0392b'; x.lineWidth = 2.5;
        for (let i = 0; i < 10; i++) {
          const a = i / 10 * 6.283 + t * 0.05;
          x.beginPath(); x.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); x.lineTo(cx + Math.cos(a) * (r + 6), cy + Math.sin(a) * (r + 6)); x.stroke();
        }
        x.fillStyle = '#e74c3c'; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
        x.fillStyle = '#fff'; x.beginPath(); x.arc(cx - 4, cy - 2, 3, 0, 7); x.arc(cx + 4, cy - 2, 3, 0, 7); x.fill();
        x.fillStyle = '#111'; x.beginPath(); x.arc(cx - 3, cy - 2, 1.4, 0, 7); x.arc(cx + 5, cy - 2, 1.4, 0, 7); x.fill();
      }
    }

    function centerText(big, small) {
      x.textAlign = 'center'; x.fillStyle = colors.ink;
      x.font = '700 28px Fraunces, Georgia, serif'; x.fillText(big, W / 2, 96);
      x.font = '500 14px Inter, system-ui, sans-serif'; x.fillStyle = colors.faint; x.fillText(small, W / 2, 124);
      x.textAlign = 'left';
    }

    function draw() {
      if (!p) return;
      x.fillStyle = colors.bg; x.fillRect(0, 0, W, H);
      x.font = '600 12px ui-monospace, Consolas, monospace'; x.fillStyle = colors.faint; x.globalAlpha = 0.45;
      bits.forEach(b => x.fillText(b.s, b.x, b.y)); x.globalAlpha = 1;
      x.strokeStyle = colors.ink; x.lineWidth = 2; x.beginPath(); x.moveTo(0, G); x.lineTo(W, G); x.stroke();
      x.fillStyle = colors.faint;
      for (let i = 0; i < 24; i++) x.fillRect(((i * 53 - t * speed) % W + W) % W, G + 8 + (i % 3) * 6, 10, 2);
      obstacles.forEach(drawObstacle);
      drawRunner();
      const touch = matchMedia('(pointer: coarse)').matches;
      if (state === 'ready') centerText('Signal Runner', touch ? 'Tap to start · swipe down to duck' : 'Press Space to start · ↓ to duck');
      if (state === 'over') centerText(overText, (touch ? 'Tap' : 'Press Space') + ' to play again');
    }

    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (state === 'running') {
        acc += Math.min(now - (last || now), 100);   // cap catch-up after a pause
        while (acc >= STEP && state === 'running') { step(); acc -= STEP; }
      }
      last = now;
      draw();
    }

    // ---------- input ----------
    function jump() {
      if (state === 'over' && performance.now() - overAt < 500) return;   // no accidental instant restart
      if (state === 'ready' || state === 'over') { reset(); state = 'running'; acc = 0; last = 0; return; }
      if (p.y === 0) { p.vy = JUMP; p.duck = 0; }
    }
    function duck(on) {
      if (state !== 'running') return;
      p.held = on;
      if (on) p.duck = 20;
    }
    function onKey(e) {
      if (e.repeat && (e.code === 'Space' || e.code === 'ArrowUp')) { e.preventDefault(); return; }
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') { e.preventDefault(); jump(); }
      else if (e.code === 'ArrowDown' || e.code === 'KeyS') { e.preventDefault(); duck(true); }
    }
    function onKeyUp(e) { if (e.code === 'ArrowDown' || e.code === 'KeyS') duck(false); }
    let touchY = null;
    function onTouchStart(e) { touchY = e.touches[0].clientY; e.preventDefault(); }
    function onTouchEnd(e) {
      if (touchY === null) return;
      const dy = e.changedTouches[0].clientY - touchY; touchY = null;
      if (dy > 30) { duck(true); setTimeout(() => duck(false), 450); } else jump();
    }
    function onMouse(e) { if (e.button === 0) jump(); }
    function onVisibility() { if (document.hidden && state === 'running') { state = 'paused'; } else if (!document.hidden && state === 'paused') { state = 'running'; last = 0; } }

    readColors(); reset();
    const themeWatch = new MutationObserver(() => { readColors(); draw(); });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const darkQuery = matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => { readColors(); draw(); };
    darkQuery.addEventListener('change', onScheme);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    stage.addEventListener('touchstart', onTouchStart, { passive: false });
    stage.addEventListener('touchend', onTouchEnd);
    stage.addEventListener('mousedown', onMouse);
    head.onload = draw;
    resize();
    raf = requestAnimationFrame(loop);

    return {
      destroy() {
        cancelAnimationFrame(raf);
        themeWatch.disconnect();
        darkQuery.removeEventListener('change', onScheme);
        window.removeEventListener('keydown', onKey);
        window.removeEventListener('keyup', onKeyUp);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibility);
        stage.removeEventListener('touchstart', onTouchStart);
        stage.removeEventListener('touchend', onTouchEnd);
        stage.removeEventListener('mousedown', onMouse);
      },
    };
  });
})();
