import type { PolicyUi } from "@/types/policy.interface";
import { createI18nUtils } from "./utils";

export const policyUi: PolicyUi = {
  en: {
    meta: {
      title: "Privacy Policy | Carfdev",
      description:
        "Learn how Carfdev collects, uses, and protects your personal information. GDPR compliant privacy policy for our web development services.",
    },
    title: "Privacy Policy",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introduction",
        paragraphs: [
          "Welcome to Carfdev. I respect your privacy and am committed to protecting your personal data. This privacy policy explains how I collect, use, store, and safeguard your information when you visit my website (carf.dev) or use my services.",
          "This policy applies to all services provided by José Carlos Sanchez Fernandez (operating as Carfdev), based in Stockholm, Sweden. I comply with the General Data Protection Regulation (GDPR), Swedish data protection laws (Dataskyddsförordningen), and other applicable privacy regulations. By using my services, you acknowledge that you have read and understood this policy.",
        ],
      },

      "2_data_controller": {
        title: "2. Data Controller",
        subtitle: "The data controller responsible for your personal data is:",
        info: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sweden",
          email: "Email: info@carf.dev",
          phone: "Phone: +46 72 271 02 80",
        },
      },

      "3_information_i_collect": {
        title: "3. Information I Collect",

        "3_1_provided": {
          title: "3.1 Information You Provide",
          description:
            "When you contact me through the website's contact form or communicate with me via email, I collect:",
          items: [
            {
              label: "Name",
              value: "First and last name to personalize communications",
            },
            {
              label: "Email address",
              value: "To respond to your inquiry and maintain correspondence",
            },
            {
              label: "Company name",
              value: "Optional, to better understand your business context",
            },
            {
              label: "Project details",
              value:
                "Information about your project needs, requirements, and objectives",
            },
            {
              label: "Budget and project type",
              value:
                "To assess project feasibility and provide accurate proposals",
            },
            {
              label: "Communication history",
              value:
                "Content of emails and messages exchanged during our correspondence",
            },
          ],
        },

        "3_2_analytics": {
          title: "3.2 Analytics Data",
          description: "Umami Analytics collects anonymous, aggregated data:",
          items: [
            "General location (country/city level)",
            "Browser type and version",
            "Device type (desktop, mobile, tablet)",
            "Operating system",
            "Pages visited and time spent",
            "Referrer information (where you came from)",
          ],
          note: "This data is completely anonymous and cannot be used to identify individual users. No IP addresses or personal identifiers are stored.",
        },

        "3_3_technical": {
          title: "3.3 Technical Data",
          description: "Automatically collected technical information:",
          items: [
            "IP address (temporarily processed by Cloudflare for security purposes)",
            "Browser type and version",
            "Time zone and location data",
            "Device information",
          ],
        },
      },

      "4_how_i_use": {
        title: "4. How I Use Your Information",
        subtitle: "I use the collected information for the following purposes:",

        "4_1_contact": {
          title: "4.1 Contact Form Submissions",
          items: [
            "Respond to inquiries",
            "Discuss potential projects",
            "Provide quotes and proposals",
            "Communicate about requested services",
          ],
        },

        "4_2_analytics": {
          title: "4.2 Analytics",
          items: [
            "Understand website usage",
            "Improve performance and UX",
            "Analyze traffic and popular content",
          ],
        },

        "4_3_security": {
          title: "4.3 Security",
          items: [
            "Protect against malicious activity",
            "Prevent spam and abuse",
            "Ensure service integrity",
          ],
        },
      },

      "5_legal_basis": {
        title: "5. Legal Basis for Processing",
        subtitle: "Under GDPR, I process your personal data based on:",
        items: [
          {
            label: "Consent",
            value:
              "When you submit the contact form, you consent to the processing of your data for the purposes stated.",
          },
          {
            label: "Legitimate interests",
            value:
              "I have a legitimate interest in understanding how my website is used and in protecting it from security threats.",
          },
          {
            label: "Contract performance",
            value:
              "Processing your data may be necessary to enter into or perform a contract with you.",
          },
        ],
      },

      "6_storage_security": {
        title: "6. Data Storage and Security",

        "6_1_storage": {
          title: "6.1 Where Your Data Is Stored",
          paragraphs: [
            "Contact form submissions are transmitted securely via HTTPS and sent directly to my email through Resend (a transactional email service provider). No form data is stored in any database on my servers. Your email correspondence is stored in my email inbox (hosted by Google) for as long as necessary to fulfill the purposes outlined in this policy.",
            "My website is hosted on my own server infrastructure managed with Docker containers and Oracle Cloud Infrastructure (OCI). All servers are located within the European Economic Area (specifically in Sweden) to ensure full compliance with GDPR requirements and minimize data transfer risks.",
            "All data transmissions are encrypted using TLS 1.3 or higher protocols, and stored data is protected with industry-standard encryption methods.",
          ],
        },

        "6_2_security": {
          title: "6.2 Security Measures",
          description:
            "I implement appropriate technical and organizational measures to protect your data:",
          items: [
            "SSL/TLS encryption",
            "Cloudflare protection",
            "Regular updates and monitoring",
            "Access controls",
            "Secure Docker configuration",
          ],
        },

        "6_3_retention": {
          title: "6.3 Data Retention",
          subtitle:
            "I retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:",
          items: [
            { label: "Contact inquiries", value: "Up to 2 years" },
            {
              label: "Client projects",
              value: "During project + up to 7 years",
            },
            { label: "Analytics", value: "Indefinite (anonymous)" },
          ],
        },
      },

      "7_third_parties": {
        title: "7. Third-Party Services",
        subtitle:
          "I use the following third-party services that may process your data. Each service has been carefully selected for GDPR compliance:",

        resend: {
          title: "7.1 Resend (Email Delivery Service)",
          description:
            "I use Resend (resend.com) to send transactional emails from the contact form. When you submit the form, your data is transmitted to Resend solely for the purpose of delivering your message to my inbox. Resend acts as a data processor under GDPR and does not store, use, or share your data for any purposes other than email delivery. Data processing agreement: Resend maintains GDPR-compliant data processing agreements and has appropriate technical and organizational measures in place.",
        },
        cloudflare: {
          title: "7.2 Cloudflare (Security and CDN)",
          description:
            "My website uses Cloudflare (cloudflare.com) for security, performance optimization, DDoS protection, and content delivery. Cloudflare may temporarily process your IP address and browser information to provide these services. This processing is necessary for my legitimate interest in protecting the website and ensuring optimal performance. Cloudflare is GDPR compliant and certified under the EU-U.S. Data Privacy Framework. Data retention: Cloudflare retains security logs for a limited time (typically 24-72 hours) for security purposes.",
        },
        umami: {
          title: "7.3 Umami Analytics (Privacy-Focused Analytics)",
          description:
            "I use a self-hosted instance of Umami Analytics running on my own server infrastructure. This means no data is shared with third parties, and I have complete control over the analytics data. All analytics data is stored on my European servers and is completely anonymous - no cookies, no personal identifiers, no IP address tracking. Umami complies with GDPR, CCPA, and PECR regulations by design.",
        },
        oracle: {
          title: "7.4 Oracle Cloud Infrastructure (Hosting)",
          description:
            "My website infrastructure is hosted on Oracle Cloud Infrastructure within the EU region. Oracle acts as a data processor and maintains GDPR-compliant data processing agreements. Data is stored exclusively on European servers and is not transferred outside the EEA.",
        },
      },

      "8_cookies": {
        title: "8. Cookies and Tracking",
        paragraphs: [
          "The website does not use cookies or third-party tracking.",
          "Only theme preference is stored locally (light/dark mode).",
        ],
      },

      "9_rights": {
        title: "9. Your Rights Under GDPR",
        subtitle:
          "As a data subject in the EU/EEA, you have the following rights. You can exercise these rights at any time by contacting me:",
        rights: [
          {
            label: "Right to Access (Article 15 GDPR)",
            value:
              "You can request a copy of all personal data I hold about you, including information about how it's being processed.",
          },
          {
            label: "Right to Rectification (Article 16 GDPR)",
            value:
              "You can request that I correct any inaccurate or incomplete data without undue delay.",
          },
          {
            label:
              "Right to Erasure / 'Right to be Forgotten' (Article 17 GDPR)",
            value:
              "You can request that I delete your personal data, subject to legal obligations that may require retention (such as accounting requirements).",
          },
          {
            label: "Right to Restriction of Processing (Article 18 GDPR)",
            value:
              "You can request that I restrict the processing of your data in certain circumstances, such as while verifying the accuracy of data.",
          },
          {
            label: "Right to Data Portability (Article 20 GDPR)",
            value:
              "You can request a copy of your data in a structured, commonly used, and machine-readable format (such as JSON or CSV).",
          },
          {
            label: "Right to Object (Article 21 GDPR)",
            value:
              "You can object to the processing of your data based on legitimate interests at any time.",
          },
          {
            label: "Right to Withdraw Consent (Article 7(3) GDPR)",
            value:
              "Where processing is based on consent, you can withdraw your consent at any time. This will not affect the lawfulness of processing before withdrawal.",
          },
          {
            label: "Right to Lodge a Complaint (Article 77 GDPR)",
            value:
              "You can file a complaint with the Swedish Authority for Privacy Protection (IMY - Integritetsskyddsmyndigheten) or your local data protection authority.",
          },
        ],
        contact: {
          label: "To exercise any of these rights, please contact me at",
          value:
            "I will respond to your request within 30 days (one month) as required by GDPR. If your request is complex or I receive multiple requests, I may extend this period by two additional months, and I will inform you of any such extension.",
        },
      },

      "10_transfers": {
        title: "10. International Data Transfers",
        paragraphs: [
          "All data processing takes place within the European Economic Area (EEA). My server infrastructure is located in Europe to ensure full GDPR compliance.",
          "In the rare case that data needs to be transferred outside the EEA, I will ensure that appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.",
        ],
      },

      "11_children": {
        title: "11. Children's Privacy",
        paragraphs: [
          "My services are not directed to individuals under the age of 16. I do not knowingly collect personal data from children. If you believe I have inadvertently collected data from a child, please contact me immediately so I can delete it.",
        ],
      },

      "12_changes": {
        title: "12. Changes to This Privacy Policy",
        paragraphs: [
          'I may update this privacy policy from time to time to reflect changes in my practices or legal requirements. When I make significant changes, I will update the "Last updated" date at the top of this page.',
          "I encourage you to review this policy periodically to stay informed about how I protect your information.",
        ],
      },

      "13_contact": {
        title: "13. Contact Information",
        subtitle:
          "If you have any questions, concerns, or requests regarding this privacy policy or how I handle your personal data, please contact me:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sweden",
          email: "Email",
          phone: "Phone",
        },
        authority: {
          name: "Swedish Authority for Privacy Protection (IMY)",
          description:
            "If you are not satisfied with my response to your privacy concerns, you have the right to lodge a complaint with the Swedish Authority for Privacy Protection:",
          website: "Website",
          email: "Email",
        },
      },
    },
    btn: {
      text: "Back to Home",
    },
  },
  es: {
    meta: {
      title: "Política de Privacidad | Carfdev",
      description:
        "Conoce cómo Carfdev recopila, utiliza y protege tu información personal. Política de privacidad conforme al RGPD para nuestros servicios de desarrollo web.",
    },
    title: "Política de Privacidad",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introducción",
        paragraphs: [
          "Bienvenido a Carfdev. Respeto tu privacidad y me comprometo a proteger tus datos personales. Esta política de privacidad explica cómo recopilo, utilizo, almaceno y protejo tu información cuando visitas mi sitio web (carf.dev) o utilizas mis servicios.",
          "Esta política se aplica a todos los servicios proporcionados por José Carlos Sánchez Fernández (operando como Carfdev), con sede en Estocolmo, Suecia. Cumplo con el Reglamento General de Protección de Datos (RGPD), las leyes suecas de protección de datos (Dataskyddsförordningen) y otras regulaciones de privacidad aplicables. Al utilizar mis servicios, reconoces que has leído y comprendido esta política.",
        ],
      },

      "2_data_controller": {
        title: "2. Responsable del Tratamiento de Datos",
        subtitle: "El responsable del tratamiento de tus datos personales es:",
        info: {
          name: "José Carlos Sánchez Fernández (Carfdev)",
          location: "Estocolmo, Suecia",
          email: "Correo electrónico: info@carf.dev",
          phone: "Teléfono: +46 72 271 02 80",
        },
      },

      "3_information_i_collect": {
        title: "3. Información que Recopilo",

        "3_1_provided": {
          title: "3.1 Información que Proporcionas",
          description:
            "Cuando te pones en contacto conmigo a través del formulario de contacto del sitio web o te comunicas conmigo por correo electrónico, recopilo:",
          items: [
            {
              label: "Nombre",
              value: "Nombre y apellidos para personalizar las comunicaciones",
            },
            {
              label: "Dirección de correo electrónico",
              value:
                "Para responder a tu consulta y mantener la correspondencia",
            },
            {
              label: "Nombre de la empresa",
              value:
                "Opcional, para comprender mejor el contexto de tu negocio",
            },
            {
              label: "Detalles del proyecto",
              value:
                "Información sobre las necesidades de tu proyecto, requisitos y objetivos",
            },
            {
              label: "Presupuesto y tipo de proyecto",
              value:
                "Para evaluar la viabilidad del proyecto y proporcionar propuestas precisas",
            },
            {
              label: "Historial de comunicaciones",
              value:
                "Contenido de correos electrónicos y mensajes intercambiados durante nuestra correspondencia",
            },
          ],
        },

        "3_2_analytics": {
          title: "3.2 Datos de Análisis",
          description: "Umami Analytics recopila datos anónimos y agregados:",
          items: [
            "Ubicación general (nivel de país/ciudad)",
            "Tipo y versión del navegador",
            "Tipo de dispositivo (ordenador, móvil, tableta)",
            "Sistema operativo",
            "Páginas visitadas y tiempo transcurrido",
            "Información del referente (de dónde vienes)",
          ],
          note: "Estos datos son completamente anónimos y no pueden utilizarse para identificar usuarios individuales. No se almacenan direcciones IP ni identificadores personales.",
        },

        "3_3_technical": {
          title: "3.3 Datos Técnicos",
          description: "Información técnica recopilada automáticamente:",
          items: [
            "Dirección IP (procesada temporalmente por Cloudflare con fines de seguridad)",
            "Tipo y versión del navegador",
            "Zona horaria y datos de ubicación",
            "Información del dispositivo",
          ],
        },
      },

      "4_how_i_use": {
        title: "4. Cómo Utilizo tu Información",
        subtitle:
          "Utilizo la información recopilada para los siguientes fines:",

        "4_1_contact": {
          title: "4.1 Envíos del Formulario de Contacto",
          items: [
            "Responder a consultas",
            "Discutir proyectos potenciales",
            "Proporcionar presupuestos y propuestas",
            "Comunicar sobre los servicios solicitados",
          ],
        },

        "4_2_analytics": {
          title: "4.2 Análisis",
          items: [
            "Comprender el uso del sitio web",
            "Mejorar el rendimiento y la experiencia de usuario",
            "Analizar el tráfico y el contenido popular",
          ],
        },

        "4_3_security": {
          title: "4.3 Seguridad",
          items: [
            "Proteger contra actividades maliciosas",
            "Prevenir spam y abusos",
            "Garantizar la integridad del servicio",
          ],
        },
      },

      "5_legal_basis": {
        title: "5. Base Legal para el Tratamiento",
        subtitle: "Según el RGPD, proceso tus datos personales basándome en:",
        items: [
          {
            label: "Consentimiento",
            value:
              "Cuando envías el formulario de contacto, consientes el tratamiento de tus datos para los fines indicados.",
          },
          {
            label: "Intereses legítimos",
            value:
              "Tengo un interés legítimo en comprender cómo se utiliza mi sitio web y en protegerlo de amenazas de seguridad.",
          },
          {
            label: "Ejecución del contrato",
            value:
              "El tratamiento de tus datos puede ser necesario para celebrar o ejecutar un contrato contigo.",
          },
        ],
      },

      "6_storage_security": {
        title: "6. Almacenamiento y Seguridad de Datos",

        "6_1_storage": {
          title: "6.1 Dónde se Almacenan tus Datos",
          paragraphs: [
            "Los envíos del formulario de contacto se transmiten de forma segura a través de HTTPS y se envían directamente a mi correo electrónico mediante Resend (un proveedor de servicios de correo electrónico transaccional). No se almacenan datos del formulario en ninguna base de datos en mis servidores. Tu correspondencia por correo electrónico se almacena en mi bandeja de entrada (alojada por Google) durante el tiempo necesario para cumplir los fines descritos en esta política.",
            "Mi sitio web está alojado en mi propia infraestructura de servidor gestionada con contenedores Docker y Oracle Cloud Infrastructure (OCI). Todos los servidores están ubicados dentro del Espacio Económico Europeo (específicamente en Suecia) para garantizar el pleno cumplimiento de los requisitos del RGPD y minimizar los riesgos de transferencia de datos.",
            "Todas las transmisiones de datos están cifradas utilizando protocolos TLS 1.3 o superiores, y los datos almacenados están protegidos con métodos de cifrado estándar de la industria.",
          ],
        },

        "6_2_security": {
          title: "6.2 Medidas de Seguridad",
          description:
            "Implemento medidas técnicas y organizativas apropiadas para proteger tus datos:",
          items: [
            "Cifrado SSL/TLS",
            "Protección de Cloudflare",
            "Actualizaciones y supervisión regulares",
            "Controles de acceso",
            "Configuración segura de Docker",
          ],
        },

        "6_3_retention": {
          title: "6.3 Retención de Datos",
          subtitle:
            "Conservo tus datos personales solo durante el tiempo necesario para cumplir los fines para los que fueron recopilados:",
          items: [
            { label: "Consultas de contacto", value: "Hasta 2 años" },
            {
              label: "Proyectos de clientes",
              value: "Durante el proyecto + hasta 7 años",
            },
            { label: "Análisis", value: "Indefinido (anónimo)" },
          ],
        },
      },

      "7_third_parties": {
        title: "7. Servicios de Terceros",
        subtitle:
          "Utilizo los siguientes servicios de terceros que pueden procesar tus datos. Cada servicio ha sido cuidadosamente seleccionado por su cumplimiento del RGPD:",

        resend: {
          title: "7.1 Resend (Servicio de Entrega de Correo Electrónico)",
          description:
            "Utilizo Resend (resend.com) para enviar correos electrónicos transaccionales desde el formulario de contacto. Cuando envías el formulario, tus datos se transmiten a Resend únicamente con el propósito de entregar tu mensaje a mi bandeja de entrada. Resend actúa como procesador de datos según el RGPD y no almacena, utiliza ni comparte tus datos para ningún otro propósito que no sea la entrega de correo electrónico. Acuerdo de tratamiento de datos: Resend mantiene acuerdos de tratamiento de datos conformes al RGPD y cuenta con medidas técnicas y organizativas apropiadas.",
        },
        cloudflare: {
          title: "7.2 Cloudflare (Seguridad y CDN)",
          description:
            "Mi sitio web utiliza Cloudflare (cloudflare.com) para seguridad, optimización del rendimiento, protección DDoS y entrega de contenido. Cloudflare puede procesar temporalmente tu dirección IP e información del navegador para proporcionar estos servicios. Este procesamiento es necesario para mi interés legítimo en proteger el sitio web y garantizar un rendimiento óptimo. Cloudflare cumple con el RGPD y está certificado bajo el Marco de Privacidad de Datos UE-EE.UU. Retención de datos: Cloudflare conserva registros de seguridad durante un tiempo limitado (normalmente 24-72 horas) con fines de seguridad.",
        },
        umami: {
          title: "7.3 Umami Analytics (Análisis Centrado en la Privacidad)",
          description:
            "Utilizo una instancia autohospedada de Umami Analytics que se ejecuta en mi propia infraestructura de servidor. Esto significa que no se comparten datos con terceros y tengo control completo sobre los datos de análisis. Todos los datos de análisis se almacenan en mis servidores europeos y son completamente anónimos: sin cookies, sin identificadores personales, sin seguimiento de direcciones IP. Umami cumple con el RGPD, CCPA y las regulaciones PECR por diseño.",
        },
        oracle: {
          title: "7.4 Oracle Cloud Infrastructure (Alojamiento)",
          description:
            "La infraestructura de mi sitio web está alojada en Oracle Cloud Infrastructure dentro de la región de la UE. Oracle actúa como procesador de datos y mantiene acuerdos de tratamiento de datos conformes al RGPD. Los datos se almacenan exclusivamente en servidores europeos y no se transfieren fuera del EEE.",
        },
      },

      "8_cookies": {
        title: "8. Cookies y Seguimiento",
        paragraphs: [
          "El sitio web no utiliza cookies ni seguimiento de terceros.",
          "Solo se almacena localmente la preferencia de tema (modo claro/oscuro).",
        ],
      },

      "9_rights": {
        title: "9. Tus Derechos según el RGPD",
        subtitle:
          "Como interesado en la UE/EEE, tienes los siguientes derechos. Puedes ejercer estos derechos en cualquier momento poniéndote en contacto conmigo:",
        rights: [
          {
            label: "Derecho de Acceso (Artículo 15 RGPD)",
            value:
              "Puedes solicitar una copia de todos los datos personales que tengo sobre ti, incluida información sobre cómo se están procesando.",
          },
          {
            label: "Derecho de Rectificación (Artículo 16 RGPD)",
            value:
              "Puedes solicitar que corrija cualquier dato inexacto o incompleto sin demora indebida.",
          },
          {
            label:
              "Derecho de Supresión / 'Derecho al Olvido' (Artículo 17 RGPD)",
            value:
              "Puedes solicitar que elimine tus datos personales, sujeto a obligaciones legales que puedan requerir su conservación (como requisitos contables).",
          },
          {
            label: "Derecho a la Limitación del Tratamiento (Artículo 18 RGPD)",
            value:
              "Puedes solicitar que limite el tratamiento de tus datos en determinadas circunstancias, como mientras se verifica la exactitud de los datos.",
          },
          {
            label: "Derecho a la Portabilidad de los Datos (Artículo 20 RGPD)",
            value:
              "Puedes solicitar una copia de tus datos en un formato estructurado, de uso común y legible por máquina (como JSON o CSV).",
          },
          {
            label: "Derecho de Oposición (Artículo 21 RGPD)",
            value:
              "Puedes oponerte al tratamiento de tus datos basado en intereses legítimos en cualquier momento.",
          },
          {
            label: "Derecho a Retirar el Consentimiento (Artículo 7(3) RGPD)",
            value:
              "Cuando el tratamiento se base en el consentimiento, puedes retirar tu consentimiento en cualquier momento. Esto no afectará la legalidad del tratamiento antes de la retirada.",
          },
          {
            label: "Derecho a Presentar una Reclamación (Artículo 77 RGPD)",
            value:
              "Puedes presentar una reclamación ante la Autoridad Sueca para la Protección de la Privacidad (IMY - Integritetsskyddsmyndigheten) o tu autoridad local de protección de datos.",
          },
        ],
        contact: {
          label:
            "Para ejercer cualquiera de estos derechos, por favor contáctame en",
          value:
            "Responderé a tu solicitud dentro de los 30 días (un mes) según lo requerido por el RGPD. Si tu solicitud es compleja o recibo múltiples solicitudes, puedo extender este período por dos meses adicionales, y te informaré de cualquier extensión.",
        },
      },

      "10_transfers": {
        title: "10. Transferencias Internacionales de Datos",
        paragraphs: [
          "Todo el tratamiento de datos tiene lugar dentro del Espacio Económico Europeo (EEE). Mi infraestructura de servidor está ubicada en Europa para garantizar el pleno cumplimiento del RGPD.",
          "En el caso poco probable de que los datos necesiten ser transferidos fuera del EEE, me aseguraré de que existan las garantías apropiadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.",
        ],
      },

      "11_children": {
        title: "11. Privacidad de los Menores",
        paragraphs: [
          "Mis servicios no están dirigidos a personas menores de 16 años. No recopilo conscientemente datos personales de menores. Si crees que he recopilado inadvertidamente datos de un menor, por favor contáctame inmediatamente para que pueda eliminarlos.",
        ],
      },

      "12_changes": {
        title: "12. Cambios en esta Política de Privacidad",
        paragraphs: [
          'Puedo actualizar esta política de privacidad de vez en cuando para reflejar cambios en mis prácticas o requisitos legales. Cuando haga cambios significativos, actualizaré la fecha de "Última actualización" en la parte superior de esta página.',
          "Te animo a revisar esta política periódicamente para mantenerte informado sobre cómo protejo tu información.",
        ],
      },

      "13_contact": {
        title: "13. Información de Contacto",
        subtitle:
          "Si tienes alguna pregunta, inquietud o solicitud con respecto a esta política de privacidad o cómo manejo tus datos personales, por favor contáctame:",
        owner: {
          name: "José Carlos Sánchez Fernández (Carfdev)",
          location: "Estocolmo, Suecia",
          email: "Correo electrónico",
          phone: "Teléfono",
        },
        authority: {
          name: "Autoridad Sueca para la Protección de la Privacidad (IMY)",
          description:
            "Si no estás satisfecho con mi respuesta a tus inquietudes de privacidad, tienes derecho a presentar una reclamación ante la Autoridad Sueca para la Protección de la Privacidad:",
          website: "Sitio web",
          email: "Correo electrónico",
        },
      },
    },
    btn: {
      text: "Volver al Inicio",
    },
  },
  sv: {
    meta: {
      title: "Integritetspolicy | Carfdev",
      description:
        "Lär dig hur Carfdev samlar in, använder och skyddar din personliga information. GDPR-kompatibel integritetspolicy för våra webbutvecklingstjänster.",
    },
    title: "Integritetspolicy",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introduktion",
        paragraphs: [
          "Välkommen till Carfdev. Jag respekterar din integritet och är engagerad i att skydda dina personuppgifter. Denna integritetspolicy förklarar hur jag samlar in, använder, lagrar och skyddar din information när du besöker min webbplats (carf.dev) eller använder mina tjänster.",
          "Denna policy gäller för alla tjänster som tillhandahålls av José Carlos Sanchez Fernandez (som verkar som Carfdev), baserad i Stockholm, Sverige. Jag följer den allmänna dataskyddsförordningen (GDPR), svenska dataskyddslagar (Dataskyddsförordningen) och andra tillämpliga integritetsbestämmelser. Genom att använda mina tjänster bekräftar du att du har läst och förstått denna policy.",
        ],
      },

      "2_data_controller": {
        title: "2. Personuppgiftsansvarig",
        subtitle: "Den personuppgiftsansvariga för dina personuppgifter är:",
        info: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sverige",
          email: "E-post: info@carf.dev",
          phone: "Telefon: +46 72 271 02 80",
        },
      },

      "3_information_i_collect": {
        title: "3. Information Jag Samlar In",

        "3_1_provided": {
          title: "3.1 Information Du Tillhandahåller",
          description:
            "När du kontaktar mig via webbplatsens kontaktformulär eller kommunicerar med mig via e-post samlar jag in:",
          items: [
            {
              label: "Namn",
              value: "För- och efternamn för att personalisera kommunikationen",
            },
            {
              label: "E-postadress",
              value:
                "För att svara på din förfrågan och upprätthålla korrespondens",
            },
            {
              label: "Företagsnamn",
              value: "Valfritt, för att bättre förstå din affärskontext",
            },
            {
              label: "Projektdetaljer",
              value: "Information om dina projektbehov, krav och mål",
            },
            {
              label: "Budget och projekttyp",
              value:
                "För att bedöma projektets genomförbarhet och tillhandahålla korrekta förslag",
            },
            {
              label: "Kommunikationshistorik",
              value:
                "Innehåll i e-postmeddelanden och meddelanden som utväxlats under vår korrespondens",
            },
          ],
        },

        "3_2_analytics": {
          title: "3.2 Analysdata",
          description: "Umami Analytics samlar in anonym, aggregerad data:",
          items: [
            "Allmän plats (land/stad-nivå)",
            "Webbläsartyp och version",
            "Enhetstyp (dator, mobil, surfplatta)",
            "Operativsystem",
            "Besökta sidor och tidsåtgång",
            "Referensinformation (varifrån du kom)",
          ],
          note: "Denna data är helt anonym och kan inte användas för att identifiera enskilda användare. Inga IP-adresser eller personliga identifierare lagras.",
        },

        "3_3_technical": {
          title: "3.3 Teknisk Data",
          description: "Automatiskt insamlad teknisk information:",
          items: [
            "IP-adress (tillfälligt bearbetad av Cloudflare för säkerhetsändamål)",
            "Webbläsartyp och version",
            "Tidszon och platsdata",
            "Enhetsinformation",
          ],
        },
      },

      "4_how_i_use": {
        title: "4. Hur Jag Använder Din Information",
        subtitle:
          "Jag använder den insamlade informationen för följande ändamål:",

        "4_1_contact": {
          title: "4.1 Kontaktformulär",
          items: [
            "Svara på förfrågningar",
            "Diskutera potentiella projekt",
            "Tillhandahålla offerter och förslag",
            "Kommunicera om begärda tjänster",
          ],
        },

        "4_2_analytics": {
          title: "4.2 Analys",
          items: [
            "Förstå webbplatsanvändning",
            "Förbättra prestanda och användarupplevelse",
            "Analysera trafik och populärt innehåll",
          ],
        },

        "4_3_security": {
          title: "4.3 Säkerhet",
          items: [
            "Skydda mot skadlig aktivitet",
            "Förhindra spam och missbruk",
            "Säkerställa tjänstens integritet",
          ],
        },
      },

      "5_legal_basis": {
        title: "5. Rättslig Grund för Behandling",
        subtitle: "Enligt GDPR behandlar jag dina personuppgifter baserat på:",
        items: [
          {
            label: "Samtycke",
            value:
              "När du skickar kontaktformuläret samtycker du till behandling av dina uppgifter för de angivna ändamålen.",
          },
          {
            label: "Berättigade intressen",
            value:
              "Jag har ett berättigat intresse av att förstå hur min webbplats används och att skydda den från säkerhetshot.",
          },
          {
            label: "Fullgörande av avtal",
            value:
              "Behandling av dina uppgifter kan vara nödvändig för att ingå eller fullgöra ett avtal med dig.",
          },
        ],
      },

      "6_storage_security": {
        title: "6. Datalagring och Säkerhet",

        "6_1_storage": {
          title: "6.1 Var Dina Uppgifter Lagras",
          paragraphs: [
            "Kontaktformulär skickas säkert via HTTPS och skickas direkt till min e-post via Resend (en transaktionell e-posttjänst). Inga formulärdata lagras i någon databas på mina servrar. Din e-postkorrespondens lagras i min inkorg (hanterad av Google) så länge som det är nödvändigt för att uppfylla de ändamål som beskrivs i denna policy.",
            "Min webbplats är värd på min egen serverinfrastruktur som hanteras med Docker-containrar och Oracle Cloud Infrastructure (OCI). Alla servrar finns inom Europeiska ekonomiska samarbetsområdet (specifikt i Sverige) för att säkerställa full GDPR-efterlevnad och minimera dataöverföringsrisker.",
            "All dataöverföring är krypterad med TLS 1.3 eller högre protokoll, och lagrad data skyddas med branschstandardmetoder för kryptering.",
          ],
        },

        "6_2_security": {
          title: "6.2 Säkerhetsåtgärder",
          description:
            "Jag implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda dina uppgifter:",
          items: [
            "SSL/TLS-kryptering",
            "Cloudflare-skydd",
            "Regelbundna uppdateringar och övervakning",
            "Åtkomstkontroller",
            "Säker Docker-konfiguration",
          ],
        },

        "6_3_retention": {
          title: "6.3 Datalagring",
          subtitle:
            "Jag behåller dina personuppgifter endast så länge som det är nödvändigt för att uppfylla de ändamål för vilka de samlades in:",
          items: [
            { label: "Kontaktförfrågningar", value: "Upp till 2 år" },
            {
              label: "Kundprojekt",
              value: "Under projekt + upp till 7 år",
            },
            { label: "Analys", value: "Obegränsat (anonymt)" },
          ],
        },
      },

      "7_third_parties": {
        title: "7. Tredjepartstjänster",
        subtitle:
          "Jag använder följande tredjepartstjänster som kan behandla dina uppgifter. Varje tjänst har noggrant valts för GDPR-efterlevnad:",

        resend: {
          title: "7.1 Resend (E-postleveranstjänst)",
          description:
            "Jag använder Resend (resend.com) för att skicka transaktionsmail från kontaktformuläret. När du skickar formuläret överförs dina uppgifter till Resend enbart i syfte att leverera ditt meddelande till min inkorg. Resend agerar som personuppgiftsbiträde enligt GDPR och lagrar, använder eller delar inte dina uppgifter för andra ändamål än e-postleverans. Personuppgiftsbiträdesavtal: Resend upprätthåller GDPR-kompatibla personuppgiftsbiträdesavtal och har lämpliga tekniska och organisatoriska åtgärder på plats.",
        },
        cloudflare: {
          title: "7.2 Cloudflare (Säkerhet och CDN)",
          description:
            "Min webbplats använder Cloudflare (cloudflare.com) för säkerhet, prestandaoptimering, DDoS-skydd och innehållsleverans. Cloudflare kan tillfälligt behandla din IP-adress och webbläsarinformation för att tillhandahålla dessa tjänster. Denna behandling är nödvändig för mitt berättigade intresse av att skydda webbplatsen och säkerställa optimal prestanda. Cloudflare är GDPR-kompatibel och certifierad enligt EU-USA Data Privacy Framework. Datalagring: Cloudflare behåller säkerhetsloggar under en begränsad tid (vanligtvis 24-72 timmar) för säkerhetsändamål.",
        },
        umami: {
          title: "7.3 Umami Analytics (Integritetsfokuserad Analys)",
          description:
            "Jag använder en självvärd instans av Umami Analytics som körs på min egen serverinfrastruktur. Detta innebär att ingen data delas med tredje part, och jag har fullständig kontroll över analysdata. All analysdata lagras på mina europeiska servrar och är helt anonym - inga cookies, inga personliga identifierare, ingen IP-adressspårning. Umami följer GDPR, CCPA och PECR-regler genom design.",
        },
        oracle: {
          title: "7.4 Oracle Cloud Infrastructure (Hosting)",
          description:
            "Min webbplatsinfrastruktur är värd på Oracle Cloud Infrastructure inom EU-regionen. Oracle agerar som personuppgiftsbiträde och upprätthåller GDPR-kompatibla personuppgiftsbiträdesavtal. Data lagras uteslutande på europeiska servrar och överförs inte utanför EES.",
        },
      },

      "8_cookies": {
        title: "8. Cookies och Spårning",
        paragraphs: [
          "Webbplatsen använder inte cookies eller tredjepartsspårning.",
          "Endast temapreferens lagras lokalt (ljust/mörkt läge).",
        ],
      },

      "9_rights": {
        title: "9. Dina Rättigheter enligt GDPR",
        subtitle:
          "Som registrerad i EU/EES har du följande rättigheter. Du kan utöva dessa rättigheter när som helst genom att kontakta mig:",
        rights: [
          {
            label: "Rätt till Tillgång (Artikel 15 GDPR)",
            value:
              "Du kan begära en kopia av alla personuppgifter jag har om dig, inklusive information om hur de behandlas.",
          },
          {
            label: "Rätt till Rättelse (Artikel 16 GDPR)",
            value:
              "Du kan begära att jag korrigerar eventuella felaktiga eller ofullständiga uppgifter utan onödigt dröjsmål.",
          },
          {
            label:
              "Rätt till Radering / 'Rätten att bli Glömd' (Artikel 17 GDPR)",
            value:
              "Du kan begära att jag raderar dina personuppgifter, med förbehåll för juridiska skyldigheter som kan kräva lagring (såsom redovisningskrav).",
          },
          {
            label: "Rätt till Begränsning av Behandling (Artikel 18 GDPR)",
            value:
              "Du kan begära att jag begränsar behandlingen av dina uppgifter under vissa omständigheter, till exempel medan riktigheten av uppgifterna verifieras.",
          },
          {
            label: "Rätt till Dataportabilitet (Artikel 20 GDPR)",
            value:
              "Du kan begära en kopia av dina uppgifter i ett strukturerat, allmänt använt och maskinläsbart format (såsom JSON eller CSV).",
          },
          {
            label: "Rätt att Invända (Artikel 21 GDPR)",
            value:
              "Du kan när som helst invända mot behandling av dina uppgifter baserad på berättigade intressen.",
          },
          {
            label: "Rätt att Återkalla Samtycke (Artikel 7(3) GDPR)",
            value:
              "När behandling baseras på samtycke kan du när som helst återkalla ditt samtycke. Detta påverkar inte lagligheten av behandling före återkallelse.",
          },
          {
            label: "Rätt att Lämna in Klagomål (Artikel 77 GDPR)",
            value:
              "Du kan lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY) eller din lokala dataskyddsmyndighet.",
          },
        ],
        contact: {
          label:
            "För att utöva någon av dessa rättigheter, vänligen kontakta mig på",
          value:
            "Jag kommer att svara på din begäran inom 30 dagar (en månad) enligt GDPR. Om din begäran är komplex eller jag mottar flera begäranden kan jag förlänga denna period med ytterligare två månader, och jag kommer att informera dig om en sådan förlängning.",
        },
      },

      "10_transfers": {
        title: "10. Internationella Dataöverföringar",
        paragraphs: [
          "All databehandling sker inom Europeiska ekonomiska samarbetsområdet (EES). Min serverinfrastruktur finns i Europa för att säkerställa full GDPR-efterlevnad.",
          "I det sällsynta fall att uppgifter behöver överföras utanför EES kommer jag att säkerställa att lämpliga skyddsåtgärder finns på plats, såsom standardavtalsklausuler godkända av Europeiska kommissionen.",
        ],
      },

      "11_children": {
        title: "11. Barns Integritet",
        paragraphs: [
          "Mina tjänster är inte riktade till personer under 16 år. Jag samlar inte medvetet in personuppgifter från barn. Om du tror att jag oavsiktligt har samlat in uppgifter från ett barn, vänligen kontakta mig omedelbart så att jag kan radera dem.",
        ],
      },

      "12_changes": {
        title: "12. Ändringar av denna Integritetspolicy",
        paragraphs: [
          'Jag kan uppdatera denna integritetspolicy då och då för att återspegla förändringar i mina metoder eller juridiska krav. När jag gör betydande förändringar kommer jag att uppdatera datumet "Senast uppdaterad" högst upp på denna sida.',
          "Jag uppmuntrar dig att regelbundet granska denna policy för att hålla dig informerad om hur jag skyddar din information.",
        ],
      },

      "13_contact": {
        title: "13. Kontaktinformation",
        subtitle:
          "Om du har några frågor, funderingar eller förfrågningar angående denna integritetspolicy eller hur jag hanterar dina personuppgifter, vänligen kontakta mig:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sverige",
          email: "E-post",
          phone: "Telefon",
        },
        authority: {
          name: "Integritetsskyddsmyndigheten (IMY)",
          description:
            "Om du inte är nöjd med mitt svar på dina integritetsfrågor har du rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten:",
          website: "Webbplats",
          email: "E-post",
        },
      },
    },
    btn: {
      text: "Tillbaka till Startsidan",
    },
  },
};

export const {
  getLangFromUrl,
  getUrlWithoutLang,
  useTranslations,
  useTranslatedPath,
} = createI18nUtils(policyUi);
