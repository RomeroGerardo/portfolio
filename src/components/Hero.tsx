import { useEffect, useRef } from 'react';
import type { Translations } from '../i18n/es';
import './Hero.css';

// Profile photo — place your photo as src/assets/profile.jpg
let profilePhoto: string = '';
try {
  profilePhoto = new URL('../assets/profile.jpg', import.meta.url).href;
} catch {
  profilePhoto = '';
}

interface Props { t: Translations; }

export default function Hero({ t }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="inicio">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Background glows */}
      <div className="hero__glow hero__glow--violet" />
      <div className="hero__glow hero__glow--blue" />

      <div className="container hero__container">
        {/* Left: text */}
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot" />
            {t.hero.badge}
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            <span className="hero__greeting">{t.hero.greeting}</span>
            <span className="hero__tagline">
              {t.hero.tagline}{' '}
              <span className="gradient-text">{t.hero.taglineHighlight}</span>
            </span>
          </h1>

          <p className="hero__desc reveal reveal-delay-2">
            {t.hero.description}
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <a href="#proyectos" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              {t.hero.cta}
            </a>
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 9.5h-1.3c-.3 0-.5.1-.7.2-.3-2.5-2.3-4.5-4.8-4.7V3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5h-1V3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5c-2.5.2-4.5 2.2-4.8 4.7-.2-.1-.4-.2-.7-.2H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h1.3c.5 1.8 1.9 3.2 3.7 3.7V20c0 .3.2.5.5.5s.5-.2.5-.5v-1.8h1V20c0 .3.2.5.5.5s.5-.2.5-.5v-1.8c1.8-.5 3.2-1.9 3.7-3.7H14v1.5c0 .3.2.5.5.5s.5-.2.5-.5V14h1v1.5c0 .3.2.5.5.5s.5-.2.5-.5V14H23c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5z"/>
              </svg>
              {t.hero.ctaFiverr}
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats reveal reveal-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-num">10+</span>
              <span className="hero__stat-label">{t.hero.greeting.includes('Gerardo') ? 'Proyectos entregados' : 'Projects delivered'}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">3+</span>
              <span className="hero__stat-label">{t.hero.greeting.includes('Gerardo') ? 'Años de experiencia' : 'Years of experience'}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">7</span>
              <span className="hero__stat-label">{t.hero.greeting.includes('Gerardo') ? 'Tecnologías' : 'Technologies'}</span>
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero__photo-wrapper reveal reveal-delay-2">
          <div className="hero__photo-ring" />
          <div className="hero__photo-ring hero__photo-ring--2" />
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Gerardo Romero — Romero Labs"
              className="hero__photo"
            />
          ) : (
            <div className="hero__photo hero__photo--initials">
              <span>GR</span>
            </div>
          )}
          <div className="hero__photo-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Full-Stack Dev
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
