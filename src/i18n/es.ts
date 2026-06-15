// ES translations
export const es = {
  nav: {
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
    items: [
      {
        name: 'BarberFlow SaaS',
        desc: 'Plataforma SaaS multi-tenant para barberías. Gestión de turnos, clientes, servicios y pagos. Panel admin por negocio + Super Admin central.',
        tags: ['Next.js', 'Supabase', 'Multi-tenant', 'SaaS'],
        category: 'saas',
      },
      {
        name: 'InvitaMagic',
        desc: 'App de invitaciones digitales con generación de texto por IA (Groq), countdown en tiempo real, confirmación de asistencia y links compartibles por WhatsApp.',
        tags: ['React', 'Groq AI', 'Supabase', 'Framer Motion'],
        category: 'webapp',
      },
      {
        name: 'TicketFlow',
        desc: 'Sistema de gestión de gastos con foto de tickets por app móvil, OCR con IA (Gemini) para leer montos automáticamente, y panel de aprobación web.',
        tags: ['Flutter', 'React', 'Gemini OCR', 'Supabase'],
        category: 'mobile',
      },
      {
        name: 'VitalTrack SaaS',
        desc: 'SaaS para profesionales de salud. Seguimiento de pacientes con gráficas de métricas vitales, historial clínico y dashboards de evolución.',
        tags: ['React 19', 'TanStack Query', 'Recharts', 'Supabase'],
        category: 'saas',
      },
      {
        name: 'AuraCRM',
        desc: 'CRM completo con pipeline Kanban, gestión de contactos y empresas, actividad de ventas y tests automatizados E2E con Playwright.',
        tags: ['React', 'Supabase', 'Playwright E2E', 'CRM'],
        category: 'system',
      },
      {
        name: 'GlowBook',
        desc: 'App móvil para estéticas y salones de belleza. Gestión de agenda, servicios, clientes y recordatorios automáticos.',
        tags: ['Flutter', 'Dart', 'Mobile', 'Negocio Local'],
        category: 'mobile',
      },
      {
        name: 'Catálogos Web',
        desc: 'Catálogos digitales para negocios locales: comercios y repostería. Productos, precios y contacto directo por WhatsApp.',
        tags: ['React', 'Responsive', 'WhatsApp', 'Local'],
        category: 'webapp',
      },
      {
        name: 'Libreta de Fiar',
        desc: 'App móvil para almacenes y comercios locales. Gestión de créditos y fiados por cliente con historial de pagos.',
        tags: ['Mobile', 'Kotlin', 'Android', 'Negocio Local'],
        category: 'mobile',
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
