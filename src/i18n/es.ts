// ES translations
export const es = {
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    projects: 'Proyectos',
    stack: 'Stack',
    process: 'Proceso',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy Gerardo',
    name: 'Romero Labs',
    tagline: 'Convierto tus ideas en',
    taglineHighlight: 'software real',
    description: 'Desarrollo web apps, SaaS, aplicaciones móviles, CRM y sistemas a medida. Más de 10 proyectos entregados con tecnología de punta.',
    cta: 'Ver Proyectos',
    ctaFiverr: 'Contrátame en Fiverr',
    badge: 'Disponible para proyectos',
  },
  about: {
    label: 'Perfil Profesional',
    title: 'Sobre mí',
    role: 'Desarrollador Full Stack · Integración con IA',
    bio1: 'Soy Técnico Superior en Desarrollo de Software egresado del Instituto Superior de Villa del Rosario (Córdoba, Argentina). Me especializo en la construcción de soluciones completas de software: desde plataformas SaaS multi-tenant y sistemas empresariales hasta aplicaciones móviles nativas.',
    bio2: 'Mi enfoque combina una sólida base de arquitectura e ingeniería de software (Clean Architecture, MVC, Patrones de Diseño, testing automatizado con Playwright) con la integración práctica de Inteligencia Artificial para resolver problemas reales de negocio.',
    degree: 'Técnico Superior en Desarrollo de Software',
    institution: 'Instituto Superior de Villa del Rosario — Córdoba, Argentina',
    pillar1Title: 'Proyectos Entregados',
    pillar1Desc: 'Sistemas SaaS, GovTech y Web Apps funcionando en producción.',
    pillar2Title: 'Integración IA',
    pillar2Desc: 'Modelos multimodales Gemini OCR, Groq API y orquestación multi-agente.',
    pillar3Title: 'Testing Automatizado',
    pillar3Desc: 'Pruebas E2E con Playwright y testing unitario con arquitectura robusta.',
    pillar4Title: 'Desarrollo Móvil',
    pillar4Desc: 'Apps nativas en Kotlin (Jetpack Compose) y multiplataforma en Flutter.',
  },
  services: {
    title: 'Servicios',
    subtitle: '¿Qué puedo construir para vos?',
    items: [
      { title: 'Páginas Web & Landing Pages', desc: 'Sitios modernos, rápidos y optimizados para SEO que convierten visitas en clientes.' },
      { title: 'Web Apps & SaaS', desc: 'Plataformas completas multi-tenant con autenticación, base de datos y lógica de negocio.' },
      { title: 'Apps Móviles', desc: 'Aplicaciones nativas Android (Kotlin) y multiplataforma (Flutter) para iOS y Android.' },
      { title: 'Integración con IA', desc: 'OCR, generación de texto, chatbots y automatizaciones usando Gemini, Groq y OpenAI.' },
      { title: 'CRM & Sistemas a Medida', desc: 'Sistemas de gestión personalizados para tu negocio: ventas, clientes, inventario y más.' },
      { title: 'Dashboards & Paneles Admin', desc: 'Paneles de control con métricas en tiempo real, tablas interactivas y reportes.' },
      { title: 'Catálogos & E-commerce', desc: 'Catálogos digitales y tiendas online para negocios locales con gestión de productos.' },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Trabajos reales, entregados',
    viewDemo: 'Ver Demo',
    viewRepo: 'GitHub',
    requestDemo: 'Pedir Demo por WhatsApp',
    items: [
      {
        name: 'EcoMapa V2.1 — GovTech SaaS',
        desc: 'Suite integral de gestión ambiental para municipios: consola SuperAdmin, portal operativo municipal y app Android nativa en Kotlin con escáner de residuos por IA (Gemini). Arquitectura multi-tenant en Supabase.',
        tags: ['React + Vite', 'TypeScript', 'Kotlin + Compose', 'Supabase', 'Gemini AI', 'Multi-tenant'],
        category: 'saas',
        demoUrl: 'https://eco-mapa-landin-page.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/EcoMapaLandinPage',
        imageKey: 'ecomapa'
      },
      {
        name: 'BarberFlow SaaS',
        desc: 'Plataforma SaaS multi-tenant para barberías. Gestión de turnos, clientes, servicios y pagos. Panel admin por negocio + Super Admin central.',
        tags: ['Next.js', 'Supabase', 'Multi-tenant', 'SaaS'],
        category: 'saas',
        demoUrl: 'https://barber-flow-ai-showcase-git-main-romerogerardos-projects.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/barber-flow-ai-showcase',
        imageKey: 'barberflow'
      },
      {
        name: 'AuraCRM (Web + Mobile)',
        desc: 'CRM completo con pipeline Kanban, gestión de contactos, actividad de ventas y suite de tests automatizados E2E con Playwright. Versión móvil nativa en Kotlin.',
        tags: ['React', 'Supabase', 'Playwright E2E', 'Kotlin', 'CRM'],
        category: 'system',
        demoUrl: 'https://aura-crm-rosy.vercel.app/login',
        repoUrl: 'https://github.com/RomeroGerardo/AuraCrm',
        imageKey: 'auracrm'
      },
      {
        name: 'InvitaMagic',
        desc: 'App de invitaciones digitales con generación de texto por IA (Groq), countdown en tiempo real, confirmación de asistencia y links compartibles por WhatsApp.',
        tags: ['React', 'Groq AI', 'Supabase', 'Framer Motion'],
        category: 'webapp',
        demoUrl: 'https://invita-magic.vercel.app/login',
        repoUrl: 'https://github.com/RomeroGerardo/InvitaMagic',
        imageKey: 'invitamagic'
      },
      {
        name: 'TicketFlow',
        desc: 'Sistema de gestión de gastos con foto de tickets por app móvil, OCR con IA (Gemini) para leer montos automáticamente, y panel de aprobación web.',
        tags: ['Flutter', 'React', 'Gemini OCR', 'Supabase'],
        category: 'mobile',
        demoUrl: 'https://wa.me/543573402221?text=Hola,%20me%20gustar%C3%ADa%20ver%20una%20demo%20de%20TicketFlow',
        imageKey: 'ticketflow'
      },
      {
        name: 'NovaMed SaaS',
        desc: 'SaaS para profesionales de salud. Seguimiento de pacientes con gráficas de métricas vitales, historial clínico y dashboards de evolución.',
        tags: ['React 19', 'TanStack Query', 'Recharts', 'Supabase'],
        category: 'saas',
        demoUrl: 'https://nova-med-rho.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/Nova-Med',
        imageKey: 'novamed'
      },
      {
        name: 'Catálogo Online',
        desc: 'Catálogo digital para comercios locales. Productos, precios y contacto directo por WhatsApp.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogoonlinedemo.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/CatalogoOnline',
        imageKey: 'catalogo_online'
      },
      {
        name: 'Catálogo Repostería',
        desc: 'Catálogo digital especializado para negocios de repostería. Productos, precios y pedidos por WhatsApp.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
        demoUrl: 'https://catalogo-reposteria-demo.vercel.app/',
        repoUrl: 'https://github.com/RomeroGerardo/catalogo_reposteria_demo',
        imageKey: 'catalogo_reposteria'
      },
      {
        name: 'Confianza App',
        desc: 'App móvil (Libreta de Fiar) para almacenes y comercios locales. Gestión de créditos y fiados por cliente con historial de pagos.',
        tags: ['Mobile', 'Kotlin', 'Android', 'Negocio Local'],
        category: 'mobile',
        demoUrl: 'https://wa.me/543573402221?text=Hola,%20me%20gustar%C3%ADa%20ver%20una%20demo%20de%20Confianza%20App',
        repoUrl: 'https://github.com/RomeroGerardo/AuraCrmMobile',
        imageKey: 'confianza'
      },
    ],
    filters: {
      all: 'Todos',
      saas: 'SaaS',
      webapp: 'Web App',
      mobile: 'Mobile',
      system: 'Sistemas',
    },
  },
  stack: {
    title: 'Stack Tecnológico',
    subtitle: 'Las herramientas con las que trabajo',
  },
  process: {
    title: 'Mi Proceso',
    subtitle: 'Cómo trabajo con cada cliente',
    steps: [
      { num: '01', title: 'Reunión Inicial', desc: 'Entendemos tu idea, necesidades y objetivos. Sin costo, sin compromiso.' },
      { num: '02', title: 'Propuesta & Plan', desc: 'Armamos un plan de desarrollo claro con etapas, tiempos y presupuesto.' },
      { num: '03', title: 'Desarrollo Ágil', desc: 'Trabajo en sprints cortos con entregas parciales para que veas el avance.' },
      { num: '04', title: 'Entrega & Soporte', desc: 'Deploy en producción, capacitación y soporte post-entrega incluido.' },
    ],
  },
  contact: {
    title: 'Trabajemos Juntos',
    subtitle: '¿Tenés un proyecto en mente?',
    desc: 'Contame tu idea y te respondo en menos de 24 horas con una propuesta.',
    fiverr: 'Ver perfil en Fiverr',
    whatsapp: 'Escribir por WhatsApp',
    email: 'Enviar Email',
    available: '✅ Disponible para nuevos proyectos',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    made: 'Hecho con ❤️ en Argentina',
  },
};

export type Translations = typeof es;
