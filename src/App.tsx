import { useState, useEffect, useCallback } from 'react';
import { es } from './i18n/es';
import { en } from './i18n/en';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export type Lang = 'es' | 'en';

function App() {
  const [lang, setLang] = useState<Lang>('es');
  const t = lang === 'es' ? es : en;

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar t={t} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Projects t={t} />
        <TechStack t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
