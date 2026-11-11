import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 34);

    // Lighting
    scene.add(new THREE.AmbientLight(0x2a2440, 1.4));
    const lightA = new THREE.PointLight(0x8b5cf6, 46, 100);
    const lightB = new THREE.PointLight(0x4d7cff, 36, 100);
    const lightC = new THREE.PointLight(0xd8c8ff, 10, 60);
    scene.add(lightA, lightB, lightC);

    // Glow halo
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
    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: makeGlowTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    glowSprite.scale.set(42, 42, 1);
    scene.add(glowSprite);

    // Core Icosahedron
    const coreDetail = 4;
    const coreRadius = 8.6;
    const coreGeo = new THREE.IcosahedronGeometry(coreRadius, coreDetail);
    const basePositions = coreGeo.attributes.position.array.slice();
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x2a1f52,
      emissive: 0x4a2f9e,
      emissiveIntensity: 0.4,
      roughness: 0.25,
      metalness: 0.15,
      transparent: true,
      opacity: 0.64,
      side: THREE.DoubleSide
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xd8c8ff, wireframe: true, transparent: true, opacity: 0.1 });
    core.add(new THREE.Mesh(coreGeo, wireMat));

    // Orbital rings
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
      return { mesh, speed: def.speed };
    });

    // Crystal shards
    const shardGroup = new THREE.Group();
    scene.add(shardGroup);
    const SHARD_COUNT = 12;
    const shards = [];
    for (let i = 0; i < SHARD_COUNT; i++) {
      const g = new THREE.OctahedronGeometry(1, 0);
      const m = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0x8b5cf6 : 0x4d7cff,
        emissive: i % 2 === 0 ? 0x6a3fe0 : 0x3f5fe0,
        emissiveIntensity: 0.65,
        roughness: 0.15,
        metalness: 0.1,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(g, m);
      mesh.scale.set(0.55 + Math.random() * 0.5, 1.7 + Math.random() * 1.1, 0.55 + Math.random() * 0.5);
      const orbitRadius = 14 + Math.random() * 15;
      const orbitSpeed = 0.05 + Math.random() * 0.09;
      const orbitTilt = Math.random() * Math.PI;
      const orbitOffset = Math.random() * Math.PI * 2;
      const spinSpeed = 0.3 + Math.random() * 0.6;
      shards.push({ mesh, orbitRadius, orbitSpeed, orbitTilt, orbitOffset, spinSpeed });
      shardGroup.add(mesh);
    }

    // Spiral Galaxy Backdrop
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

    let scrollProgress = 0;
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let mouseX = 0, mouseY = 0, tiltX = 0, tiltY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      tiltX += (mouseY * 0.4 - tiltX) * 0.05;
      tiltY += (mouseX * 0.5 - tiltY) * 0.05;
      scene.rotation.x = tiltX;
      scene.rotation.y = tiltY + t * 0.05;

      // Parallax scroll effect
      camera.position.y = -scrollProgress * 25;
      camera.position.z = 34 + scrollProgress * 15;

      // Morph core positions
      const pos = coreGeo.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];
        const noise = (Math.sin(bx * 0.5 + t) + Math.cos(by * 0.5 - t * 0.8)) * 0.35;
        pos[i] = bx * (1 + noise * 0.08);
        pos[i + 1] = by * (1 + noise * 0.08);
        pos[i + 2] = bz * (1 + noise * 0.08);
      }
      coreGeo.attributes.position.needsUpdate = true;

      // Rings spin
      rings.forEach(r => {
        r.mesh.rotation.z += r.speed * 0.03;
      });

      // Shards orbit
      shards.forEach(s => {
        const angle = t * s.orbitSpeed + s.orbitOffset;
        s.mesh.position.x = Math.cos(angle) * s.orbitRadius;
        s.mesh.position.z = Math.sin(angle) * s.orbitRadius;
        s.mesh.position.y = Math.sin(angle * 2 + s.orbitTilt) * 4;
        s.mesh.rotation.x += s.spinSpeed * 0.02;
        s.mesh.rotation.y += s.spinSpeed * 0.03;
      });

      galaxy.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
}

