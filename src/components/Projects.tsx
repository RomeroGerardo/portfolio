import type { Translations } from '../i18n/es';
import mockupBarberflow from '../assets/mockup_barberflow.png';
import mockupInvitamagic from '../assets/mockup_invitamagic.png';
import mockupTicketflow from '../assets/mockup_ticketflow.png';
import mockupVitaltrack from '../assets/mockup_vitaltrack.png';
import mockupAuracrm from '../assets/mockup_auracrm.png';
import mockupGlowbook from '../assets/mockup_glowbook.png';
import './Projects.css';

interface Props { t: Translations; }

// Map project index to mockup image (for those that have one)
const mockupImages: Record<number, string> = {
  0: mockupBarberflow,
  1: mockupInvitamagic,
  2: mockupTicketflow,
  3: mockupVitaltrack,
  4: mockupAuracrm,
  5: mockupGlowbook,
};

// Gradient backgrounds for projects without mockups
const gradientBg: Record<number, string> = {
  4: 'linear-gradient(135deg, #1a0533 0%, #0d1a33 100%)',  // AuraCRM
  5: 'linear-gradient(135deg, #0d1a1a 0%, #1a1a0d 100%)',  // GlowBook
  6: 'linear-gradient(135deg, #001a33 0%, #0d0d1a 100%)',  // Catalogos
  7: 'linear-gradient(135deg, #1a1a0d 0%, #0d001a 100%)',  // Libreta
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
            const originalIndex = t.projects.items.findIndex(p => p.name === project.name);
            const hasMockup = mockupImages[originalIndex] !== undefined;

            return (
              <div key={project.name} className={`glass-card projects__card reveal reveal-delay-${(i % 3) + 1}`}>
                {/* Project image */}
                <div
                  className="projects__img-wrapper"
                  style={!hasMockup ? { background: gradientBg[originalIndex] } : undefined}
                >
                  {hasMockup ? (
                    <img
                      src={mockupImages[originalIndex]}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
