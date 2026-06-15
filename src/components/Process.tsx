import type { Translations } from '../i18n/es';
import './Process.css';

interface Props { t: Translations; }

const stepIcons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>,
];

export default function Process({ t }: Props) {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="process__header reveal">
          <p className="section-label">{t.process.title}</p>
          <h2 className="section-title">{t.process.subtitle}</h2>
        </div>

        <div className="process__steps">
          {t.process.steps.map((step, i) => (
            <div key={step.num} className={`process__step reveal reveal-delay-${i + 1}`}>
              {/* Connector line */}
              {i < t.process.steps.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}

              <div className="process__step-icon">
                {stepIcons[i]}
              </div>
              <div className="process__step-num">{step.num}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
