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
