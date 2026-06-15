import type { Translations } from '../i18n/es';
import './TechStack.css';

interface Props { t: Translations; }

const technologies = [
  { name: 'React', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', color: '#ffffff', icon: '▲' },
  { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
  { name: 'Flutter', color: '#54c5f8', icon: '🐦' },
  { name: 'Kotlin', color: '#7f52ff', icon: 'K' },
  { name: 'Supabase', color: '#3ecf8e', icon: '⚡' },
  { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
  { name: 'Tailwind CSS', color: '#38bdf8', icon: '🌊' },
  { name: 'shadcn/ui', color: '#a78bfa', icon: '✦' },
  { name: 'Vite', color: '#646cff', icon: '⚡' },
  { name: 'Zustand', color: '#f97316', icon: '🐻' },
  { name: 'TanStack Query', color: '#ef4444', icon: '🔴' },
  { name: 'Groq AI', color: '#00c853', icon: '🤖' },
  { name: 'Gemini', color: '#4285f4', icon: '♊' },
  { name: 'Framer Motion', color: '#e362c2', icon: '🎭' },
  { name: 'Playwright', color: '#2ead33', icon: '🎭' },
  { name: 'Vercel', color: '#ffffff', icon: '▲' },
  { name: 'Android Studio', color: '#3ddc84', icon: '🤖' },
];

export default function TechStack({ t }: Props) {
  return (
    <section className="section techstack" id="stack">
      <div className="container">
        <div className="techstack__header reveal">
          <p className="section-label">{t.stack.title}</p>
          <h2 className="section-title">{t.stack.subtitle}</h2>
        </div>

        <div className="techstack__grid">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`glass-card techstack__item reveal reveal-delay-${(i % 5) + 1}`}
              style={{ '--tech-color': tech.color } as React.CSSProperties}
            >
              <span className="techstack__icon">{tech.icon}</span>
              <span className="techstack__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
