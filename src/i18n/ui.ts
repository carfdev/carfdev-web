import type { UI } from "@/types/ui.interface";

export const languages = {
  en: "English",
  es: "Español",
  sv: "Svenska",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui: UI = {
  en: {
    meta: {
      title: "Carfdev | Custom Web Development for Stockholm Businesses",
      description:
        "Expert web and mobile development services in Stockholm. I build fast, modern websites and applications for small businesses to help them grow online.",
    },
    nav: {
      links: [
        { text: "Services", href: "/#services" },
        { text: "Work", href: "/#work" },
        { text: "About", href: "/#about" },
      ],
      ctaButton: "Get in Touch",
      logoLabel: "Carfdev Home",
      title: "Navigation Menu",
      description: "Main site navigation menu",
    },
    hero: {
      title: "High-Quality Web Development for Your Stockholm Business",
      subtitle:
        "From concept to launch, I build custom, high-performance websites and applications that deliver real results. Your local, long-term tech partner.",
      primaryCta: "Let's Discuss Your Project",
      secondaryCta: "See My Work",
    },
    valueProposition: {
      title: "More Than a Developer. A Partner",
      subtitle:
        "I work closely with Stockholm businesses to create digital solutions that drive real growth and success.",
      items: [
        {
          icon: "Handshake",
          title: "Direct Collaboration",
          description:
            "You'll always work directly with me. No project managers, no communication gaps. Just a clear, efficient process from start to finish.",
        },
        {
          icon: "Code",
          title: "Modern, Future-Proof Tech",
          description:
            "I use a modern tech stack (Astro, React, Node.js) to build fast, secure, and scalable solutions that grow with your business, not against it.",
        },
        {
          icon: "MapPin",
          title: "A Local Stockholm Focus",
          description:
            "Based right here in Stockholm, I'm available for in-person meetings to truly understand your business goals and build lasting relationships.",
        },
      ],
    },
    services: {
      title: "My Services",
      subtitle: "Custom solutions to bring your digital ideas to life.",
      items: [
        {
          icon: "Laptop",
          title: "Custom Web Development",
          description:
            "Bespoke websites built from scratch to meet your unique business needs, optimized for performance and user experience.",
          checks: [
            "Responsive design for all devices",
            "SEO-optimized structure",
            "Fast loading speeds",
          ],
        },
        {
          icon: "ShoppingCart",
          title: "E-Commerce Solutions",
          description:
            "Powerful and easy-to-manage online stores that turn visitors into customers and help you sell your products effectively.",
          checks: [
            "Secure payment gateway integration",
            "User-friendly product management",
            "Scalable architecture for growth",
          ],
        },
        {
          icon: "Smartphone",
          title: "Mobile App Development",
          description:
            "Engaging cross-platform mobile apps for iOS and Android, built with technologies like React Native and Flutter.",
          checks: [
            "Intuitive user interfaces",
            "Performance-optimized code",
            "App Store and Google Play deployment",
          ],
        },
        {
          icon: "Rocket",
          title: "Maintenance & Support",
          description:
            "Ongoing support, security updates, and performance monitoring to ensure your website or app runs smoothly around the clock.",
          checks: [
            "Regular security patches",
            "Performance optimization",
            "24/7 monitoring and support",
          ],
        },
      ],
    },
    portfolio: {
      title: "Featured Work",
      subtitle: "A selection of projects I'm proud of.",
      btn: "View Project",
      items: [
        {
          title: "Kaffe & Klart Roasters",
          description:
            "A sleek e-commerce and marketing site for a local Stockholm coffee roastery. The platform increased their online sales by 40% in the first three months.",
          techStack: ["Astro", "React", "Node.js", "PostgreSQL"],
          url: "/project/kaffe-klart-roasters",
          imageAlt: "Kaffe & Klart Roasters project screenshot",
        },
        {
          title: "Södermalm Flow Yoga",
          description:
            "A custom booking platform and informational website for a boutique yoga studio, enabling easy class scheduling and membership management for their clients.",
          techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudflare"],
          url: "/project/sodermalm-flow-yoga",
          imageAlt: "Södermalm Flow Yoga project screenshot",
        },
      ],
    },
    process: {
      title: "My Development Process",
      subtitle:
        "A proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations.",
      steps: [
        {
          title: "Discovery",
          description:
            "Understanding your business goals, target audience, and technical requirements through detailed consultation.",
        },
        {
          title: "Planning",
          description:
            "Creating a comprehensive project plan, including timelines, milestones, and resource allocation to ensure smooth execution.",
        },
        {
          title: "Development",
          description:
            "Building your website or application using best practices and modern technologies to ensure quality and performance.",
        },
        {
          title: "Testing & Launch",
          description:
            "Thoroughly testing all features and functionalities before launching your project to ensure a seamless user experience.",
        },
      ],
    },
    techStack: {
      title: "My Tech Toolbox",
      subtitle:
        "I use a curated set of modern tools to ensure the highest quality, performance, and security for your project.",
      items: [
        {
          name: "React",
          description: "Component-based UI library for interactive interfaces",
          icon: "IconBrandReact",
          link: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          description: "Server-side JavaScript for robust backend solutions",
          icon: "IconBrandNodejs",
          link: "https://nodejs.org/",
        },
        {
          name: "Astro",
          description: "Modern static site generator for optimized websites",
          icon: "IconBrandAstro",
          link: "https://astro.build/",
        },
        {
          name: "AWS",
          description: "Cloud infrastructure for scalable hosting",
          icon: "IconBrandAmazon",
          link: "https://aws.amazon.com/",
        },
        {
          name: "Typescript",
          description: "Type-safe JavaScript for maintainable code",
          icon: "IconBrandTypescript",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS for rapid UI development",
          icon: "IconBrandTailwind",
          link: "https://tailwindcss.com/",
        },
        {
          name: "Docker",
          description: "Containerization for consistent deployments",
          icon: "IconBrandDocker",
          link: "https://www.docker.com/",
        },
        {
          name: "Git",
          description: "Version control for collaborative development",
          icon: "IconBrandGit",
          link: "https://git-scm.com/",
        },
      ],
    },
    about: {
      title: "Hi, I'm Carfdev",
      description1:
        "I'm a full-stack developer and designer based in Stockholm with a passion for building beautiful, functional things for the web. I thrive on the challenge of turning a complex problem into an elegant, user-friendly solution.",
      description2:
        "My philosophy is simple: build strong, long-term relationships with my clients. I want to be your go-to tech partner, someone you can rely on to not only build your project but also to help you grow your business. When I'm not coding, you can find me exploring the city's cafes or cycling through its beautiful parks.",
      btnTextPrimary: "Download CV",
      btnTextSecondary: "View LinkedIn",
    },
    cta: {
      title: "Have a project in mind?",
      subtitle:
        "Let's turn your idea into a reality. I'm currently available for new freelance opportunities and would love to hear about your goals.",
      buttonText: "Get a Free Quote",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Fill out the form below or email me directly at hello@carf.dev. I'll get back to you within 24 hours.",
      form: {
        firstNameLabel: "First Name",
        firstNamePlaceholder: "What should I call you?",
        firstNameErrorMessage: "Fill in your first name.",
        lastNameLabel: "Last Name",
        lastNamePlaceholder: "And your family name?",
        lastNameErrorMessage: "Fill in your last name.",
        companyNameLabel: "Company Name",
        companyNamePlaceholder: "What's your company's name?",
        emailLabel: "Your Email",
        emailPlaceholder: "Where can I reach you?",
        emailErrorMessage: "Please provide a valid email address.",
        projectTypeLabel: "Project Type",
        projectTypePlaceholder: "Select the type of project",
        projectTypeOptions: [
          "New Website",
          "E-Commerce Store",
          "Website Redesign",
          "web Application",
          "Performance Optimization",
          "Other",
        ],
        projectTypeErrorMessage: "Please select a project type.",
        budgetLabel: "Budget",
        budgetPlaceholder: "Select your budget range",
        budgetOptions: [
          "Under 50,000 SEK",
          "50,000 - 100,000 SEK",
          "100,000 - 200,000 SEK",
          "200,000+ SEK",
        ],
        budgetErrorMessage: "Please select a budget range.",
        messageLabel: "Project Details",
        messagePlaceholder: "Tell me a little about your project...",
        messageErrorMessage: "Please enter at least 10 characters.",
        submitButton: "Send Message",
        successMessage: {
          title: "Message Received",
          description: "I'll get back to you as soon as possible.",
        },
      },
      details: {
        title: "Get in Touch",
        items: [
          {
            label: "Email",
            value: "hello@carf.dev",
            note: "I'll respond within 24 hours",
            icon: "Mail",
          },
          {
            label: "Phone",
            value: "+46 70 123 45 67",
            note: "Available Mon-Fri, 9AM-6PM CET",
            icon: "Phone",
          },
          {
            label: "Location",
            value: "Stockholm, Sweden",
            note: "Available for local meetings",
            icon: "MapPin",
          },
        ],
      },
      card: {
        title: "Why Choose Carfdev?",
        items: [
          "Full-Stack Expertise (Design + Code)",
          "Specialized in Stockholm market",
          "Direct & Transparent Communication",
          "Ongoing support and maintenance",
        ],
      },
    },
    footer: {
      copyright:
        "© 2025 Carfdev. All rights reserved. Based in Stockholm, Sweden.",
      title:
        "Professional web development services for Stockholm businesses. Creating modern, fast, and user-friendly websites that drive real results.",
      services: {
        name: "Services",
        links: [
          { text: "Web Development", href: "/#services" },
          { text: "E-commerce", href: "/#services" },
          { text: "Performance Optimization", href: "/#services" },
          { text: "Web Applications", href: "/#services" },
        ],
      },
      company: {
        name: "Company",
        links: [
          { text: "About", href: "/#about" },
          { text: "Portfolio", href: "/#work" },
          { text: "Tech Stack", href: "/#technologies" },
          { text: "Process", href: "/#process" },
        ],
      },
      legal: [
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  },
  es: {
    meta: {
      title:
        "Carfdev | Desarrollo Web Personalizado para Negocios en Estocolmo",
      description:
        "Servicios expertos de desarrollo web y móvil en Estocolmo. Creo sitios web y aplicaciones modernas y rápidas para pequeñas empresas, ayudándolas a crecer en línea.",
    },
    nav: {
      links: [
        { text: "Servicios", href: "/#services" },
        { text: "Proyectos", href: "/#work" },
        { text: "Sobre mí", href: "/#about" },
      ],
      ctaButton: "Contáctame",
      logoLabel: "Inicio de Carfdev",
      title: "Menú de Navegación",
      description: "Menú principal para navegación del sitio",
    },
    hero: {
      title: "Desarrollo Web de Alta Calidad para tu Negocio en Estocolmo",
      subtitle:
        "Desde el concepto hasta el lanzamiento, construyo sitios y aplicaciones personalizadas, rápidas y eficientes que generan resultados reales.",
      primaryCta: "Hablemos de tu proyecto",
      secondaryCta: "Ver mis trabajos",
    },
    valueProposition: {
      title: "Más que un Desarrollador. Un Socio",
      subtitle:
        "Trabajo en estrecha colaboración con empresas de Estocolmo para crear soluciones digitales que impulsen el crecimiento y el éxito.",
      items: [
        {
          icon: "Handshake",
          title: "Colaboración Directa",
          description:
            "Trabajarás directamente conmigo. Sin gestores de proyecto, sin malentendidos. Un proceso claro y eficiente de principio a fin.",
        },
        {
          icon: "Code",
          title: "Tecnología Moderna y Escalable",
          description:
            "Uso una pila tecnológica moderna (Astro, React, Node.js) para crear soluciones rápidas, seguras y escalables que crecen junto a tu negocio.",
        },
        {
          icon: "MapPin",
          title: "Enfoque Local en Estocolmo",
          description:
            "Con base en Estocolmo, estoy disponible para reuniones presenciales y así entender mejor tus objetivos y construir relaciones duraderas.",
        },
      ],
    },
    services: {
      title: "Mis Servicios",
      subtitle:
        "Soluciones personalizadas para dar vida a tus ideas digitales.",
      items: [
        {
          icon: "Laptop",
          title: "Desarrollo Web Personalizado",
          description:
            "Sitios web creados desde cero para adaptarse a las necesidades únicas de tu negocio, optimizados para rendimiento y experiencia de usuario.",
          checks: [
            "Diseño responsivo para todos los dispositivos",
            "Estructura optimizada para SEO",
            "Velocidades de carga rápidas",
          ],
        },
        {
          icon: "ShoppingCart",
          title: "Soluciones de Comercio Electrónico",
          description:
            "Tiendas en línea potentes y fáciles de administrar que convierten visitantes en clientes y aumentan tus ventas.",
          checks: [
            "Integración segura de pasarelas de pago",
            "Gestión de productos fácil de usar",
            "Arquitectura escalable para el crecimiento",
          ],
        },
        {
          icon: "Smartphone",
          title: "Desarrollo de Aplicaciones Móviles",
          description:
            "Aplicaciones móviles multiplataforma atractivas para iOS y Android, construidas con tecnologías como React Native y Flutter.",
          checks: [
            "Interfaces de usuario intuitivas",
            "Código optimizado para rendimiento",
            "Despliegue en App Store y Google Play",
          ],
        },
        {
          icon: "Rocket",
          title: "Mantenimiento y Soporte",
          description:
            "Soporte continuo, actualizaciones de seguridad y monitoreo de rendimiento para asegurar que tu sitio o app funcione sin problemas las 24 horas.",
          checks: [
            "Parches de seguridad regulares",
            "Optimización del rendimiento",
            "Monitoreo y soporte 24/7",
          ],
        },
      ],
    },
    portfolio: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de trabajos de los que me siento orgulloso.",
      btn: "Ver Proyecto",
      items: [
        {
          title: "Kaffe & Klart Roasters",
          description:
            "Una tienda en línea moderna para una tostaduría local de café en Estocolmo. La plataforma aumentó sus ventas en línea un 40% en los primeros tres meses.",
          techStack: ["Astro", "React", "Node.js", "PostgreSQL"],
          url: "/project/kaffe-klart-roasters",
          imageAlt: "Kaffe & Klart Roasters project screenshot",
        },
        {
          title: "Södermalm Flow Yoga",
          description:
            "Una plataforma de reservas personalizada y sitio informativo para un estudio boutique de yoga, facilitando la gestión de clases y membresías para sus clientes.",
          techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudflare"],
          url: "/project/sodermalm-flow-yoga",
          imageAlt: "Södermalm Flow Yoga project screenshot",
        },
      ],
    },
    process: {
      title: "Mi Proceso de Desarrollo",
      subtitle:
        "Una metodología probada que asegura que tu proyecto se entregue a tiempo, dentro del presupuesto y supere las expectativas.",
      steps: [
        {
          title: "Descubrimiento",
          description:
            "Comprender tus objetivos comerciales, audiencia objetivo y requisitos técnicos a través de una consulta detallada.",
        },
        {
          title: "Planificación",
          description:
            "Crear un plan de proyecto integral, incluyendo cronogramas, hitos y asignación de recursos para asegurar una ejecución fluida.",
        },
        {
          title: "Desarrollo",
          description:
            "Construir tu sitio web o aplicación utilizando las mejores prácticas y tecnologías modernas para garantizar calidad y rendimiento.",
        },
        {
          title: "Pruebas y Lanzamiento",
          description:
            "Probar exhaustivamente todas las características y funcionalidades antes de lanzar tu proyecto para asegurar una experiencia de usuario perfecta.",
        },
      ],
    },
    techStack: {
      title: "Mi Caja de Herramientas Tecnológicas",
      subtitle:
        "Uso un conjunto moderno y seleccionado de herramientas para garantizar la máxima calidad, rendimiento y seguridad en tu proyecto.",
      items: [
        {
          name: "React",
          description:
            "Biblioteca de UI basada en componentes para interfaces interactivas",
          icon: "IconBrandReact",
          link: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          description:
            "JavaScript del lado del servidor para soluciones backend robustas",
          icon: "IconBrandNodejs",
          link: "https://nodejs.org/",
        },
        {
          name: "Astro",
          description:
            "Generador moderno de sitios estáticos para sitios web optimizados",
          icon: "IconBrandAstro",
          link: "https://astro.build/",
        },
        {
          name: "AWS",
          description: "Infraestructura en la nube para alojamiento escalable",
          icon: "IconBrandAmazon",
          link: "https://aws.amazon.com/",
        },
        {
          name: "Typescript",
          description: "JavaScript con tipado para código mantenible",
          icon: "IconBrandTypescript",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Tailwind CSS",
          description: "CSS utilitario para desarrollo rápido de UI",
          icon: "IconBrandTailwind",
          link: "https://tailwindcss.com/",
        },
        {
          name: "Docker",
          description: "Contenerización para despliegues consistentes",
          icon: "IconBrandDocker",
          link: "https://www.docker.com/",
        },
        {
          name: "Git",
          description: "Control de versiones para desarrollo colaborativo",
          icon: "IconBrandGit",
          link: "https://git-scm.com/",
        },
      ],
    },
    about: {
      title: "Hola, soy Carfdev",
      description1:
        "Soy desarrollador full-stack y diseñador radicado en Estocolmo, apasionado por crear cosas bellas y funcionales para la web. Me motiva el reto de transformar problemas complejos en soluciones elegantes y fáciles de usar.",
      description2:
        "Mi filosofía es simple: construir relaciones sólidas y duraderas con mis clientes. Quiero ser tu socio tecnológico de confianza, alguien que no solo construya tu proyecto, sino que también te ayude a hacer crecer tu negocio. Cuando no estoy programando, me encontrarás explorando los cafés de la ciudad o recorriendo sus parques en bicicleta.",
      btnTextPrimary: "Descargar CV",
      btnTextSecondary: "Ver LinkedIn",
    },
    cta: {
      title: "¿Tienes un proyecto en mente?",
      subtitle:
        "Convirtamos tu idea en realidad. Actualmente estoy disponible para nuevos proyectos freelance y me encantaría conocer tus objetivos.",
      buttonText: "Solicitar Cotización Gratis",
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle:
        "Rellena el formulario o envíame un correo directamente a hello@carf.dev. Te responderé en menos de 24 horas.",
      form: {
        firstNameLabel: "Primer Nombre",
        firstNamePlaceholder: "¿Cómo debo llamarte?",
        firstNameErrorMessage: "Ingresa tu nombre.",
        lastNameLabel: "Apellido",
        lastNamePlaceholder: "¿Y tu apellido?",
        lastNameErrorMessage: "Ingresa tu apellido.",
        companyNameLabel: "Nombre de la Empresa",
        companyNamePlaceholder: "¿Cómo se llama tu empresa?",
        emailLabel: "Tu Correo Electrónico",
        emailPlaceholder: "¿Dónde puedo contactarte?",
        emailErrorMessage:
          "Por favor, proporciona una dirección de correo válida.",
        projectTypeLabel: "Tipo de Proyecto",
        projectTypePlaceholder: "Selecciona el tipo de proyecto",
        projectTypeOptions: [
          "Nuevo Sitio Web",
          "Tienda de Comercio Electrónico",
          "Rediseño de Sitio Web",
          "Aplicación Web",
          "Optimización de Rendimiento",
          "Otro",
        ],
        projectTypeErrorMessage: "Por favor, selecciona un tipo de proyecto.",
        budgetLabel: "Presupuesto",
        budgetPlaceholder: "Selecciona tu rango de presupuesto",
        budgetOptions: [
          "Menos de 50,000 SEK",
          "50,000 - 100,000 SEK",
          "100,000 - 200,000 SEK",
          "Más de 200,000 SEK",
        ],
        budgetErrorMessage: "Por favor, selecciona un rango de presupuesto.",
        messageLabel: "Detalles del Proyecto",
        messagePlaceholder: "Cuéntame un poco sobre tu proyecto...",
        messageErrorMessage: "Por favor, ingresa al menos 10 caracteres.",
        submitButton: "Enviar Mensaje",
        successMessage: {
          title: "Mensaje Recibido",
          description: "Me pondré en contacto contigo lo antes posible.",
        },
      },
      details: {
        title: "Ponte en Contacto",
        items: [
          {
            label: "Correo Electrónico",
            value: "hello@carf.dev",
            note: "Te responderé en menos de 24 horas",
            icon: "Mail",
          },
          {
            label: "Teléfono",
            value: "+46 70 123 45 67",
            note: "Disponible de lunes a viernes, 9AM-6PM CET",
            icon: "Phone",
          },
          {
            label: "Ubicación",
            value: "Estocolmo, Suecia",
            note: "Disponible para reuniones locales",
            icon: "MapPin",
          },
        ],
      },
      card: {
        title: "¿Por qué elegir a Carfdev?",
        items: [
          "Experiencia Full-Stack (Diseño + Código)",
          "Especializado en el mercado de Estocolmo",
          "Comunicación Directa y Transparente",
          "Soporte y mantenimiento continuos",
        ],
      },
    },
    footer: {
      copyright:
        "© 2025 Carfdev. Todos los derechos reservados. Con sede en Estocolmo, Suecia.",
      title:
        "Servicios profesionales de desarrollo web para negocios en Estocolmo. Creando sitios modernos, rápidos y fáciles de usar que generan resultados reales.",
      services: {
        name: "Servicios",
        links: [
          { text: "Desarrollo Web", href: "/#services" },
          { text: "Comercio Electrónico", href: "/#services" },
          { text: "Optimización de Rendimiento", href: "/#services" },
          { text: "Aplicaciones Web", href: "#/services" },
        ],
      },
      company: {
        name: "Compañía",
        links: [
          { text: "Sobre mí", href: "/#about" },
          { text: "Portafolio", href: "/#work" },
          { text: "Pila Tecnológica", href: "/#technologies" },
          { text: "Proceso", href: "/#process" },
        ],
      },
      legal: [
        { text: "Política de Privacidad", href: "/privacy-policy" },
        { text: "Términos de Servicio", href: "/terms-of-service" },
      ],
    },
  },
  sv: {
    meta: {
      title: "Carfdev | Skräddarsydd webbutveckling för företag i Stockholm",
      description:
        "Expert på webbutveckling och mobilutveckling i Stockholm. Jag bygger snabba, moderna webbplatser och appar för småföretag för att hjälpa dem växa online.",
    },
    nav: {
      links: [
        { text: "Tjänster", href: "/#services" },
        { text: "Projekt", href: "/#work" },
        { text: "Om mig", href: "/#about" },
      ],
      ctaButton: "Kontakta mig",
      logoLabel: "Carfdev Hem",
      title: "Navigeringsmeny",
      description: "Huvudmeny för webbplatsnavigering",
    },
    hero: {
      title: "Webbutveckling av hög kvalitet för ditt företag i Stockholm",
      subtitle:
        "Från idé till lansering bygger jag skräddarsydda, högpresterande webbplatser och appar som ger verkliga resultat. Din lokala och långsiktiga teknikpartner.",
      primaryCta: "Låt oss prata om ditt projekt",
      secondaryCta: "Se mitt arbete",
    },
    valueProposition: {
      title: "Mer än en utvecklare. En partner",
      subtitle:
        "Jag arbetar nära företag i Stockholm för att skapa digitala lösningar som driver verklig tillväxt och framgång.",
      items: [
        {
          icon: "Handshake",
          title: "Direkt samarbete",
          description:
            "Du arbetar alltid direkt med mig. Inga projektledare, inga kommunikationsluckor. Bara en tydlig och effektiv process från början till slut.",
        },
        {
          icon: "Code",
          title: "Modern och framtidssäker teknik",
          description:
            "Jag använder en modern teknikstack (Astro, React, Node.js) för att bygga snabba, säkra och skalbara lösningar som växer tillsammans med ditt företag.",
        },
        {
          icon: "MapPin",
          title: "Lokalt fokus i Stockholm",
          description:
            "Jag finns här i Stockholm och är tillgänglig för personliga möten för att verkligen förstå dina affärsmål och bygga långvariga relationer.",
        },
      ],
    },
    services: {
      title: "Mina tjänster",
      subtitle:
        "Skräddarsydda lösningar för att förverkliga dina digitala idéer.",
      items: [
        {
          icon: "Laptop",
          title: "Skräddarsydd webbutveckling",
          description:
            "Webbplatser byggda från grunden för att möta ditt företags unika behov, optimerade för prestanda och användarupplevelse.",
          checks: [
            "Responsiv design för alla enheter",
            "SEO-optimerad struktur",
            "Snabba laddningstider",
          ],
        },
        {
          icon: "ShoppingCart",
          title: "E-handelslösningar",
          description:
            "Kraftfulla och lättanvända nätbutiker som omvandlar besökare till kunder och hjälper dig att sälja effektivt.",
          checks: [
            "Säker betalningsgateway-integration",
            "Användarvänlig produktadministration",
            "Skalbar arkitektur för tillväxt",
          ],
        },
        {
          icon: "Smartphone",
          title: "Utveckling av mobilappar",
          description:
            "Engagerande mobilappar för iOS och Android, byggda med tekniker som React Native och Flutter.",
          checks: [
            "Intuitiva användargränssnitt",
            "Prestandaoptimerad kod",
            "Lansering i App Store och Google Play",
          ],
        },
        {
          icon: "Rocket",
          title: "Underhåll och support",
          description:
            "Löpande support, säkerhetsuppdateringar och prestandaövervakning för att se till att din webbplats eller app fungerar smidigt dygnet runt.",
          checks: [
            "Regelbundna säkerhetspatchar",
            "Prestandaoptimering",
            "Övervakning och support dygnet runt",
          ],
        },
      ],
    },
    portfolio: {
      title: "Utvalda projekt",
      subtitle: "Ett urval av projekt jag är stolt över.",
      btn: "Visa projekt",
      items: [
        {
          title: "Kaffe & Klart Roasters",
          description:
            "En elegant e-handels- och marknadsföringswebbplats för ett lokalt kafferosteri i Stockholm. Plattformen ökade deras onlineförsäljning med 40 % under de första tre månaderna.",
          techStack: ["Astro", "React", "Node.js", "PostgreSQL"],
          url: "/project/kaffe-klart-roasters",
          imageAlt: "Kaffe & Klart Roasters project screenshot",
        },
        {
          title: "Södermalm Flow Yoga",
          description:
            "En skräddarsydd bokningsplattform och informationswebbplats för en yogastudio, som möjliggör enkel klassbokning och medlemshantering för deras kunder.",
          techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudflare"],
          url: "/project/sodermalm-flow-yoga",
          imageAlt: "Södermalm Flow Yoga project screenshot",
        },
      ],
    },
    process: {
      title: "Min utvecklingsprocess",
      subtitle:
        "En beprövad metodik som säkerställer att ditt projekt levereras i tid, inom budget och överträffar förväntningarna.",
      steps: [
        {
          title: "Upptäckt",
          description:
            "Förstå dina affärsmål, målgrupp och tekniska krav genom detaljerad konsultation.",
        },
        {
          title: "Planering",
          description:
            "Skapa en omfattande projektplan, inklusive tidslinjer, milstolpar och resursallokering för att säkerställa smidig genomförande.",
        },
        {
          title: "Utveckling",
          description:
            "Bygga din webbplats eller applikation med bästa praxis och moderna teknologier för att säkerställa kvalitet och prestanda.",
        },
        {
          title: "Testning och lansering",
          description:
            "Noggrant testa alla funktioner innan lansering för att säkerställa en sömlös användarupplevelse.",
        },
      ],
    },
    techStack: {
      title: "Min tekniska verktygslåda",
      subtitle:
        "Jag använder ett noggrant utvalt set av moderna verktyg för att säkerställa högsta kvalitet, prestanda och säkerhet i ditt projekt.",
      items: [
        {
          name: "React",
          description:
            "Komponentbaserat UI-bibliotek för interaktiva gränssnitt",
          icon: "IconBrandReact",
          link: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          description: "Server-side JavaScript för robusta backend-lösningar",
          icon: "IconBrandNodejs",
          link: "https://nodejs.org/",
        },
        {
          name: "Astro",
          description:
            "Modern statisk webbplatsskapare för optimerade webbplatser",
          icon: "IconBrandAstro",
          link: "https://astro.build/",
        },
        {
          name: "AWS",
          description: "Molninfrastruktur för skalbar hosting",
          icon: "IconBrandAmazon",
          link: "https://aws.amazon.com/",
        },
        {
          name: "Typescript",
          description: "Typ-säker JavaScript för underhållbar kod",
          icon: "IconBrandTypescript",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS för snabb UI-utveckling",
          icon: "IconBrandTailwind",
          link: "https://tailwindcss.com/",
        },
        {
          name: "Docker",
          description: "Containerisering för konsekventa distributioner",
          icon: "IconBrandDocker",
          link: "https://www.docker.com/",
        },
        {
          name: "Git",
          description: "Versionskontroll för samarbetsutveckling",
          icon: "IconBrandGit",
          link: "https://git-scm.com/",
        },
      ],
    },
    about: {
      title: "Hej, jag är Carfdev",
      description1:
        "Jag är en fullstack-utvecklare och designer baserad i Stockholm med en passion för att skapa vackra och funktionella webblösningar. Jag trivs med att förvandla komplexa problem till eleganta och användarvänliga lösningar.",
      description2:
        "Min filosofi är enkel: bygg starka och långsiktiga relationer med mina kunder. Jag vill vara din pålitliga teknikpartner, någon du kan lita på för att inte bara bygga ditt projekt utan också hjälpa ditt företag att växa. När jag inte programmerar hittar du mig ofta på stadens kaféer eller cyklande genom dess vackra parker.",
      btnTextPrimary: "Ladda ner CV",
      btnTextSecondary: "Visa LinkedIn",
    },
    cta: {
      title: "Har du ett projekt i åtanke?",
      subtitle:
        "Låt oss förvandla din idé till verklighet. Jag är för närvarande tillgänglig för nya frilansuppdrag och skulle gärna höra mer om dina mål.",
      buttonText: "Få en gratis offert",
    },
    contact: {
      title: "Kontakta mig",
      subtitle:
        "Fyll i formuläret nedan eller mejla mig direkt på hello@carf.dev. Jag svarar inom 24 timmar.",
      form: {
        firstNameLabel: "Ditt förnamn",
        firstNamePlaceholder: "Vad ska jag kalla dig?",
        firstNameErrorMessage: "Fyll i ditt förnamn.",
        lastNameLabel: "Ditt efternamn",
        lastNamePlaceholder: "Och ditt familjenamn?",
        lastNameErrorMessage: "Fyll i ditt efternamn.",
        companyNameLabel: "Företagsnamn",
        companyNamePlaceholder: "Vad heter ditt företag?",
        emailLabel: "Din e-postadress",
        emailPlaceholder: "Hur kan jag nå dig?",
        emailErrorMessage: "Ange en giltig e-postadress.",
        projectTypeLabel: "Projekttyp",
        projectTypePlaceholder: "Välj projekttyp",
        projectTypeOptions: [
          "Ny webbplats",
          "E-handelsbutik",
          "Webbplatsomdesign",
          "Webbapplikation",
          "Prestandaoptimering",
          "Annat",
        ],
        projectTypeErrorMessage: "Välj en projekttyp.",
        budgetLabel: "Budget",
        budgetPlaceholder: "Välj din budgetintervall",
        budgetOptions: [
          "Under 50,000 SEK",
          "50,000 - 100,000 SEK",
          "100,000 - 200,000 SEK",
          "200,000+ SEK",
        ],
        budgetErrorMessage: "Välj en budgetintervall.",
        messageLabel: "Projektbeskrivning",
        messagePlaceholder: "Berätta lite om ditt projekt...",
        messageErrorMessage: "Ange minst 10 tecken.",
        submitButton: "Skicka meddelande",
        successMessage: {
          title: "Meddelande mottaget",
          description: "Jag återkommer till dig så snart som möjligt.",
        },
      },
      details: {
        title: "Kontakta mig",
        items: [
          {
            label: "E-post",
            value: "hello@carf.dev",
            note: "Jag svarar inom 24 timmar",
            icon: "Mail",
          },
          {
            label: "Telefon",
            value: "+46 70 123 45 67",
            note: "Tillgänglig mån-fre, 9AM-6PM CET",
            icon: "Phone",
          },
          {
            label: "Plats",
            value: "Stockholm, Sverige",
            note: "Tillgänglig för lokala möten",
            icon: "MapPin",
          },
        ],
      },
      card: {
        title: "Varför välja Carfdev?",
        items: [
          "Fullstack-expertis (design + kod)",
          "Specialiserad på Stockholmsmarknaden",
          "Direkt & transparent kommunikation",
          "Löpande support och underhåll",
        ],
      },
    },
    footer: {
      copyright:
        "© 2025 Carfdev. Alla rättigheter förbehållna. Basera i Stockholm, Sverige.",
      title:
        "Professionella webbutvecklingstjänster för företag i Stockholm. Skapar moderna, snabba och användarvänliga webbplatser som ger verkliga resultat.",
      services: {
        name: "Tjänster",
        links: [
          { text: "Webbutveckling", href: "/#services" },
          { text: "E-handel", href: "/#services" },
          { text: "Prestandaoptimering", href: "/#services" },
          { text: "Webbapplikationer", href: "/#services" },
        ],
      },
      company: {
        name: "Företag",
        links: [
          { text: "Om mig", href: "/#about" },
          { text: "Portfölj", href: "/#work" },
          { text: "Teknisk stack", href: "/#technologies" },
          { text: "Process", href: "/#process" },
        ],
      },
      legal: [
        { text: "Integritetspolicy", href: "/privacy-policy" },
        { text: "Användarvillkor", href: "/terms-of-service" },
      ],
    },
  },
};
