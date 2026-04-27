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
    image: "/image/siso.png",
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
    image: "/image/kickingball.png",
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
    featured: true,
    image: "/image/sistemapedidos.png",
    demo: "#",
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
    featured: false,
    image: "/image/sistemapedidos.png",
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
    image: "/image/nilo.png",
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
];