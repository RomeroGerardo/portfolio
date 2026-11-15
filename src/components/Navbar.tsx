import { useState, useEffect } from 'react';
import type { Translations } from '../i18n/es';
import type { Lang } from '../App';
import logoImg from '../assets/logo.png';
import './Navbar.css';

interface Props {
  t: Translations;
  lang: Lang;
  toggleLang: () => void;
}

export default function Navbar({ t, lang, toggleLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: t.nav.about },
    { href: '#servicios', label: t.nav.services },
    { href: '#proyectos', label: t.nav.projects },
    { href: '#stack', label: t.nav.stack },
    { href: '#proceso', label: t.nav.process },
    { href: '#contacto', label: t.nav.contact },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#inicio" className="navbar__logo">
          <img src={logoImg} alt="Romero Labs" className="navbar__logo-img" />
          <span className="navbar__logo-text">Romero Labs</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="navbar__actions">
          <a
            href="https://github.com/RomeroGerardo"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__github-link"
            aria-label="Perfil de GitHub"
            title="GitHub"
            style={{ display: 'inline-flex', alignItems: 'center', color: '#94a3b8', transition: 'color 0.2s', padding: '0.4rem' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <button
            className="navbar__lang-toggle"
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span className={lang === 'es' ? 'active' : ''}>ES</span>
            <span className="navbar__lang-divider">|</span>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>

          <a
            href="#contacto"
            className="btn btn-primary navbar__cta"
          >
            {lang === 'es' ? 'Contactar' : 'Contact'}
          </a>

          {/* Mobile hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
        <button className="navbar__lang-toggle" onClick={toggleLang}>
          <span className={lang === 'es' ? 'active' : ''}>ES</span>
          <span className="navbar__lang-divider">|</span>
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
        </button>
      </div>
    </nav>
  );
}
