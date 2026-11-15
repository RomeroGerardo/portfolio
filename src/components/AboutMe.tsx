import type { Translations } from '../i18n/es';
import './AboutMe.css';

interface Props { t: Translations; }

export default function AboutMe({ t }: Props) {
  return (
    <section className="section about" id="sobre-mi">
      <div className="container">
        <div className="about__header reveal">
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div className="about__grid">
          {/* Left: Bio card */}
          <div className="glass-card about__bio-card reveal reveal-delay-1">
            <h3 className="about__subtitle">{t.about.role}</h3>
            <p className="about__text">{t.about.bio1}</p>
            <p className="about__text">{t.about.bio2}</p>
            
            <div className="about__education">
              <div className="about__edu-icon">🎓</div>
              <div>
                <h4 className="about__edu-title">{t.about.degree}</h4>
                <p className="about__edu-institution">{t.about.institution}</p>
              </div>
            </div>

            <div className="about__links">
              <a 
                href="https://github.com/RomeroGerardo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline about__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/gerardo-jesus-romero-0a304542b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline about__btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Pillars / Stats */}
          <div className="about__pillars">
            <div className="glass-card about__pillar reveal reveal-delay-2">
              <div className="about__pillar-num">10+</div>
              <h4 className="about__pillar-title">{t.about.pillar1Title}</h4>
              <p className="about__pillar-desc">{t.about.pillar1Desc}</p>
            </div>

            <div className="glass-card about__pillar reveal reveal-delay-2">
              <div className="about__pillar-num">AI</div>
              <h4 className="about__pillar-title">{t.about.pillar2Title}</h4>
              <p className="about__pillar-desc">{t.about.pillar2Desc}</p>
            </div>

            <div className="glass-card about__pillar reveal reveal-delay-3">
              <div className="about__pillar-num">E2E</div>
              <h4 className="about__pillar-title">{t.about.pillar3Title}</h4>
              <p className="about__pillar-desc">{t.about.pillar3Desc}</p>
            </div>

            <div className="glass-card about__pillar reveal reveal-delay-3">
              <div className="about__pillar-num">📱</div>
              <h4 className="about__pillar-title">{t.about.pillar4Title}</h4>
              <p className="about__pillar-desc">{t.about.pillar4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
