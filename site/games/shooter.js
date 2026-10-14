// Virus Shooter: move the ship, shoot the viruses before they reach the bottom. Three lives; it speeds up as you score.
(() => {
  const W = 360, H = 460;
  const SHIP_W = 34, SHIP_Y = H - 34, SHIP_SPEED = 260;     // px, px per second
  const BULLET_SPEED = 520, FIRE_MS = 220;
  const START_SPAWN_MS = 1100, MIN_SPAWN_MS = 380, LIVES = 3;

  SignalGames.register('shooter', (stage, api) => {
    const wrap = document.createElement('div');
    wrap.className = 'sht';
    const cv = document.createElement('canvas');
    wrap.appendChild(cv);
    stage.appendChild(wrap);
    const x = cv.getContext('2d');
    let colors = {}, raf = 0, last = 0, t = 0;
    let state = 'ready', overAt = 0, overText = '';
    let ship, bullets, enemies, sparks, score, lives, spawnMs, spawnAcc, fireAcc, hurtFlash;
    const keys = { left: false, right: false, fire: false };
    let touchX = null, touchFire = false;

    function readColors() {
      const s = getComputedStyle(document.documentElement);
      for (const k of ['bg', 'ink', 'faint', 'rule', 'accent', 'muted']) colors[k] = s.getPropertyValue('--' + k).trim();
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function reset() {
      ship = { x: W / 2 };
      bullets = []; enemies = []; sparks = [];
      score = 0; lives = LIVES; spawnMs = START_SPAWN_MS; spawnAcc = 0; fireAcc = FIRE_MS; hurtFlash = 0;
      api.score(0);
    }

    function spawn() {
      const r = 11 + Math.random() * 7;
      const speed = 55 + Math.random() * 40 + Math.min(score, 60) * 2.2;
      enemies.push({ x: r + Math.random() * (W - 2 * r), y: -r, r, vy: speed, wobble: Math.random() * 6, hp: r > 16 ? 2 : 1 });
    }

    function burst(px, py, n) {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, v = 40 + Math.random() * 120;
        sparks.push({ x: px, y: py, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0.5 });
      }
    }

    function hurt() {
      lives--; hurtFlash = 0.35;
      if (lives <= 0) end();
    }

    function end() {
      state = 'over'; overAt = performance.now();
      const best = api.gameOver(score);
      overText = best && score > 0 ? 'New best!' : 'Game over';
    }

    function update(dt) {
      // ship
      let dir = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      if (touchX !== null) dir = Math.abs(touchX - ship.x) < 4 ? 0 : Math.sign(touchX - ship.x);
      ship.x = Math.max(SHIP_W / 2, Math.min(W - SHIP_W / 2, ship.x + dir * SHIP_SPEED * dt));

      // firing (hold to auto-fire)
      fireAcc += dt * 1000;
      if ((keys.fire || touchFire) && fireAcc >= FIRE_MS) {
        fireAcc = 0;
        bullets.push({ x: ship.x, y: SHIP_Y - 16 });
      }
      bullets.forEach(b => { b.y -= BULLET_SPEED * dt; });
      bullets = bullets.filter(b => b.y > -10);

      // enemies
      spawnAcc += dt * 1000;
      if (spawnAcc >= spawnMs) { spawnAcc = 0; spawn(); spawnMs = Math.max(MIN_SPAWN_MS, spawnMs - 12); }
      enemies.forEach(e => { e.y += e.vy * dt; e.wobble += dt * 3; });

      // bullet hits
      for (const e of enemies) {
        for (const b of bullets) {
          if (!b.dead && !e.dead && (b.x - e.x) ** 2 + (b.y - e.y) ** 2 < (e.r + 3) ** 2) {
            b.dead = true; e.hp--;
            if (e.hp <= 0) { e.dead = true; score++; api.score(score); burst(e.x, e.y, 10); }
            else burst(e.x, e.y, 3);
          }
        }
      }
      bullets = bullets.filter(b => !b.dead);

      // enemies reaching the ship or the bottom
      for (const e of enemies) {
        if (e.dead) continue;
        const hitShip = Math.abs(e.x - ship.x) < SHIP_W / 2 + e.r - 4 && Math.abs(e.y - SHIP_Y) < e.r + 8;
        if (hitShip || e.y - e.r > H) { e.dead = true; burst(e.x, Math.min(e.y, H - 4), 8); hurt(); if (state !== 'running') break; }
      }
      enemies = enemies.filter(e => !e.dead);

      sparks.forEach(s => { s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt; });
      sparks = sparks.filter(s => s.life > 0);
      if (hurtFlash > 0) hurtFlash -= dt;
    }

    // ---------- drawing ----------
    function drawVirus(e) {
      x.save(); x.translate(e.x, e.y); x.rotate(Math.sin(e.wobble) * 0.3);
      x.strokeStyle = colors.accent; x.lineWidth = 2.5; x.lineCap = 'round';
      for (let i = 0; i < 8; i++) {   // spikes
        const a = (i / 8) * Math.PI * 2;
        x.beginPath(); x.moveTo(Math.cos(a) * e.r * 0.8, Math.sin(a) * e.r * 0.8);
        x.lineTo(Math.cos(a) * (e.r + 5), Math.sin(a) * (e.r + 5)); x.stroke();
        x.fillStyle = colors.accent; x.beginPath(); x.arc(Math.cos(a) * (e.r + 5), Math.sin(a) * (e.r + 5), 2.2, 0, 7); x.fill();
      }
      x.fillStyle = colors.accent; x.globalAlpha = e.hp > 1 ? 1 : 0.75;
      x.beginPath(); x.arc(0, 0, e.r, 0, 7); x.fill(); x.globalAlpha = 1;
      x.fillStyle = '#fff';
      x.beginPath(); x.arc(-e.r * 0.3, -e.r * 0.15, 2.4, 0, 7); x.arc(e.r * 0.3, -e.r * 0.15, 2.4, 0, 7); x.fill();
      x.restore();
    }
    function drawShip() {
      x.save(); x.translate(ship.x, SHIP_Y);
      x.fillStyle = colors.ink;
      x.beginPath(); x.moveTo(0, -18); x.lineTo(SHIP_W / 2, 12); x.lineTo(0, 5); x.lineTo(-SHIP_W / 2, 12); x.closePath(); x.fill();
      x.fillStyle = colors.accent; x.beginPath(); x.arc(0, -2, 4, 0, 7); x.fill();
      x.restore();
    }
    function draw() {
      if (!ship) return;
      x.fillStyle = colors.bg; x.fillRect(0, 0, W, H);
      x.fillStyle = colors.rule;   // slow star field
      for (let i = 0; i < 40; i++) {
        const sx = (i * 89) % W, sy = (i * 137 + t * (0.3 + (i % 3) * 0.25)) % H;
        x.fillRect(sx, sy, 2, 2);
      }
      bullets.forEach(b => { x.fillStyle = colors.ink; x.fillRect(b.x - 1.5, b.y - 8, 3, 10); });
      enemies.forEach(drawVirus);
      sparks.forEach(s => { x.globalAlpha = Math.max(0, s.life * 2); x.fillStyle = colors.accent; x.fillRect(s.x - 1.5, s.y - 1.5, 3, 3); });
      x.globalAlpha = 1;
      drawShip();
      // lives
      x.fillStyle = colors.ink; x.font = '600 13px Inter, system-ui, sans-serif'; x.textAlign = 'left'; x.textBaseline = 'top';
      x.fillText('♥'.repeat(Math.max(0, lives)) + '♡'.repeat(Math.max(0, LIVES - lives)), 10, 10);
      if (hurtFlash > 0) { x.fillStyle = colors.accent; x.globalAlpha = hurtFlash; x.fillRect(0, 0, W, H); x.globalAlpha = 1; }

      const touch = matchMedia('(pointer: coarse)').matches;
      if (state !== 'running') {
        x.fillStyle = colors.bg; x.globalAlpha = 0.8; x.fillRect(0, H / 2 - 50, W, 88); x.globalAlpha = 1;
        x.textAlign = 'center'; x.textBaseline = 'alphabetic'; x.fillStyle = colors.ink;
        const big = state === 'ready' ? 'Virus Shooter' : state === 'paused' ? 'Paused' : overText;
        const small = state === 'ready' ? (touch ? 'Touch and hold to move and shoot' : 'Press Space to start')
          : state === 'paused' ? (touch ? 'Tap to continue' : 'Press P to continue')
          : (touch ? 'Tap to play again' : 'Press Space to play again');
        x.font = '700 26px Fraunces, Georgia, serif'; x.fillText(big, W / 2, H / 2 - 10);
        x.font = '500 13px Inter, system-ui, sans-serif'; x.fillStyle = colors.muted; x.fillText(small, W / 2, H / 2 + 18);
      }
    }

    function loop(now) {
      raf = requestAnimationFrame(loop);
      t++;
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now;
      if (state === 'running') update(dt);
      else if (hurtFlash > 0) hurtFlash -= dt;   // let the red flash fade after game over too
      draw();
    }

    // ---------- input ----------
    function start() { if (state === 'ready') { state = 'running'; last = 0; } }
    function restart() { if (performance.now() - overAt > 500) { reset(); state = 'running'; last = 0; } }
    const MOVE = { ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
    function onKeyDown(e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (MOVE[e.code]) { e.preventDefault(); keys[MOVE[e.code]] = true; start(); }
      else if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        if (state === 'over') return restart();
        if (state === 'paused') { state = 'running'; last = 0; }
        start(); keys.fire = true;
      } else if (e.code === 'KeyP') {
        e.preventDefault();
        if (state === 'running') state = 'paused'; else if (state === 'paused') { state = 'running'; last = 0; }
      }
    }
    function onKeyUp(e) {
      if (MOVE[e.code]) keys[MOVE[e.code]] = false;
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') keys.fire = false;
    }
    const toCanvasX = clientX => { const r = cv.getBoundingClientRect(); return (clientX - r.left) / r.width * W; };
    function onTouchStart(e) {
      e.preventDefault();
      if (state === 'over') return restart();
      if (state === 'paused') { state = 'running'; last = 0; }
      start(); touchFire = true; touchX = toCanvasX(e.touches[0].clientX);
    }
    function onTouchMove(e) { e.preventDefault(); touchX = toCanvasX(e.touches[0].clientX); }
    function onTouchEnd() { touchFire = false; touchX = null; }
    function onVisibility() { if (document.hidden && state === 'running') state = 'paused'; }

    readColors(); reset(); resize();
    const themeWatch = new MutationObserver(() => { readColors(); draw(); });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const darkQuery = matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => { readColors(); draw(); };
    darkQuery.addEventListener('change', onScheme);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    document.addEventListener('visibilitychange', onVisibility);
    cv.addEventListener('touchstart', onTouchStart, { passive: false });
    cv.addEventListener('touchmove', onTouchMove, { passive: false });
    cv.addEventListener('touchend', onTouchEnd);
    raf = requestAnimationFrame(loop);

    return {
      destroy() {
        cancelAnimationFrame(raf);
        themeWatch.disconnect();
        darkQuery.removeEventListener('change', onScheme);
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
        document.removeEventListener('visibilitychange', onVisibility);
        cv.removeEventListener('touchstart', onTouchStart);
        cv.removeEventListener('touchmove', onTouchMove);
        cv.removeEventListener('touchend', onTouchEnd);
      },
    };
  });
})();
