import type { Translations } from '../i18n/es';
import './Contact.css';

interface Props { t: Translations; }

export default function Contact({ t }: Props) {
  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="contact__card glass-card reveal">
          {/* Glow bg */}
          <div className="contact__glow contact__glow--violet" />
          <div className="contact__glow contact__glow--blue" />

          <div className="contact__content">
            <p className="contact__available">{t.contact.available}</p>
            <p className="section-label">{t.contact.title}</p>
            <h2 className="section-title">{t.contact.subtitle}</h2>
            <p className="contact__desc">{t.contact.desc}</p>

            <div className="contact__actions">
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 9.5h-1.3c-.3 0-.5.1-.7.2-.3-2.5-2.3-4.5-4.8-4.7V3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5h-1V3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5c-2.5.2-4.5 2.2-4.8 4.7-.2-.1-.4-.2-.7-.2H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h1.3c.5 1.8 1.9 3.2 3.7 3.7V20c0 .3.2.5.5.5s.5-.2.5-.5v-1.8h1V20c0 .3.2.5.5.5s.5-.2.5-.5v-1.8c1.8-.5 3.2-1.9 3.7-3.7H14v1.5c0 .3.2.5.5.5s.5-.2.5-.5V14h1v1.5c0 .3.2.5.5.5s.5-.2.5-.5V14H23c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5z"/>
                </svg>
                {t.contact.fiverr}
              </a>

              <a
                href="https://wa.me/543573402221"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.123 1.528 5.86L.057 23.428c-.064.24.002.495.173.668.17.174.425.24.668.174l5.643-1.471A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-5.017-1.381l-.36-.214-3.728.972.992-3.649-.234-.373A9.794 9.794 0 0 1 2.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
                </svg>
                {t.contact.whatsapp}
              </a>

              <a
                href="mailto:romero.gerardo.ds@gmail.com"
                className="btn btn-outline contact__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
