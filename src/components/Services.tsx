import type { Translations } from '../i18n/es';
import './Services.css';

interface Props { t: Translations; }

const serviceIcons = [
  // Globe / website
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  // Layers / SaaS
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>,
  // Smartphone / Mobile
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>,
  // CPU / AI
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="6" height="6"/><rect x="2" y="2" width="20" height="20" rx="2"/>
    <line x1="9" y1="2" x2="9" y2="9"/><line x1="15" y1="2" x2="15" y2="9"/>
    <line x1="9" y1="15" x2="9" y2="22"/><line x1="15" y1="15" x2="15" y2="22"/>
    <line x1="2" y1="9" x2="9" y2="9"/><line x1="2" y1="15" x2="9" y2="15"/>
    <line x1="15" y1="9" x2="22" y2="9"/><line x1="15" y1="15" x2="22" y2="15"/>
  </svg>,
  // Users / CRM
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // Bar chart / Dashboard
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>,
  // Shopping bag / E-commerce
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>,
];

export default function Services({ t }: Props) {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="services__header reveal">
          <p className="section-label">{t.services.title}</p>
          <h2 className="section-title">{t.services.subtitle}</h2>
        </div>

        <div className="services__grid">
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className={`glass-card services__card reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="services__icon">
                {serviceIcons[i]}
              </div>
              <h3 className="services__card-title">{item.title}</h3>
              <p className="services__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
