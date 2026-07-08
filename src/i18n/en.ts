// EN translations
import type { Translations } from './es';

export const en: Translations = {
  nav: {
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
    requestDemo: 'Request Demo via WhatsApp',
    items: [
      {
        name: 'BarberFlow SaaS',
        desc: 'Multi-tenant SaaS platform for barbershops. Appointment booking, client management, services and payments. Per-business admin panel + central Super Admin.',
        tags: ['Next.js', 'Supabase', 'Multi-tenant', 'SaaS'],
        category: 'saas',
        demoUrl: 'https://barber-flow-ai-showcase-git-main-romerogerardos-projects.vercel.app/',
        imageKey: 'barberflow'
      },
      {
        name: 'InvitaMagic',
        desc: 'Digital invitation app with AI-powered text generation (Groq), real-time countdown, RSVP tracking and shareable links via WhatsApp.',
        tags: ['React', 'Groq AI', 'Supabase', 'Framer Motion'],
        category: 'webapp',
        demoUrl: 'https://invita-magic.vercel.app/login',
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
        imageKey: 'novamed'
      },
      {
        name: 'AuraCRM',
        desc: 'Full-featured CRM with Kanban pipeline, contact and company management, sales activity tracking and E2E automated tests with Playwright.',
        tags: ['React', 'Supabase', 'Playwright E2E', 'CRM'],
        category: 'system',
        demoUrl: 'https://aura-crm-rosy.vercel.app/login',
        imageKey: 'auracrm'
      },
      {
        name: 'Online Catalog',
        desc: 'Digital catalogs for local businesses. Products, prices and direct WhatsApp contact.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogoonlinedemo.vercel.app/',
        imageKey: 'catalogo_online'
      },
      {
        name: 'Bakery Catalog',
        desc: 'Specialized digital catalog for bakery businesses. Products, prices and orders via WhatsApp.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogo-reposteria-demo.vercel.app/',
        imageKey: 'catalogo_reposteria'
      },
      {
        name: 'Confianza App',
        desc: 'Mobile app (Credit Ledger) for small stores and shops. Customer credit management with payment history tracking.',
        tags: ['Mobile', 'Kotlin', 'Android', 'Local Business'],
        category: 'mobile',
        demoUrl: 'https://wa.me/543573402221?text=Hello,%20I%20would%20like%20to%20see%20a%20demo%20of%20Confianza%20App',
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
    subtitle: 'The tools I work with',
  },
  process: {
    title: 'My Process',
    subtitle: 'How I work with every client',
    steps: [
      { num: '01', title: 'Discovery Call', desc: 'We understand your idea, needs and goals. Free, no commitment.' },
      { num: '02', title: 'Proposal & Plan', desc: 'We build a clear development plan with stages, timelines and budget.' },
      { num: '03', title: 'Agile Development', desc: 'I work in short sprints with partial deliveries so you see progress.' },
      { num: '04', title: 'Launch & Support', desc: 'Production deployment, training and post-launch support included.' },
    ],
  },
  contact: {
    title: "Let's Work Together",
    subtitle: 'Do you have a project in mind?',
    desc: 'Tell me your idea and I will get back to you in less than 24 hours with a proposal.',
    fiverr: 'View Fiverr Profile',
    whatsapp: 'Message on WhatsApp',
    email: 'Send Email',
    available: '✅ Available for new projects',
  },
  footer: {
    rights: 'All rights reserved.',
    made: 'Made with ❤️ in Argentina',
  },
};
