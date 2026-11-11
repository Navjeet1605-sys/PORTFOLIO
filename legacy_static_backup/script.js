// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---------- Cursor glow ----------
const glow = document.getElementById('cursorGlow');
let gx = window.innerWidth / 2, gy = window.innerHeight / 2, cx = gx, cy = gy;
window.addEventListener('mousemove', (e) => {
  gx = e.clientX;
  gy = e.clientY;
});
function animateGlow() {
  cx += (gx - cx) * 0.12;
  cy += (gy - cy) * 0.12;
  glow.style.left = cx + 'px';
  glow.style.top = cy + 'px';
  requestAnimationFrame(animateGlow);
}
animateGlow();

// ---------- Custom cursor: dot (instant) + ring (lagging, reacts to hover) ----------
const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseXNow = gx, mouseYNow = gy, ringX = gx, ringY = gy;

if (isFinePointer) {
  window.addEventListener('mousemove', (e) => {
    mouseXNow = e.clientX;
    mouseYNow = e.clientY;
    cursorDot.style.transform = `translate(${mouseXNow}px, ${mouseYNow}px) translate(-50%,-50%)`;
  });
  function animateRing() {
    ringX += (mouseXNow - ringX) * 0.18;
    ringY += (mouseYNow - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = document.querySelectorAll('a, button, .btn, .proj-card, .skill-pill');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });
  window.addEventListener('mousedown', () => cursorRing.classList.add('click'));
  window.addEventListener('mouseup', () => cursorRing.classList.remove('click'));

  // ---------- Fading cursor trail ----------
  const TRAIL_LEN = 7;
  const trailDots = [];
  for (let i = 0; i < TRAIL_LEN; i++) {
    const d = document.createElement('div');
    d.className = 'trail-dot';
    d.style.opacity = (1 - i / TRAIL_LEN) * 0.5;
    d.style.width = d.style.height = (5 - i * 0.5) + 'px';
    document.body.appendChild(d);
    trailDots.push({ el: d, x: gx, y: gy });
  }
  function animateTrail() {
    let px = mouseXNow, py = mouseYNow;
    trailDots.forEach(dot => {
      dot.x += (px - dot.x) * 0.35;
      dot.y += (py - dot.y) * 0.35;
      dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%,-50%)`;
      px = dot.x;
      py = dot.y;
    });
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // ---------- Click ripple burst ----------
  window.addEventListener('click', (e) => {
    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.left = e.clientX + 'px';
    r.style.top = e.clientY + 'px';
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 720);
    if (window.spawn3DBurst) window.spawn3DBurst(e.clientX, e.clientY);
  });

  // ---------- Magnetic buttons ----------
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      btn.style.transition = 'transform 0s';
      btn.style.transform = `translate(${relX * 0.28}px, ${relY * 0.45}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.4s cubic-bezier(.2,.8,.2,1)';
      btn.style.transform = 'translate(0,0)';
    });
  });

  // ---------- 3D tilt on cards ----------
  document.querySelectorAll('.skill-pill, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transition = 'transform 0s';
      card.style.transform = `perspective(700px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(.2,.8,.2,1)';
      card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ---------- GitHub placeholder notice ----------
document.getElementById('githubLink').addEventListener('click', function (e) {
  if (this.getAttribute('href') === '#') {
    e.preventDefault();
    alert('Add your GitHub URL in the code (search for "githubLink") to activate this button.');
  }
});

// ---------- Three.js: "Quantum Core" — a living energy centerpiece ----------
(function () {
  const canvas = document.getElementById('hero-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 34);

  // ---- lighting
  scene.add(new THREE.AmbientLight(0x2a2440, 1.4));
  const lightA = new THREE.PointLight(0x8b5cf6, 46, 100);
  const lightB = new THREE.PointLight(0x4d7cff, 36, 100);
  const lightC = new THREE.PointLight(0xd8c8ff, 10, 60);
  scene.add(lightA, lightB, lightC);

  function pseudoNoise(x, y, z, t) {
    return (
      Math.sin(x * 1.6 + t) * 0.5 +
      Math.sin(y * 1.9 - t * 1.3) * 0.35 +
      Math.sin(z * 1.4 + t * 0.8) * 0.4 +
      Math.sin((x + y + z) * 0.8 + t * 0.6) * 0.3
    ) / 1.55;
  }

  // ---- glow halo behind the core (fake bloom via additive sprite)
  function makeGlowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(216,200,255,0.95)');
    g.addColorStop(0.35, 'rgba(139,92,246,0.4)');
    g.addColorStop(1, 'rgba(139,92,246,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }
  const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  glowSprite.scale.set(42, 42, 1);
  scene.add(glowSprite);

  // ---- core: morphing, color-cycling glass icosahedron
  const coreDetail = 4;
  const coreRadius = 8.6;
  const coreGeo = new THREE.IcosahedronGeometry(coreRadius, coreDetail);
  const basePositions = coreGeo.attributes.position.array.slice();
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0x2a1f52, emissive: 0x4a2f9e, emissiveIntensity: 0.4,
    roughness: 0.25, metalness: 0.15, transparent: true, opacity: 0.64,
    side: THREE.DoubleSide
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xd8c8ff, wireframe: true, transparent: true, opacity: 0.1 });
  core.add(new THREE.Mesh(coreGeo, wireMat));

  // ---- orbital rings: glowing torus rings tilted at different angles, spinning independently
  const ringGroup = new THREE.Group();
  scene.add(ringGroup);
  const ringDefs = [
    { radius: 12.5, tube: 0.05, color: 0x8b5cf6, tiltX: 1.1, tiltZ: 0.2, speed: 0.18 },
    { radius: 15.5, tube: 0.045, color: 0x4d7cff, tiltX: -0.6, tiltZ: 0.9, speed: -0.13 },
    { radius: 19, tube: 0.035, color: 0xd8c8ff, tiltX: 0.4, tiltZ: -1.2, speed: 0.09 }
  ];
  const rings = ringDefs.map(def => {
    const geo = new THREE.TorusGeometry(def.radius, def.tube, 12, 120);
    const mat = new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = def.tiltX;
    mesh.rotation.z = def.tiltZ;
    ringGroup.add(mesh);
    return { mesh, speed: def.speed, tiltX: def.tiltX, tiltZ: def.tiltZ };
  });

  // ---- energy pulses: sonar-like rings that periodically fire outward from the core
  const pulses = [];
  let nextPulseAt = 1.5;
  function spawnPulse() {
    const geo = new THREE.TorusGeometry(coreRadius * 0.95, 0.06, 8, 64);
    const mat = new THREE.MeshBasicMaterial({ color: 0xb8a2ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    scene.add(mesh);
    pulses.push({ mesh, life: 0 });
  }

  // ---- crystal shards: elongated diamond-like forms orbiting the core
  const shardGroup = new THREE.Group();
  scene.add(shardGroup);
  const SHARD_COUNT = 12;
  const shards = [];
  for (let i = 0; i < SHARD_COUNT; i++) {
    const g = new THREE.OctahedronGeometry(1, 0);
    const m = new THREE.MeshPhysicalMaterial({
      color: i % 2 === 0 ? 0x8b5cf6 : 0x4d7cff,
      emissive: i % 2 === 0 ? 0x6a3fe0 : 0x3f5fe0,
      emissiveIntensity: 0.65, roughness: 0.15, metalness: 0.1,
      transparent: true, opacity: 0.6
    });
    const mesh = new THREE.Mesh(g, m);
    mesh.scale.set(0.55 + Math.random() * 0.5, 1.7 + Math.random() * 1.1, 0.55 + Math.random() * 0.5); // crystal elongation
    const orbitRadius = 14 + Math.random() * 15;
    const orbitSpeed = 0.05 + Math.random() * 0.09;
    const orbitTilt = Math.random() * Math.PI;
    const orbitOffset = Math.random() * Math.PI * 2;
    const spinSpeed = 0.3 + Math.random() * 0.6;
    shards.push({ mesh, orbitRadius, orbitSpeed, orbitTilt, orbitOffset, spinSpeed });
    shardGroup.add(mesh);
  }

  // ---- spiral galaxy backdrop instead of a flat scatter of stars
  const GALAXY_COUNT = 900;
  const ARMS = 3;
  const galaxyPos = new Float32Array(GALAXY_COUNT * 3);
  const galaxyCol = new Float32Array(GALAXY_COUNT * 3);
  const cInner = new THREE.Color(0xd8c8ff);
  const cOuter = new THREE.Color(0x241a52);
  for (let i = 0; i < GALAXY_COUNT; i++) {
    const tt = Math.random();
    const radius = tt * 75 + 18;
    const arm = i % ARMS;
    const spin = radius * 0.045;
    const angle = (arm / ARMS) * Math.PI * 2 + spin + (Math.random() - 0.5) * 0.4;
    const spread = (Math.random() - 0.5) * (5 + tt * 9);
    const x = Math.cos(angle) * radius + spread;
    const y = (Math.random() - 0.5) * (7 - tt * 3);
    const z = Math.sin(angle) * radius + spread - 45;
    galaxyPos[i * 3] = x;
    galaxyPos[i * 3 + 1] = y;
    galaxyPos[i * 3 + 2] = z;
    const c = cInner.clone().lerp(cOuter, tt);
    galaxyCol[i * 3] = c.r;
    galaxyCol[i * 3 + 1] = c.g;
    galaxyCol[i * 3 + 2] = c.b;
  }
  const galaxyGeo = new THREE.BufferGeometry();
  galaxyGeo.setAttribute('position', new THREE.BufferAttribute(galaxyPos, 3));
  galaxyGeo.setAttribute('color', new THREE.BufferAttribute(galaxyCol, 3));
  const galaxyMat = new THREE.PointsMaterial({ size: 0.55, vertexColors: true, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false });
  const galaxy = new THREE.Points(galaxyGeo, galaxyMat);
  galaxy.rotation.x = 0.45;
  scene.add(galaxy);

  // ---- scroll-driven parallax depth
  let scrollProgress = 0;
  function updateScrollProgress() {
    const max = document.body.scrollHeight - window.innerHeight;
    scrollProgress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // ---- interaction
  let mouseX = 0, mouseY = 0, tiltX = 0, tiltY = 0;
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2();
  const repelPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 6);
  const mouseWorld = new THREE.Vector3();
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    mouseNDC.set(mouseX, -mouseY);
  });

  // ---- click burst
  const bursts = [];
  window.spawn3DBurst = function (clientX, clientY) {
    mouseNDC.set((clientX / window.innerWidth) * 2 - 1, -((clientY / window.innerHeight) * 2 - 1));
    raycaster.setFromCamera(mouseNDC, camera);
    const hit = new THREE.Vector3();
    raycaster.ray.intersectPlane(repelPlane, hit);
    if (!hit) return;
    const n = 26;
    const bp = new Float32Array(n * 3);
    const vel = [];
    for (let i = 0; i < n; i++) {
      bp[i * 3] = hit.x;
      bp[i * 3 + 1] = hit.y;
      bp[i * 3 + 2] = hit.z;
      const dir = new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).normalize();
      vel.push(dir.multiplyScalar(0.15 + Math.random() * 0.25));
    }
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.BufferAttribute(bp, 3));
    const bm = new THREE.PointsMaterial({ color: 0xd8c8ff, size: 0.5, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false });
    const pts = new THREE.Points(bg, bm);
    scene.add(pts);
    bursts.push({ pts, vel, life: 0 });
  };

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', resize);

  const posAttr = coreGeo.attributes.position;
  const clock = new THREE.Clock();

  function animate() {
    const t = clock.getElapsedTime();

    // continuously morph the core surface
    for (let i = 0; i < posAttr.count; i++) {
      const ix = i * 3;
      const bx = basePositions[ix], by = basePositions[ix + 1], bz = basePositions[ix + 2];
      const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
      const nx = bx / len, ny = by / len, nz = bz / len;
      const n = pseudoNoise(nx * 3, ny * 3, nz * 3, t * 0.5);
      const displaced = 1 + n * 0.16;
      posAttr.array[ix] = bx * displaced;
      posAttr.array[ix + 1] = by * displaced;
      posAttr.array[ix + 2] = bz * displaced;
    }
    posAttr.needsUpdate = true;
    coreGeo.computeVertexNormals();

    // slow color cycle within the violet–blue–lilac range
    const hue = 0.72 + Math.sin(t * 0.15) * 0.06;
    coreMat.emissive.setHSL(hue, 0.75, 0.55);
    coreMat.color.setHSL(hue, 0.5, 0.22);

    core.rotation.y = t * 0.12;
    core.rotation.x = Math.sin(t * 0.2) * 0.15;

    // pulsing glow halo synced to the core
    glowSprite.scale.setScalar(40 + Math.sin(t * 0.8) * 4);
    glowSprite.material.color.setHSL(hue, 0.8, 0.75);

    // orbital rings spin independently
    rings.forEach(r => {
      r.mesh.rotation.z = r.tiltZ + t * r.speed;
      r.mesh.rotation.x = r.tiltX + Math.sin(t * r.speed * 0.5) * 0.08;
    });

    // fire a new energy pulse periodically, animate + retire old ones
    if (t > nextPulseAt) {
      spawnPulse();
      nextPulseAt = t + 2.4 + Math.random() * 1.2;
    }
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.life += 0.016;
      const scale = 1 + p.life * 1.8;
      p.mesh.scale.setScalar(scale);
      p.mesh.material.opacity = Math.max(0, 0.55 - p.life * 0.35);
      if (p.life > 1.6) {
        scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        pulses.splice(i, 1);
      }
    }

    // scroll parallax: core recedes, rig drifts back, galaxy slides toward camera
    core.position.z = -scrollProgress * 22;
    glowSprite.position.z = core.position.z;
    const coreScale = 1 - scrollProgress * 0.3;
    core.scale.setScalar(coreScale);
    ringGroup.position.z = -scrollProgress * 22;
    shardGroup.position.z = -scrollProgress * 12;
    galaxy.position.z = scrollProgress * 20;
    galaxy.rotation.z = t * 0.025;

    // orbiting lights
    lightA.position.set(Math.cos(t * 0.4) * 20, Math.sin(t * 0.3) * 14, Math.sin(t * 0.4) * 20);
    lightB.position.set(Math.sin(t * 0.35) * 22, Math.cos(t * 0.25) * 10, Math.cos(t * 0.3) * 18);
    lightC.position.set(camera.position.x + 6, camera.position.y + 4, camera.position.z);

    // cursor repel plane
    raycaster.setFromCamera(mouseNDC, camera);
    raycaster.ray.intersectPlane(repelPlane, mouseWorld);

    // orbiting crystal shards with cursor repel
    shards.forEach(s => {
      const angle = t * s.orbitSpeed + s.orbitOffset;
      const baseX = Math.cos(angle) * s.orbitRadius;
      const baseZ = Math.sin(angle) * s.orbitRadius * Math.cos(s.orbitTilt) - 6;
      const baseY = Math.sin(angle) * s.orbitRadius * Math.sin(s.orbitTilt) * 0.6;

      let px = baseX, py = baseY, pz = baseZ;
      if (mouseWorld) {
        const dx = baseX - mouseWorld.x, dy = baseY - mouseWorld.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const threshold = 9;
        if (dist < threshold) {
          const force = (1 - dist / threshold) * 4.5;
          px += (dx / (dist || 1)) * force;
          py += (dy / (dist || 1)) * force;
        }
      }
      s.mesh.position.x += (px - s.mesh.position.x) * 0.12;
      s.mesh.position.y += (py - s.mesh.position.y) * 0.12;
      s.mesh.position.z += (pz - s.mesh.position.z) * 0.12;
      s.mesh.rotation.x = t * s.spinSpeed;
      s.mesh.rotation.y = t * s.spinSpeed * 0.7;
    });

    // click bursts
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.life += 0.016;
      const arr = b.pts.geometry.attributes.position.array;
      for (let j = 0; j < b.vel.length; j++) {
        arr[j * 3] += b.vel[j].x;
        arr[j * 3 + 1] += b.vel[j].y;
        arr[j * 3 + 2] += b.vel[j].z;
      }
      b.pts.geometry.attributes.position.needsUpdate = true;
      b.pts.material.opacity = Math.max(0, 1 - b.life * 1.4);
      if (b.life > 0.75) {
        scene.remove(b.pts);
        b.pts.geometry.dispose();
        b.pts.material.dispose();
        bursts.splice(i, 1);
      }
    }

    // mouse parallax + scroll-based camera pull-back
    tiltX += (mouseY * 2.2 - tiltX) * 0.03;
    tiltY += (mouseX * 3.2 - tiltY) * 0.03;
    camera.position.x += (tiltY - camera.position.x) * 0.04;
    camera.position.y += (-tiltX - camera.position.y) * 0.04;
    camera.position.z += ((34 + scrollProgress * 8) - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();

// ---------- Projects Carousel Scroll Translation ----------
(function() {
  const projCarousel = document.querySelector('.proj-carousel');
  if (projCarousel) {
    projCarousel.addEventListener('wheel', (e) => {
      // If the scroll is vertical, translate it to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        projCarousel.scrollLeft += e.deltaY * 0.85; // smooth damping
      }
    }, { passive: false });

    // Track the active card based on intersection (cover-flow effect)
    const cards = projCarousel.querySelectorAll('.proj-card');
    const cardObserverOptions = {
      root: projCarousel,
      rootMargin: '0px -30% 0px -30%', // center window activation
      threshold: 0.4
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, cardObserverOptions);

    cards.forEach(card => {
      cardObserver.observe(card);
    });

    // Handle initial state if nothing is intersecting yet
    setTimeout(() => {
      const activeExists = Array.from(cards).some(card => card.classList.contains('active'));
      if (!activeExists && cards.length > 0) {
        cards[0].classList.add('active');
      }
    }, 200);
  }
})();


// ==========================================================================
// UPGRADED INTERACTIONS: Filters, Modals, Clipboard, Mobile Nav, ScrollSpy
// ==========================================================================

// ---------- Project Category Filtering ----------
(function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.proj-showcase-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCategory.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
})();

// ---------- Interactive Project Detail Modal ----------
const projectModalData = {
  'ner-vision': {
    title: 'NER-Vision — AI Landslide Guardian',
    badge: 'SIH 2026 Problem Statement 26001 · Ministry of DoNER',
    tagline: 'AI-Powered Landslide Risk Monitoring, Dynamic Evacuation Routing & Real-Time Early Warning System.',
    problem: 'The North Eastern Region (NER) of India suffers catastrophic landslides during monsoons due to steep terrain, heavy precipitation, and fragile soil. Conventional monitoring systems are delayed, manual, and lack localized evacuation navigation.',
    solution: 'Engineered a full-stack early warning platform trained on real physical parameters (rainfall, soil moisture, slope angles, vegetation index, and historical incidence). Achieved an 80% backtest hit-rate across 10 benchmark landslide scenarios, meeting official SIH acceptance criteria.',
    architecture: '• Machine Learning Engine: Scikit-learn RandomForestClassifier with offline threshold fallback logic.<br>• GIS Heatmap Dashboard: Interactive Leaflet.js map with color/size-coded risk markers auto-refreshing every 8s.<br>• Dynamic Evacuation Routing: NetworkX graph running Dijkstra algorithm with risk-penalized edge weights to navigate citizens safely around high-risk zones.<br>• Automated Real-time Alerting: Simulated SMS/WhatsApp/Push notification dispatcher triggering when risk crosses High/Very High thresholds.<br>• Crowdsourced Reporting: Geo-tagged citizen hazard reports with automatic verification of high-severity incidents.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Leaflet.js', 'NetworkX', 'SQLite', 'GIS Mapping', 'Dijkstra Routing'],
    github: 'https://github.com/Navjeet1605-sys/SIH-PS-26001',
    demo: null
  },
  'omnis': {
    title: 'O.M.N.I.S — Omni-Modal Network Intelligence Swarm',
    badge: 'Fetch AI-Thon 3.0 · Round 2 Finalist at Galgotias CET',
    tagline: 'Decentralized Autonomous Multi-Agent Swarm with Semantic Decision Routing & Agent Chat Protocol.',
    problem: 'Personal AI assistants are traditionally monolithic chat wrappers that cannot execute verified multi-step actions or interact with decentralized agent ecosystems.',
    solution: 'Built an autonomous multi-agent swarm natively integrated into the Fetch.ai Ecosystem and discoverable across ASI:One. Elevated voice/text intent into real-time verified execution using a semantic Decision-Making Model (DMM) router.',
    architecture: '• Multi-Agent Supervisor: Semantic FirstLayerDMM classifies incoming intent and delegates queries to specialized autonomous sub-agents.<br>• Crypto & Finance Agent: Real-time Binance spot ticker and CoinGecko API integrations with live USD/INR pricing.<br>• Web Search & Fact Synthesis Agent: Real-time Wikipedia entity extraction and DuckDuckGo search integration with Groq LLaMA 3.3 70B reasoning.<br>• Agent Chat Protocol (ACP): Full support for official Fetch.ai ACP specifications with interactive MetadataContent rich cards and persistent conversational memory (ctx.storage).<br>• Agentverse Cloud Deployment: Live cloud-native uAgent registered on the Almanac smart contract.',
    tech: ['Fetch.ai uAgents', 'Agentverse', 'ASI:One', 'Python', 'Groq LLaMA 3.3', 'Agent Chat Protocol', 'Binance API', 'DuckDuckGo'],
    github: 'https://github.com/Navjeet1605-sys/fetch-a-thon',
    demo: 'https://agentverse.ai/'
  },
  'devflow': {
    title: 'DevFlow — Distributed DAG Workflow Engine & CI/CD',
    badge: 'Distributed Systems & Microservices',
    tagline: 'High-Throughput, Fault-Tolerant Distributed DAG Pipeline Engine with Real-Time Log Streaming & AI Failure Diagnostics.',
    problem: 'Modern CI/CD pipelines require robust dependency management, resilient worker crash recovery, and instant diagnostics when pipeline stages fail.',
    solution: 'Architected a distributed DAG workflow engine utilizing Tarjan\'s cycle detection, BullMQ redis queues, PostgreSQL, and an AI-driven log analyzer that isolates root causes and outputs automated remediation recommendations.',
    architecture: '• DAG Graph Engine: Tarjan\'s algorithm for cycle hazard prevention and topological task sorting.<br>• Worker Runtime Cluster: Specialized worker pools (build-worker, test-worker, docker-worker, deploy-worker, script-worker) with automated Bearer/API-key secret redaction.<br>• Liveness Monitor & Fault Recovery: Heartbeat monitor detecting dead workers (15s inactivity) and automatically re-enqueueing orphaned tasks.<br>• WebSocket Streaming Gateway: Room-based real-time log distribution for live pipeline inspection.<br>• AI Root Cause Analyzer: Event bus consumer parsing failure logs to deliver instant diagnostic summaries.',
    tech: ['Node.js', 'TypeScript', 'Express', 'BullMQ', 'Redis Streams', 'PostgreSQL', 'React Flow', 'Docker Compose'],
    github: 'https://github.com/Navjeet1605-sys/DevFlow',
    demo: 'https://docs-devflow.vercel.app/'
  },
  'datheon': {
    title: 'Datheon Backend Suite — BookStore API, Auth & Microservices',
    badge: 'Datheon AI Systems Internship · Grade A+ (8.7/10)',
    tagline: 'Production-Grade Asynchronous FastAPI Backend Suite, JWT/RBAC Security & Containerized Microservice.',
    problem: 'Synchronous backend frameworks struggle with latency and concurrent I/O under microservice architectures, demanding robust asynchronous patterns and strict security boundaries.',
    solution: 'Designed and implemented three production backend milestones evaluated by Datheon\'s Academic & Talent Directorate, earning an A+ Distinction for architectural cleanliness and test coverage.',
    architecture: '• Task 1 — BookStore REST API: Asynchronous CRUD endpoints powered by FastAPI and Pydantic v2 schemas, strict type enforcement, query-level filters (author, genre, max_price), and Swagger documentation.<br>• Task 2 — JWT Authentication & RBAC: Passwords securely hashed with bcrypt; role guards protecting sensitive endpoints (/me, /protected, /admin/users); cryptographic JWT validation with 30-min expirations.<br>• Task 3/4 — Notification Microservice: Non-blocking asynchronous email processing using FastAPI BackgroundTasks, job state monitoring (queued, sending, sent, failed), client-IP rate limiting (slowapi, 5 req/min, HTTP 429), and multi-stage Docker containerization.',
    tech: ['FastAPI', 'Python 3.10+', 'Pydantic v2', 'JWT', 'bcrypt', 'slowapi', 'Docker', 'BackgroundTasks', 'Swagger/OpenAPI'],
    github: 'https://github.com/Navjeet1605-sys/Datheon_Python_-_FastAPI_Backend_Development_Internship',
    demo: null
  },
  'campus-finder': {
    title: 'CampusFinder — College Lost & Found Portal',
    badge: 'Full-Stack Campus Utility · Live Deployment',
    tagline: 'Real-Time College Lost & Found Portal with Domain-Locked Authentication & Direct Ownership Verification.',
    problem: 'College students frequently misplace items across campus, while existing notice boards and WhatsApp groups have poor reach, no verification, and lack organized search.',
    solution: 'Engineered a modern web portal for MGM College of Engineering and Technology students, requiring official @coet.in credentials and offering secret verification hints before item handover.',
    architecture: '• Front-End: Modern React 19 single-page app built with TypeScript, Vite, and Tailwind CSS.<br>• Database & Storage: Supabase PostgreSQL database with row-level security and image storage bucket.<br>• Institutional Gatekeeping: Restricted email registration strictly to @coet.in domains with 10-digit mobile verification.<br>• Verification System: Secret verification hints and direct student-to-student messaging to prove item ownership before physical exchange.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Row Level Security'],
    github: 'https://github.com/Navjeet1605-sys/Campus-Finder',
    demo: null
  },
  'library-assistant': {
    title: 'Smart Library Assistant & Conversational Engine',
    badge: 'Conversational AI & Search',
    tagline: 'Natural Language Book Recommendation, Inventory Querying & Catalog Navigation System.',
    problem: 'Traditional library catalog databases require rigid keyword queries, making exploratory book search frustrating for students.',
    solution: 'Developed an intelligent assistant in Python that interprets conversational intent, extracts subject keywords, and queries library catalog databases with contextual suggestions.',
    architecture: '• NLP Parsing Pipeline: Tokenization and entity extraction to capture title, author, and thematic topics.<br>• Database Layer: SQLite indexing supporting fast full-text querying and category lookups.<br>• Recommendation Logic: Contextual similarity scoring suggesting related academic texts and papers.',
    tech: ['Python', 'NLP', 'SQLite', 'Flask', 'Prompt Engineering'],
    github: 'https://github.com/Navjeet1605-sys',
    demo: null
  }
};

window.openProjectModal = function(projectId) {
  const data = projectModalData[projectId];
  if (!data) return;

  const overlay = document.getElementById('projectModalOverlay');
  const modalContent = document.getElementById('projectModalBody');
  if (!overlay || !modalContent) return;

  modalContent.innerHTML = `
    <span class="modal-badge">${data.badge}</span>
    <h3 class="modal-title">${data.title}</h3>
    <p style="color: var(--lilac); font-family: var(--mono); font-size: 0.85rem; margin-top: 4px;">${data.tagline}</p>
    
    <div class="modal-body">
      <div class="modal-sec-box">
        <h4>⚡ The Problem & Context</h4>
        <p>${data.problem}</p>
      </div>

      <div class="modal-sec-box">
        <h4>💡 Solution & My Engineering Contribution</h4>
        <p>${data.solution}</p>
      </div>

      <div class="modal-sec-box">
        <h4>🏛️ System Architecture & Key Capabilities</h4>
        <div style="line-height: 1.7;">${data.architecture}</div>
      </div>

      <div class="modal-sec-box">
        <h4>🛠️ Technologies & Tools Applied</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
          ${data.tech.map(t => `<span class="skill-chip primary-tech">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="modal-footer">
      ${data.github ? `<a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">View on GitHub ↗</a>` : ''}
      ${data.demo ? `<a href="${data.demo}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Live Demo / Docs ↗</a>` : ''}
      <button onclick="closeProjectModal()" class="btn btn-ghost btn-sm" style="margin-left: auto;">Close Window</button>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const overlay = document.getElementById('projectModalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Modal escape and backdrop listeners
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeProjectModal();
});
const modalOverlay = document.getElementById('projectModalOverlay');
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) window.closeProjectModal();
  });
}

// ---------- Copy Email to Clipboard with Toast ----------
window.copyEmailToClipboard = function() {
  const email = 'getjeet16@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(showToast);
  } else {
    // Fallback
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast();
  }

  function showToast() {
    let toast = document.getElementById('copyToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'copyToast';
      toast.className = 'toast-notice';
      toast.innerHTML = '<span>📋</span> <strong>Email copied:</strong> getjeet16@gmail.com';
      document.body.appendChild(toast);
    }
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
};

// ---------- Mobile Navigation Toggle ----------
(function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.querySelector('.navlinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
      toggleBtn.textContent = isExpanded ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.textContent = '☰';
      });
    });
  }
})();

// ---------- Dynamic ScrollSpy Navigation ----------
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navlinks a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secTop = sec.offsetTop - 140;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
})();
