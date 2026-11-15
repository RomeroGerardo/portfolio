import type { Translations } from '../i18n/es';
import mockupEcomapa from '../assets/mockup_ecomapa.png';
import mockupBarberflow from '../assets/mockup_barberflow_real.png';
import mockupInvitamagic from '../assets/mockup_invitamagic.png';
import mockupTicketflow from '../assets/mockup_ticketflow_real.jpeg';
import mockupNovamed from '../assets/mockup_novamed.png';
import mockupAuracrm from '../assets/mockup_auracrm_real.png';
import mockupCatalogoOnline from '../assets/mockup_catalogo_online.png';
import mockupCatalogoReposteria from '../assets/mockup_catalogo_reposteria.png';
import mockupConfianza from '../assets/mockup_confianza.jpeg';
import './Projects.css';

interface Props { t: Translations; }

const mockupImages: Record<string, string> = {
  ecomapa: mockupEcomapa,
  barberflow: mockupBarberflow,
  invitamagic: mockupInvitamagic,
  ticketflow: mockupTicketflow,
  novamed: mockupNovamed,
  auracrm: mockupAuracrm,
  catalogo_online: mockupCatalogoOnline,
  catalogo_reposteria: mockupCatalogoReposteria,
  confianza: mockupConfianza,
};

export default function Projects({ t }: Props) {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <div className="projects__header reveal">
          <p className="section-label">{t.projects.title}</p>
          <h2 className="section-title">{t.projects.subtitle}</h2>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {t.projects.items.map((project, i) => {
            const hasMockup = project.imageKey && mockupImages[project.imageKey] !== undefined;

            return (
              <div key={project.imageKey || i} className={`glass-card projects__card reveal reveal-delay-${(i % 3) + 1}`}>
                {/* Project image */}
                <div className="projects__img-wrapper">
                  {hasMockup ? (
                    <img
                      src={mockupImages[project.imageKey as string]}
                      alt={project.name}
                      className="projects__img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="projects__img-placeholder">
                      <span className="projects__img-initials">
                        {project.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="projects__img-overlay" />
                </div>

                {/* Content */}
                <div className="projects__content">
                  <h3 className="projects__name">{project.name}</h3>
                  <p className="projects__desc">{project.desc}</p>
                  <div className="projects__tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="projects__actions" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '0.825rem', padding: '0.55rem 1.1rem' }}
                      >
                        {project.demoUrl.includes('wa.me') ? t.projects.requestDemo : t.projects.viewDemo}
                      </a>
                    )}

                    {'repoUrl' in project && (project as any).repoUrl && (
                      <a
                        href={(project as any).repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '0.825rem', padding: '0.55rem 1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        {t.projects.viewRepo || 'GitHub'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
