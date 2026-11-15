// EN translations
import type { Translations } from './es';

export const en: Translations = {
  nav: {
    about: 'About me',
    services: 'Services',
    projects: 'Projects',
    stack: 'Stack',
    process: 'Process',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm Gerardo",
    name: 'Romero Labs',
    tagline: 'I turn your ideas into',
    taglineHighlight: 'real software',
    description: 'I build web apps, SaaS platforms, mobile apps, CRMs and custom systems. 10+ real projects delivered with cutting-edge technology.',
    cta: 'View Projects',
    ctaFiverr: 'Hire me on Fiverr',
    badge: 'Available for projects',
  },
  about: {
    label: 'Professional Profile',
    title: 'About me',
    role: 'Full Stack Developer · AI Integration',
    bio1: 'I am a Software Development Technician graduated from Instituto Superior de Villa del Rosario (Córdoba, Argentina). I specialize in building complete software solutions: from multi-tenant SaaS platforms and enterprise systems to native mobile apps.',
    bio2: 'My approach combines a solid software engineering and architecture foundation (Clean Architecture, MVC, Design Patterns, automated E2E testing with Playwright) with practical AI integration to solve real business challenges.',
    degree: 'Higher Technician in Software Development',
    institution: 'Instituto Superior de Villa del Rosario — Córdoba, Argentina',
    pillar1Title: 'Delivered Projects',
    pillar1Desc: 'SaaS systems, GovTech and Web Apps actively running in production.',
    pillar2Title: 'AI Integration',
    pillar2Desc: 'Multimodal Gemini OCR, Groq API and multi-agent workflow orchestration.',
    pillar3Title: 'Automated Testing',
    pillar3Desc: 'E2E test suites with Playwright and robust unit testing patterns.',
    pillar4Title: 'Mobile Development',
    pillar4Desc: 'Native Android apps in Kotlin (Jetpack Compose) and cross-platform Flutter.',
  },
  services: {
    title: 'Services',
    subtitle: 'What can I build for you?',
    items: [
      { title: 'Websites & Landing Pages', desc: 'Modern, fast, SEO-optimized sites that convert visitors into customers.' },
      { title: 'Web Apps & SaaS', desc: 'Full-stack multi-tenant platforms with authentication, database and business logic.' },
      { title: 'Mobile Apps', desc: 'Native Android apps (Kotlin) and cross-platform apps (Flutter) for iOS & Android.' },
      { title: 'AI Integration', desc: 'OCR, text generation, chatbots and automation using Gemini, Groq and OpenAI.' },
      { title: 'CRM & Custom Systems', desc: 'Personalized management systems for your business: sales, clients, inventory and more.' },
      { title: 'Dashboards & Admin Panels', desc: 'Control panels with real-time metrics, interactive tables and reports.' },
      { title: 'Catalogs & E-commerce', desc: 'Digital catalogs and online stores for local businesses with product management.' },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Real work, delivered',
    viewDemo: 'View Demo',
    viewRepo: 'GitHub',
    requestDemo: 'Request Demo via WhatsApp',
    items: [
      {
        name: 'EcoMapa V2.1 — GovTech SaaS',
        desc: 'Comprehensive municipal environmental management suite: SuperAdmin console, municipal operational portal and native Kotlin Android app with AI-powered waste classification (Gemini). Multi-tenant architecture on Supabase.',
        tags: ['React + Vite', 'TypeScript', 'Kotlin + Compose', 'Supabase', 'Gemini AI', 'Multi-tenant'],
        category: 'saas',
        demoUrl: 'https://eco-mapa-landin-page.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/EcoMapaLandinPage',
        imageKey: 'ecomapa'
      },
      {
        name: 'BarberFlow SaaS',
        desc: 'Multi-tenant SaaS platform for barbershops. Appointment booking, client management, services and payments. Per-business admin panel + central Super Admin.',
        tags: ['Next.js', 'Supabase', 'Multi-tenant', 'SaaS'],
        category: 'saas',
        demoUrl: 'https://barber-flow-ai-showcase-git-main-romerogerardos-projects.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/barber-flow-ai-showcase',
        imageKey: 'barberflow'
      },
      {
        name: 'AuraCRM (Web + Mobile)',
        desc: 'Full-featured CRM with Kanban pipeline, contact and company management, sales activity tracking and automated E2E test suite with Playwright. Native Kotlin mobile app.',
        tags: ['React', 'Supabase', 'Playwright E2E', 'Kotlin', 'CRM'],
        category: 'system',
        demoUrl: 'https://aura-crm-rosy.vercel.app/login',
        repoUrl: 'https://github.com/RomeroGerardo/AuraCrm',
        imageKey: 'auracrm'
      },
      {
        name: 'InvitaMagic',
        desc: 'Digital invitation app with AI-powered text generation (Groq), real-time countdown, RSVP tracking and shareable links via WhatsApp.',
        tags: ['React', 'Groq AI', 'Supabase', 'Framer Motion'],
        category: 'webapp',
        demoUrl: 'https://invita-magic.vercel.app/login',
        repoUrl: 'https://github.com/RomeroGerardo/InvitaMagic',
        imageKey: 'invitamagic'
      },
      {
        name: 'TicketFlow',
        desc: 'Expense management system with mobile receipt scanning, AI-powered OCR (Gemini) to auto-read amounts, and web approval panel.',
        tags: ['Flutter', 'React', 'Gemini OCR', 'Supabase'],
        category: 'mobile',
        demoUrl: 'https://wa.me/543573402221?text=Hello,%20I%20would%20like%20to%20see%20a%20demo%20of%20TicketFlow',
        imageKey: 'ticketflow'
      },
      {
        name: 'NovaMed SaaS',
        desc: 'SaaS for health professionals. Patient tracking with vital metrics charts, clinical history and evolution dashboards.',
        tags: ['React 19', 'TanStack Query', 'Recharts', 'Supabase'],
        category: 'saas',
        demoUrl: 'https://nova-med-rho.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/Nova-Med',
        imageKey: 'novamed'
      },
      {
        name: 'Online Catalog',
        desc: 'Digital catalogs for local businesses. Products, prices and direct WhatsApp contact.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogoonlinedemo.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/CatalogoOnline',
        imageKey: 'catalogo_online'
      },
      {
        name: 'Bakery Catalog',
        desc: 'Specialized digital catalog for bakery businesses. Products, prices and orders via WhatsApp.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogo-reposteria-demo.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/catalogo_reposteria_demo',
        imageKey: 'catalogo_reposteria'
      },
      {
        name: 'Confianza App',
        desc: 'Mobile app (Credit Ledger) for small stores and shops. Customer credit management with payment history tracking.',
        tags: ['Mobile', 'Kotlin', 'Android', 'Local Business'],
        category: 'mobile',
        demoUrl: 'https://wa.me/543573402221?text=Hello,%20I%20would%20like%20to%20see%20a%20demo%20of%20Confianza%20App',
        repoUrl: 'https://github.com/RomeroGerardo/AuraCrmMobile',
        imageKey: 'confianza'
      },
    ],
    filters: {
      all: 'All',
      saas: 'SaaS',
      webapp: 'Web App',
      mobile: 'Mobile',
      system: 'Systems',
    },
  },
  stack: {
    title: 'Tech Stack',
    subtitle: 'The tools I build with',
  },
  process: {
    title: 'My Process',
    subtitle: 'How I work with every client',
    steps: [
      { num: '01', title: 'Initial Call', desc: 'We understand your idea, needs and goals. Free, no commitment.' },
      { num: '02', title: 'Proposal & Plan', desc: 'We draft a clear roadmap with milestones, timelines and budget.' },
      { num: '03', title: 'Agile Sprints', desc: 'I work in short sprints with continuous demos so you see progress.' },
      { num: '04', title: 'Delivery & Support', desc: 'Production deployment, walkthrough and post-delivery support included.' },
    ],
  },
  contact: {
    title: "Let's Work Together",
    subtitle: 'Have a project in mind?',
    desc: 'Tell me about your idea and I will get back within 24 hours with a proposal.',
    fiverr: 'View Fiverr Profile',
    whatsapp: 'Text on WhatsApp',
    email: 'Send Email',
    available: '✅ Available for new projects',
  },
  footer: {
    rights: 'All rights reserved.',
    made: 'Made with ❤️ in Argentina',
  },
};
