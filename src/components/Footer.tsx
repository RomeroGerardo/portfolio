import type { Translations } from '../i18n/es';
import './Footer.css';
import logoImg from '../assets/logo.png';

interface Props { t: Translations; }

export default function Footer({ t }: Props) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <img src={logoImg} alt="Romero Labs" className="footer__logo-img" />
          <span className="footer__logo-text">Romero Labs</span>
        </div>

        <p className="footer__rights">
          © {new Date().getFullYear()} Romero Labs. {t.footer.rights}
        </p>

        <p className="footer__made">{t.footer.made}</p>
      </div>
    </footer>
  );
}
