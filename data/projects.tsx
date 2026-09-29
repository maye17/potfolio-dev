export type Locale = "es" | "en";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  technologies: string[];
  featured: boolean;
  image: string;
  demo: string;
  github: string;
  features: Record<Locale, string[]>;
  gallery?: { label: Record<Locale, string>; image: string }[];
  steps?: Record<Locale, string[]>;
};

export const projects: Project[] = [
  {
    slug: "healthtech",
    title: {
      es: "Siso App",
      en: "Siso App",
    },
    description: {
      es: "Sistema multi-tenant para gestión de turnos médicos",
      en: "Multi-tenant system for managing medical appointments",
    },
    technologies: ["React", "Spring Boot", "MariaDB", "Docker", "JWT"],
    featured: true,
    image: "/images/siso.png",
    demo: "https://demo.gadbizz.com.ar/",
    github: "#",
    features: {
      es: [
        "Agenda médica dinámica por especialidad",
        "Gestión de pacientes",
        "Cancelación automática de turnos vencidos",
        "Sistema multi-tenant",
        "Autenticación con JWT",
      ],
      en: [
        "Dynamic medical schedule by specialty",
        "Patient management",
        "Automatic cancellation of expired appointments",
        "Multi-tenant system",
        "JWT authentication",
      ],
    },
  },

  {
    slug: "kickingball-app",
    title: {
      es: "Kickingball App",
      en: "Kickingball App",
    },
    description: {
      es: "Aplicación para gestión deportiva, pagos y jugadoras. Aplicación en producción utilizada por clientes reales",
      en: "Sports management app for players and payments. Production app used by real clients",
    },
    technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
    featured: true,
    image: "/images/kickingball.png",
    demo: "https://demo.kickingball.gadbizz.com.ar/",
    github: "#",
    features: {
      es: [
        "Registro de jugadoras",
        "Control de mensualidades",
        "Aprobación de pagos",
        "Calendario de cumpleaños",
        "Exportación a Excel",
      ],
      en: [
        "Player registration",
        "Monthly payment tracking",
        "Payment approval system",
        "Birthday calendar",
        "Excel export",
      ],
    },
  },

  {
    slug: "sistema-pedidos-digitales",
    title: {
      es: "Sistema de Pedidos Online",
      en: "Online Order System",
    },
    description: {
      es: "Plataforma digital para gestión de pedidos comerciales que optimiza ventas y operaciones",
      en: "Digital platform for managing commercial orders and optimizing sales operations",
    },
    technologies: ["MariaDB", "Node.js", "CSS", "JavaScript"],
    featured: true,
    image: "/images/sistemapedidos.png",
    demo: "https://clickpedido.gadbizz.com.ar/",
    github: "#",
    features: {
      es: [
        "Gestión de pedidos",
        "Carga de comprobantes",
        "Facturas desde el portal",
        "Emails automatizados",
        "Autorización de retiro",
      ],
      en: [
        "Order management",
        "Payment proof upload",
        "Portal invoices",
        "Automated emails",
        "Pickup authorization",
      ],
    },
  },
   {
    slug: "Aplicación de seguimiento y trazabilidad de proyectos",
    title: {
      es: "Traceup - Aplicación de seguimiento y trazabilidad de proyectos",
      en: "Traceup - Project Tracking and Traceability App",
    },
    description: {
      es: "Aplicación web para el seguimiento y trazabilidad de proyectos, permitiendo a los usuarios registrar, actualizar y monitorear el progreso de sus proyectos en tiempo real.",
      en: "Web application for project tracking and traceability, allowing users to register, update, and monitor the progress of their projects in real-time.",
    },
    technologies: ["MariaDB", "React", "Tailwind", "Node.js", "Express"],
    featured: true,
    image: "/images/traceup.png",
    demo: "https://traceup-chi.vercel.app/login",
    github: "#",
    features: {
      es: [
        "Gestión y seguimiento de proyectos",
        "Monitoreo del progreso en tiempo real",
        "Trazabilidad de actividades y cambios",
        "Registro y actualización de avances",
        "Historial de seguimiento por proyecto",
      ],
      en: [
        "Project management and tracking",
        "Real-time progress monitoring",
        "Activity and change traceability",
        "Progress registration and updates",
        "Project tracking history",
      ],
    },
  },

  {
    slug: "woocommerce-cm",
    title: {
      es: "E-commerce WooCommerce",
      en: "WooCommerce E-commerce",
    },
    description: {
      es: "Personalización avanzada de tienda online. Aplicación en producción utilizada por clientes reales",
      en: "Advanced customization of an online store. Production app used by real clients",
    },
    technologies: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
    featured: false,
    image: "/images/cma-web.png",
    demo: "https://casademoneda.com.ar/",
    github: "#",
    features: {
      es: [
        "Estados personalizados de pedidos",
        "Carga de comprobantes de pago",
        "Facturas descargables",
        "Emails personalizados",
        "Autorización de retiro de pedidos",
      ],
      en: [
        "Custom order statuses",
        "Payment proof upload",
        "Downloadable invoices",
        "Custom emails",
        "Order pickup authorization",
      ],
    },
  },

  {
    slug: "nilo-automatizacion-ventas",
    title: {
      es: "Nilo - Automatización de Ventas",
      en: "Nilo - Sales Automation",
    },
    description: {
      es: "Plataforma SaaS para automatizar procesos comerciales y mejorar la conversión de leads",
      en: "SaaS platform to automate sales processes and improve lead conversion",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    featured: false,
    image: "/images/nilo.png",
    demo: "https://somosnilo.com/",
    github: "#",
    features: {
      es: [
        "Automatización comercial",
        "Gestión de leads",
        "Integración con canales digitales",
        "Optimización de conversión",
      ],
      en: [
        "Sales automation",
        "Lead management",
        "Digital channel integration",
        "Conversion optimization",
      ],
    },
  },

  {
    slug: "ai-customer-inquiry-automation",
    title: {
      es: "AI Customer Inquiry Automation Platform",
      en: "AI Customer Inquiry Automation Platform",
    },
    description: {
      es: "Automatización inteligente con n8n y Google Gemini que clasifica consultas de clientes, analiza el sentimiento y ejecuta acciones según la intención detectada.",
      en: "Intelligent automation built with n8n and Google Gemini that classifies customer inquiries, analyzes sentiment, and triggers actions based on detected intent.",
    },
    technologies: ["n8n", "Google Gemini", "Gmail API", "Slack API", "Google Sheets", "Docker"],
    featured: true,
    image: "/images/workflow.png",
    demo: "#",
    github: "#",
    features: {
      es: [
        "Clasificación automática mediante IA",
        "Análisis de sentimiento",
        "Integración con Gmail y Slack",
        "Registro en Google Sheets",
        "Automatización de seguimientos",
      ],
      en: [
        "AI-powered automatic classification",
        "Sentiment analysis",
        "Gmail and Slack integration",
        "Logging to Google Sheets",
        "Automated follow-ups",
      ],
    },
    gallery: [
      {
        label: { es: "Arquitectura", en: "Architecture" },
        image: "/images/ai-automation-architecture.png",
      },
      {
        label: { es: "Workflow", en: "Workflow" },
        image: "/images/workflow.png",
      },
    ],
    steps: {
      es: [
        "docker compose up -d",
        "Importar el workflow en n8n",
        "Configurar las credenciales (Gemini, Gmail, Slack, Google Sheets)",
      ],
      en: [
        "docker compose up -d",
        "Import the workflow into n8n",
        "Configure credentials (Gemini, Gmail, Slack, Google Sheets)",
      ],
    },
  },
];