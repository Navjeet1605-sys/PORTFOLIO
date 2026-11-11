import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    let animId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top = `${glowY}px`;
      }

      animId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => ringRef.current?.classList.add('click');
    const handleMouseUp = () => ringRef.current?.classList.remove('click');

    const handleClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 720);
    };

    const setupHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, .interactive-card');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => ringRef.current?.classList.add('hover'));
        target.addEventListener('mouseleave', () => ringRef.current?.classList.remove('hover'));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);
    animId = requestAnimationFrame(animate);

    // Initial listener setup & observe DOM changes for dynamically rendered targets
    setupHoverListeners();
    const observer = new MutationObserver(setupHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow pointer-events-none hidden md:block" />
      <div ref={ringRef} className="cursor-ring pointer-events-none hidden md:block" />
      <div ref={dotRef} className="cursor-dot pointer-events-none hidden md:block" />
    </>
  );
}

