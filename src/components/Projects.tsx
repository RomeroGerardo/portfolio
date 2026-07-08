import type { Translations } from '../i18n/es';
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
              <div key={project.name} className={`glass-card projects__card reveal reveal-delay-${(i % 3) + 1}`}>
                {/* Project image */}
                <div
                  className="projects__img-wrapper"
                >
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
                  
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ marginTop: '1.5rem', alignSelf: 'flex-start', fontSize: '0.875rem', padding: '0.6rem 1.2rem' }}
                    >
                      {project.demoUrl.includes('wa.me') ? t.projects.requestDemo : t.projects.viewDemo}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
