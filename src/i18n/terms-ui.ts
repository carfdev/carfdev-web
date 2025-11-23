import type { TermsUi } from "@/types/terms.interface";
import { createI18nUtils } from "./utils";

export const termsUi: TermsUi = {
  en: {
    meta: {
      title: "Terms of Service | Carfdev",
      description:
        "Terms and conditions for web development and hosting services provided by Carfdev. Read our service agreement before starting your project.",
    },
    title: "Terms of Service",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introduction and Acceptance",
        paragraphs: [
          'These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and José Carlos Sanchez Fernandez, operating as Carfdev ("I", "me", "my", or "Service Provider"), based in Stockholm, Sweden.',
          "By engaging my services, submitting a project inquiry, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, please do not use my services.",
        ],
      },

      "2_services": {
        title: "2. Services Provided",
        intro: "I offer the following professional services:",

        "2_1_development": {
          title: "2.1 Web Development Services",
          items: [
            "Custom website design and development",
            "E-commerce solutions",
            "Web application development",
            "Mobile application development",
            "Website redesign and modernization",
            "Performance optimization",
            "API development and integration",
          ],
        },

        "2_2_ongoing": {
          title: "2.2 Ongoing Services",
          items: [
            "Website maintenance and support",
            "Security updates and monitoring",
            "Content updates",
            "Performance monitoring and optimization",
            "Technical support",
          ],
        },

        "2_3_hosting": {
          title: "2.3 Hosting Services",
          items: [
            "Web hosting on my managed infrastructure",
            "SSL certificate management",
            "Regular backups",
            "Basic security monitoring",
            "99% uptime guarantee (excluding scheduled maintenance)",
          ],
        },

        conclusion:
          "All services are provided as custom, personalized solutions tailored to each client's specific needs and requirements.",
      },

      "3_project_process": {
        title: "3. Project Process",

        "3_1_consultation": {
          title: "3.1 Consultation and Quotation",
          description:
            "All projects begin with a free consultation where we discuss your requirements, goals, and budget. After the consultation, I will provide a detailed written quotation outlining:",
          items: [
            "Scope of work and deliverables",
            "Project timeline and milestones",
            "Total cost breakdown",
            "Payment schedule",
            "Terms and conditions specific to your project",
          ],
        },

        "3_2_agreement": {
          title: "3.2 Project Agreement",
          paragraphs: [
            "Once you accept the quotation, we will enter into a formal project agreement. The project begins upon receipt of the initial payment.",
          ],
        },

        "3_3_communication": {
          title: "3.3 Communication",
          paragraphs: [
            "Throughout the project, I will maintain regular communication with you via email, phone, or video calls as agreed. I commit to responding to your inquiries within 1-2 business days.",
          ],
        },

        "3_4_revisions": {
          title: "3.4 Reviews and Revisions",
          description:
            "I offer unlimited revisions during the development process to ensure the final product meets your expectations. However:",
          items: [
            "Revisions must be within the original scope of work",
            "Major scope changes may require additional time and costs, which will be discussed and agreed upon before implementation",
            "Excessive revisions or changes beyond the original scope that cause significant project delays are not my responsibility",
            "I reserve the right to charge for additional work that falls outside the agreed scope",
          ],
        },
      },

      "4_payment": {
        title: "4. Payment Terms",

        "4_1_structure": {
          title: "4.1 Payment Structure",
          description:
            "All development projects follow this payment structure:",
          items: [
            {
              label: "50% upfront payment",
              value:
                "Required before work begins, due within 7 days of accepting the quotation",
            },
            {
              label: "50% final payment",
              value:
                "Due upon project completion and before final delivery of all files and access",
            },
          ],
        },

        "4_2_ongoing": {
          title: "4.2 Ongoing Services",
          paragraphs: [
            "Maintenance, support, and hosting services are billed monthly or annually as agreed in the service contract. Payment is due at the beginning of each billing period.",
          ],
        },

        "4_3_methods": {
          title: "4.3 Payment Methods",
          description: "I accept the following payment methods:",
          items: [
            "Bank transfer (Bankgiro/Plusgiro)",
            "Swish",
            "International wire transfer (for international clients)",
          ],
        },

        "4_4_currency": {
          title: "4.4 Currency and VAT",
          paragraphs: [
            "All prices are quoted in Swedish Kronor (SEK) and include Swedish VAT (moms) at the applicable rate (currently 25%) unless otherwise stated. For international clients outside the EU, VAT may not apply subject to reverse charge mechanism.",
          ],
        },

        "4_5_late": {
          title: "4.5 Late Payment",
          description:
            "Invoices are due within the timeframe specified on the invoice (typically 30 days). Late payments may incur:",
          items: [
            "Late payment fees as permitted by Swedish law",
            "Suspension of services until payment is received",
            "Interest charges on overdue amounts",
          ],
        },

        "4_6_additional": {
          title: "4.6 Additional Costs",
          description:
            "Unless explicitly included in the quotation, the following are not included in project costs and will be billed separately:",
          items: [
            "Domain registration and renewal fees",
            "Third-party services and subscriptions",
            "Stock photos or premium fonts (unless specified)",
            "Premium plugins or software licenses",
            "Content creation (copywriting, photography, videography)",
          ],
        },
      },

      "5_refund": {
        title: "5. Refund and Cancellation Policy",

        "5_1_provider_cancel": {
          title: "5.1 Cancellation by Service Provider",
          paragraphs: [
            "If I need to cancel a project before starting work, you will receive a full refund of any payments made, including the initial deposit.",
          ],
        },

        "5_2_client_cancel": {
          title: "5.2 Cancellation by Client",
          description: "If you decide to cancel the project:",
          items: [
            {
              label: "Before work begins",
              value:
                "You will receive a full refund of the initial deposit minus any administrative costs incurred (maximum 10% of deposit)",
            },
            {
              label: "After work has begun",
              value:
                "No refund will be provided for the initial deposit, as time and resources have already been invested in your project. You will receive all work completed up to the cancellation point",
            },
            {
              label: "After 50% completion",
              value:
                "The remaining 50% payment becomes due, prorated based on work completed",
            },
          ],
        },

        "5_3_abandonment": {
          title: "5.3 Project Abandonment",
          paragraphs: [
            "If you fail to respond to communications for more than 30 days, or fail to provide necessary materials for more than 60 days, the project may be considered abandoned. In such cases, no refunds will be issued, and I reserve the right to close the project and retain all payments made.",
          ],
        },

        "5_4_ongoing": {
          title: "5.4 Refunds for Ongoing Services",
          paragraphs: [
            "Monthly subscriptions can be cancelled with 30 days' notice. No refunds will be provided for partial months. Annual subscriptions are non-refundable after the first 30 days.",
          ],
        },
      },

      "6_ip": {
        title: "6. Intellectual Property Rights",

        "6_1_code": {
          title: "6.1 Code Ownership and Licensing",
          description:
            "Upon full payment, you receive a perpetual, worldwide, non-exclusive license to use, modify, and distribute the code developed for your project. However:",
          items: [
            "The code is published on my GitHub repository under the MIT License in my name",
            "I retain the right to reuse code, components, and techniques developed for your project in future projects",
            "You have full rights to use the code for your business purposes without restriction",
            "The MIT License allows anyone to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software",
          ],
        },

        "6_2_opensource": {
          title: "6.2 Open Source Components",
          paragraphs: [
            "I may use open-source libraries, frameworks, and tools in your project. These components remain subject to their original licenses. I will inform you of any significant open-source components used.",
          ],
        },

        "6_3_client_materials": {
          title: "6.3 Client-Provided Materials",
          paragraphs: [
            "You retain all rights to materials you provide (text, images, logos, etc.). You warrant that you have the legal right to use all materials provided and that their use does not infringe on any third-party rights.",
          ],
        },

        "6_4_portfolio": {
          title: "6.4 Portfolio Rights",
          description:
            "I reserve the right to include your project in my portfolio and promotional materials, including:",
          items: [
            "Displaying screenshots and descriptions of the work",
            "Linking to your live website",
            "Using the project as a case study",
            "Mentioning your company name (with your permission)",
          ],
          note: "If you require confidentiality or do not wish your project to be featured in my portfolio, please inform me in writing before the project begins.",
        },

        "6_5_third_party": {
          title: "6.5 Third-Party Rights",
          paragraphs: [
            "You are responsible for ensuring that all content, images, text, and other materials you provide do not infringe on any third-party copyrights, trademarks, or other intellectual property rights.",
          ],
        },
      },

      "7_client_responsibilities": {
        title: "7. Client Responsibilities",
        intro: "To ensure successful project completion, you agree to:",

        "7_1_communication": {
          title: "7.1 Timely Communication",
          items: [
            "Respond to inquiries and requests within a reasonable timeframe",
            "Provide clear, constructive feedback on designs and deliverables",
            "Attend scheduled meetings and calls",
          ],
        },

        "7_2_materials": {
          title: "7.2 Material Provision",
          items: [
            "Provide all necessary materials, content, images, and information in a timely manner",
            "Ensure all provided materials are properly licensed for use",
            "Provide access to necessary accounts and systems",
          ],
        },

        "7_3_decisions": {
          title: "7.3 Decision Making",
          items: [
            "Make timely decisions on designs and functionality",
            "Provide clear requirements and expectations",
            "Notify me promptly of any changes to requirements or scope",
          ],
        },

        "7_4_testing": {
          title: "7.4 Testing and Approval",
          items: [
            "Thoroughly test all functionality before final approval",
            "Provide written approval of completed work",
            "Report any issues or bugs in a timely manner",
          ],
        },

        conclusion:
          "Delays caused by failure to fulfill these responsibilities may result in project timeline extensions and are not my responsibility.",
      },

      "8_warranties": {
        title: "8. Warranties and Limitations of Liability",

        "8_1_service": {
          title: "8.1 Service Warranty",
          description: "I warrant that:",
          items: [
            "Services will be performed with professional skill and care",
            "The delivered work will substantially conform to the agreed specifications",
            "The code will be free from critical bugs and errors at the time of delivery",
          ],
        },

        "8_2_bugs": {
          title: "8.2 Bug Fixes and Support",
          description:
            "I provide a 90-day warranty period from the date of project completion for bug fixes related to:",
          covered: [
            "Code errors or defects in the delivered work",
            "Functionality not working as specified",
            "Critical security vulnerabilities in my code",
          ],
          notCovered: {
            title: "This warranty does not cover:",
            items: [
              "Issues caused by modifications made by you or third parties",
              "Problems arising from changes to third-party services or APIs",
              "Compatibility issues with new browser versions released after delivery",
              "Issues caused by your hosting environment (unless I provide hosting)",
              "Feature additions or enhancements beyond the original scope",
            ],
          },
        },

        "8_3_hosting": {
          title: "8.3 Hosting Warranty",
          description: "For hosting services, I guarantee:",
          items: [
            "99% uptime (excluding scheduled maintenance)",
            "Daily backups retained for 30 days",
            "SSL certificate management and renewal",
            "Basic security monitoring",
          ],
          note: "Scheduled maintenance will be announced at least 48 hours in advance whenever possible. Emergency maintenance may be performed without notice.",
        },

        "8_4_disclaimer": {
          title: "8.4 Disclaimer of Warranties",
          description:
            'Except as expressly stated in these Terms, I provide services "as is" without any warranties, express or implied, including but not limited to:',
          items: [
            "Warranties of merchantability or fitness for a particular purpose",
            "Guarantees of specific results or outcomes",
            "Warranties regarding third-party services or components",
            "Guarantees of error-free operation",
          ],
        },

        "8_5_limitation": {
          title: "8.5 Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by Swedish law, my total liability for any claims arising from or related to my services shall not exceed the total amount paid by you for the specific service giving rise to the claim.",
          ],
          notLiable: {
            title: "I shall not be liable for:",
            items: [
              "Indirect, incidental, special, consequential, or punitive damages",
              "Loss of profits, revenue, data, or business opportunities",
              "Costs of procurement of substitute services",
              "Damages arising from your use or inability to use the services",
              "Third-party claims against you",
              "Issues caused by factors beyond my reasonable control",
            ],
          },
        },

        "8_6_content": {
          title: "8.6 Client Content Liability",
          description:
            "You are solely responsible for all content you provide or publish through your website or application. I am not responsible for:",
          items: [
            "The accuracy, legality, or appropriateness of your content",
            "Copyright or trademark infringement in your content",
            "Legal compliance of your business practices",
            "Defamatory, offensive, or illegal content you publish",
          ],
        },
      },

      "9_confidentiality": {
        title: "9. Confidentiality",
        description:
          "I understand that during the course of our engagement, I may have access to confidential information about your business. I agree to:",
        items: [
          "Keep all confidential information private and secure",
          "Not disclose confidential information to third parties without your consent",
          "Use confidential information only for the purpose of providing services to you",
          "Return or destroy confidential information upon project completion or termination",
        ],
        paragraphs: [
          "Confidential information does not include information that is publicly available, already known to me, or independently developed by me.",
          "If your project requires a separate Non-Disclosure Agreement (NDA), please inform me before the project begins.",
        ],
      },

      "10_force_majeure": {
        title: "10. Force Majeure",
        description:
          "I shall not be liable for any delay or failure to perform my obligations due to circumstances beyond my reasonable control, including but not limited to:",
        items: [
          "Natural disasters, pandemics, or epidemics",
          "War, terrorism, or civil unrest",
          "Government actions or regulations",
          "Failure of third-party services (internet providers, hosting services, etc.)",
          "Power outages or hardware failures",
          "Strikes or labor disputes",
        ],
        conclusion:
          "In such events, the timeline will be extended by a reasonable period to account for the delay.",
      },

      "11_termination": {
        title: "11. Termination",

        "11_1_either_party": {
          title: "11.1 Termination by Either Party",
          description:
            "Either party may terminate the agreement for cause with written notice if the other party:",
          items: [
            "Materially breaches these Terms",
            "Fails to make required payments",
            "Becomes insolvent or bankrupt",
            "Engages in illegal or unethical conduct",
          ],
        },

        "11_2_effect": {
          title: "11.2 Effect of Termination",
          description: "Upon termination:",
          items: [
            "You must pay for all work completed up to the termination date",
            "I will provide all work completed to that point",
            "You will no longer have access to any ongoing services",
            "Sections related to payment, intellectual property, and confidentiality survive termination",
          ],
        },

        "11_3_hosting": {
          title: "11.3 Hosting Service Termination",
          paragraphs: [
            "If hosting services are terminated, you must migrate your website to another provider within 30 days. I will assist with the migration process at no additional charge if termination is not due to non-payment.",
          ],
        },
      },

      "12_indemnification": {
        title: "12. Indemnification",
        description:
          "You agree to indemnify, defend, and hold me harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:",
        items: [
          "Your use of the delivered services or products",
          "Content you provide or publish through your website or application",
          "Your violation of these Terms",
          "Your violation of any third-party rights",
          "Your business practices or operations",
        ],
      },

      "13_dispute": {
        title: "13. Dispute Resolution and Governing Law",

        "13_1_law": {
          title: "13.1 Governing Law",
          paragraphs: [
            "These Terms are governed by and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions.",
          ],
        },

        "13_2_resolution": {
          title: "13.2 Dispute Resolution",
          description:
            "In the event of any dispute arising from these Terms or our engagement:",
          steps: [
            {
              label: "Negotiation",
              value:
                "We agree to first attempt to resolve the dispute through good-faith negotiation",
            },
            {
              label: "Mediation",
              value:
                "If negotiation fails, we agree to attempt mediation before pursuing legal action",
            },
            {
              label: "Legal Action",
              value:
                "Any legal proceedings shall be brought in the courts of Stockholm, Sweden",
            },
          ],
        },

        "13_3_language": {
          title: "13.3 Language",
          paragraphs: [
            "These Terms are written in English. In case of any discrepancies between English and translated versions, the English version shall prevail.",
          ],
        },
      },

      "14_miscellaneous": {
        title: "14. Miscellaneous",

        "14_1_entire": {
          title: "14.1 Entire Agreement",
          paragraphs: [
            "These Terms, together with any project-specific agreements and quotations, constitute the entire agreement between us and supersede all prior agreements, understandings, and representations.",
          ],
        },

        "14_2_amendments": {
          title: "14.2 Amendments",
          paragraphs: [
            'I may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. For ongoing services, you will be notified of material changes at least 30 days in advance.',
            "Continued use of my services after changes constitutes acceptance of the new Terms.",
          ],
        },

        "14_3_severability": {
          title: "14.3 Severability",
          paragraphs: [
            "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",
          ],
        },

        "14_4_waiver": {
          title: "14.4 Waiver",
          paragraphs: [
            "No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term. My failure to enforce any right or provision shall not constitute a waiver of such right or provision.",
          ],
        },

        "14_5_assignment": {
          title: "14.5 Assignment",
          paragraphs: [
            "You may not assign or transfer these Terms or any rights hereunder without my prior written consent. I may assign these Terms to any successor entity in the event of a merger or acquisition.",
          ],
        },

        "14_6_contractor": {
          title: "14.6 Independent Contractor",
          paragraphs: [
            "I am an independent contractor and not an employee, partner, or agent of yours. Nothing in these Terms creates an employment, partnership, or agency relationship.",
          ],
        },
      },

      "15_contact": {
        title: "15. Contact Information",
        subtitle:
          "If you have any questions about these Terms of Service, please contact me:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sweden",
          email: "Email",
          phone: "Phone",
        },
        acceptance: {
          title: "Acceptance of Terms",
          text: "By using my services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you have any questions or concerns, please contact me before engaging my services.",
        },
      },
    },
    btn: {
      text: "Back to Home",
    },
  },
  es: {
    meta: {
      title: "Términos de Servicio | Carfdev",
      description:
        "Términos y condiciones para servicios de desarrollo web y alojamiento proporcionados por Carfdev. Lee nuestro acuerdo de servicio antes de comenzar tu proyecto.",
    },
    title: "Términos de Servicio",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introducción y Aceptación",
        paragraphs: [
          'Estos Términos de Servicio ("Términos") constituyen un acuerdo legalmente vinculante entre usted ("Cliente", "usted" o "su") y José Carlos Sanchez Fernandez, operando como Carfdev ("yo", "me", "mi" o "Proveedor de Servicios"), con sede en Estocolmo, Suecia.',
          "Al contratar mis servicios, enviar una consulta de proyecto o realizar un pago, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, por favor no utilice mis servicios.",
        ],
      },

      "2_services": {
        title: "2. Servicios Proporcionados",
        intro: "Ofrezco los siguientes servicios profesionales:",

        "2_1_development": {
          title: "2.1 Servicios de Desarrollo Web",
          items: [
            "Diseño y desarrollo de sitios web personalizados",
            "Soluciones de comercio electrónico",
            "Desarrollo de aplicaciones web",
            "Desarrollo de aplicaciones móviles",
            "Rediseño y modernización de sitios web",
            "Optimización de rendimiento",
            "Desarrollo e integración de APIs",
          ],
        },

        "2_2_ongoing": {
          title: "2.2 Servicios Continuos",
          items: [
            "Mantenimiento y soporte de sitios web",
            "Actualizaciones de seguridad y monitoreo",
            "Actualizaciones de contenido",
            "Monitoreo y optimización de rendimiento",
            "Soporte técnico",
          ],
        },

        "2_3_hosting": {
          title: "2.3 Servicios de Alojamiento",
          items: [
            "Alojamiento web en mi infraestructura gestionada",
            "Gestión de certificados SSL",
            "Copias de seguridad regulares",
            "Monitoreo básico de seguridad",
            "Garantía de disponibilidad del 99% (excluyendo mantenimiento programado)",
          ],
        },

        conclusion:
          "Todos los servicios se proporcionan como soluciones personalizadas y a medida, adaptadas a las necesidades y requisitos específicos de cada cliente.",
      },

      "3_project_process": {
        title: "3. Proceso del Proyecto",

        "3_1_consultation": {
          title: "3.1 Consulta y Presupuesto",
          description:
            "Todos los proyectos comienzan con una consulta gratuita donde discutimos sus requisitos, objetivos y presupuesto. Después de la consulta, proporcionaré un presupuesto detallado por escrito que incluye:",
          items: [
            "Alcance del trabajo y entregables",
            "Cronograma del proyecto e hitos",
            "Desglose total de costos",
            "Calendario de pagos",
            "Términos y condiciones específicos de su proyecto",
          ],
        },

        "3_2_agreement": {
          title: "3.2 Acuerdo del Proyecto",
          paragraphs: [
            "Una vez que acepte el presupuesto, entraremos en un acuerdo formal del proyecto. El proyecto comienza al recibir el pago inicial.",
          ],
        },

        "3_3_communication": {
          title: "3.3 Comunicación",
          paragraphs: [
            "Durante el proyecto, mantendré comunicación regular con usted por correo electrónico, teléfono o videollamadas según lo acordado. Me comprometo a responder a sus consultas dentro de 1-2 días hábiles.",
          ],
        },

        "3_4_revisions": {
          title: "3.4 Revisiones y Modificaciones",
          description:
            "Ofrezco revisiones ilimitadas durante el proceso de desarrollo para asegurar que el producto final cumpla con sus expectativas. Sin embargo:",
          items: [
            "Las revisiones deben estar dentro del alcance original del trabajo",
            "Los cambios importantes de alcance pueden requerir tiempo y costos adicionales, que se discutirán y acordarán antes de la implementación",
            "Las revisiones excesivas o cambios más allá del alcance original que causen retrasos significativos en el proyecto no son mi responsabilidad",
            "Me reservo el derecho de cobrar por trabajo adicional que esté fuera del alcance acordado",
          ],
        },
      },

      "4_payment": {
        title: "4. Términos de Pago",

        "4_1_structure": {
          title: "4.1 Estructura de Pago",
          description:
            "Todos los proyectos de desarrollo siguen esta estructura de pago:",
          items: [
            {
              label: "50% de pago inicial",
              value:
                "Requerido antes de comenzar el trabajo, vence dentro de 7 días de aceptar el presupuesto",
            },
            {
              label: "50% de pago final",
              value:
                "Vence al completar el proyecto y antes de la entrega final de todos los archivos y accesos",
            },
          ],
        },

        "4_2_ongoing": {
          title: "4.2 Servicios Continuos",
          paragraphs: [
            "Los servicios de mantenimiento, soporte y alojamiento se facturan mensual o anualmente según lo acordado en el contrato de servicio. El pago vence al comienzo de cada período de facturación.",
          ],
        },

        "4_3_methods": {
          title: "4.3 Métodos de Pago",
          description: "Acepto los siguientes métodos de pago:",
          items: [
            "Transferencia bancaria (Bankgiro/Plusgiro)",
            "Swish",
            "Transferencia bancaria internacional (para clientes internacionales)",
          ],
        },

        "4_4_currency": {
          title: "4.4 Moneda e IVA",
          paragraphs: [
            "Todos los precios se cotizan en Coronas Suecas (SEK) e incluyen el IVA sueco (moms) a la tasa aplicable (actualmente 25%) a menos que se indique lo contrario. Para clientes internacionales fuera de la UE, el IVA puede no aplicarse sujeto al mecanismo de inversión del sujeto pasivo.",
          ],
        },

        "4_5_late": {
          title: "4.5 Pago Tardío",
          description:
            "Las facturas vencen dentro del plazo especificado en la factura (típicamente 30 días). Los pagos tardíos pueden incurrir en:",
          items: [
            "Cargos por pago tardío según lo permitido por la ley sueca",
            "Suspensión de servicios hasta que se reciba el pago",
            "Cargos por intereses sobre montos vencidos",
          ],
        },

        "4_6_additional": {
          title: "4.6 Costos Adicionales",
          description:
            "A menos que esté explícitamente incluido en el presupuesto, lo siguiente no está incluido en los costos del proyecto y se facturará por separado:",
          items: [
            "Registro y renovación de dominio",
            "Servicios y suscripciones de terceros",
            "Fotos de stock o fuentes premium (a menos que se especifique)",
            "Plugins premium o licencias de software",
            "Creación de contenido (redacción, fotografía, videografía)",
          ],
        },
      },

      "5_refund": {
        title: "5. Política de Reembolso y Cancelación",

        "5_1_provider_cancel": {
          title: "5.1 Cancelación por el Proveedor de Servicios",
          paragraphs: [
            "Si necesito cancelar un proyecto antes de comenzar el trabajo, recibirá un reembolso completo de cualquier pago realizado, incluido el depósito inicial.",
          ],
        },

        "5_2_client_cancel": {
          title: "5.2 Cancelación por el Cliente",
          description: "Si decide cancelar el proyecto:",
          items: [
            {
              label: "Antes de que comience el trabajo",
              value:
                "Recibirá un reembolso completo del depósito inicial menos cualquier costo administrativo incurrido (máximo 10% del depósito)",
            },
            {
              label: "Después de que haya comenzado el trabajo",
              value:
                "No se proporcionará reembolso del depósito inicial, ya que el tiempo y los recursos ya se han invertido en su proyecto. Recibirá todo el trabajo completado hasta el punto de cancelación",
            },
            {
              label: "Después del 50% de finalización",
              value:
                "El pago restante del 50% vence, prorrateado según el trabajo completado",
            },
          ],
        },

        "5_3_abandonment": {
          title: "5.3 Abandono del Proyecto",
          paragraphs: [
            "Si no responde a las comunicaciones durante más de 30 días, o no proporciona los materiales necesarios durante más de 60 días, el proyecto puede considerarse abandonado. En tales casos, no se emitirán reembolsos y me reservo el derecho de cerrar el proyecto y retener todos los pagos realizados.",
          ],
        },

        "5_4_ongoing": {
          title: "5.4 Reembolsos por Servicios Continuos",
          paragraphs: [
            "Las suscripciones mensuales pueden cancelarse con 30 días de aviso. No se proporcionarán reembolsos por meses parciales. Las suscripciones anuales no son reembolsables después de los primeros 30 días.",
          ],
        },
      },

      "6_ip": {
        title: "6. Derechos de Propiedad Intelectual",

        "6_1_code": {
          title: "6.1 Propiedad y Licencia del Código",
          description:
            "Al realizar el pago completo, usted recibe una licencia perpetua, mundial y no exclusiva para usar, modificar y distribuir el código desarrollado para su proyecto. Sin embargo:",
          items: [
            "El código se publica en mi repositorio de GitHub bajo la Licencia MIT a mi nombre",
            "Me reservo el derecho de reutilizar código, componentes y técnicas desarrolladas para su proyecto en proyectos futuros",
            "Usted tiene todos los derechos para usar el código para sus fines comerciales sin restricciones",
            "La Licencia MIT permite a cualquiera usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software",
          ],
        },

        "6_2_opensource": {
          title: "6.2 Componentes de Código Abierto",
          paragraphs: [
            "Puedo usar bibliotecas, frameworks y herramientas de código abierto en su proyecto. Estos componentes permanecen sujetos a sus licencias originales. Le informaré sobre cualquier componente de código abierto significativo utilizado.",
          ],
        },

        "6_3_client_materials": {
          title: "6.3 Materiales Proporcionados por el Cliente",
          paragraphs: [
            "Usted retiene todos los derechos sobre los materiales que proporciona (texto, imágenes, logotipos, etc.). Usted garantiza que tiene el derecho legal de usar todos los materiales proporcionados y que su uso no infringe los derechos de terceros.",
          ],
        },

        "6_4_portfolio": {
          title: "6.4 Derechos de Portafolio",
          description:
            "Me reservo el derecho de incluir su proyecto en mi portafolio y materiales promocionales, incluyendo:",
          items: [
            "Mostrar capturas de pantalla y descripciones del trabajo",
            "Enlazar a su sitio web en vivo",
            "Usar el proyecto como estudio de caso",
            "Mencionar el nombre de su empresa (con su permiso)",
          ],
          note: "Si requiere confidencialidad o no desea que su proyecto aparezca en mi portafolio, por favor infórmeme por escrito antes de que comience el proyecto.",
        },

        "6_5_third_party": {
          title: "6.5 Derechos de Terceros",
          paragraphs: [
            "Usted es responsable de asegurar que todo el contenido, imágenes, texto y otros materiales que proporcione no infrinjan los derechos de autor, marcas comerciales u otros derechos de propiedad intelectual de terceros.",
          ],
        },
      },

      "7_client_responsibilities": {
        title: "7. Responsabilidades del Cliente",
        intro:
          "Para asegurar la finalización exitosa del proyecto, usted acepta:",

        "7_1_communication": {
          title: "7.1 Comunicación Oportuna",
          items: [
            "Responder a consultas y solicitudes dentro de un plazo razonable",
            "Proporcionar retroalimentación clara y constructiva sobre diseños y entregables",
            "Asistir a reuniones y llamadas programadas",
          ],
        },

        "7_2_materials": {
          title: "7.2 Provisión de Materiales",
          items: [
            "Proporcionar todos los materiales, contenido, imágenes e información necesarios de manera oportuna",
            "Asegurar que todos los materiales proporcionados tengan la licencia adecuada para su uso",
            "Proporcionar acceso a cuentas y sistemas necesarios",
          ],
        },

        "7_3_decisions": {
          title: "7.3 Toma de Decisiones",
          items: [
            "Tomar decisiones oportunas sobre diseños y funcionalidad",
            "Proporcionar requisitos y expectativas claros",
            "Notificarme prontamente sobre cualquier cambio en los requisitos o alcance",
          ],
        },

        "7_4_testing": {
          title: "7.4 Pruebas y Aprobación",
          items: [
            "Probar exhaustivamente toda la funcionalidad antes de la aprobación final",
            "Proporcionar aprobación por escrito del trabajo completado",
            "Reportar cualquier problema o error de manera oportuna",
          ],
        },

        conclusion:
          "Los retrasos causados por el incumplimiento de estas responsabilidades pueden resultar en extensiones del cronograma del proyecto y no son mi responsabilidad.",
      },

      "8_warranties": {
        title: "8. Garantías y Limitaciones de Responsabilidad",

        "8_1_service": {
          title: "8.1 Garantía de Servicio",
          description: "Garantizo que:",
          items: [
            "Los servicios se realizarán con habilidad y cuidado profesional",
            "El trabajo entregado se ajustará sustancialmente a las especificaciones acordadas",
            "El código estará libre de errores y bugs críticos en el momento de la entrega",
          ],
        },

        "8_2_bugs": {
          title: "8.2 Corrección de Errores y Soporte",
          description:
            "Proporciono un período de garantía de 90 días desde la fecha de finalización del proyecto para corrección de errores relacionados con:",
          covered: [
            "Errores o defectos de código en el trabajo entregado",
            "Funcionalidad que no funciona según lo especificado",
            "Vulnerabilidades de seguridad críticas en mi código",
          ],
          notCovered: {
            title: "Esta garantía no cubre:",
            items: [
              "Problemas causados por modificaciones realizadas por usted o terceros",
              "Problemas derivados de cambios en servicios o APIs de terceros",
              "Problemas de compatibilidad con nuevas versiones de navegadores lanzadas después de la entrega",
              "Problemas causados por su entorno de alojamiento (a menos que yo proporcione el alojamiento)",
              "Adiciones de características o mejoras más allá del alcance original",
            ],
          },
        },

        "8_3_hosting": {
          title: "8.3 Garantía de Alojamiento",
          description: "Para servicios de alojamiento, garantizo:",
          items: [
            "99% de tiempo de actividad (excluyendo mantenimiento programado)",
            "Copias de seguridad diarias retenidas durante 30 días",
            "Gestión y renovación de certificados SSL",
            "Monitoreo básico de seguridad",
          ],
          note: "El mantenimiento programado se anunciará con al menos 48 horas de anticipación siempre que sea posible. El mantenimiento de emergencia puede realizarse sin previo aviso.",
        },

        "8_4_disclaimer": {
          title: "8.4 Exención de Garantías",
          description:
            'Excepto como se indica expresamente en estos Términos, proporciono servicios "tal cual" sin ninguna garantía, expresa o implícita, incluyendo pero no limitado a:',
          items: [
            "Garantías de comerciabilidad o idoneidad para un propósito particular",
            "Garantías de resultados o resultados específicos",
            "Garantías con respecto a servicios o componentes de terceros",
            "Garantías de operación libre de errores",
          ],
        },

        "8_5_limitation": {
          title: "8.5 Limitación de Responsabilidad",
          paragraphs: [
            "En la máxima medida permitida por la ley sueca, mi responsabilidad total por cualquier reclamación que surja de o esté relacionada con mis servicios no excederá el monto total pagado por usted por el servicio específico que da lugar a la reclamación.",
          ],
          notLiable: {
            title: "No seré responsable de:",
            items: [
              "Daños indirectos, incidentales, especiales, consecuentes o punitivos",
              "Pérdida de beneficios, ingresos, datos u oportunidades de negocio",
              "Costos de adquisición de servicios sustitutos",
              "Daños derivados de su uso o incapacidad de usar los servicios",
              "Reclamaciones de terceros contra usted",
              "Problemas causados por factores fuera de mi control razonable",
            ],
          },
        },

        "8_6_content": {
          title: "8.6 Responsabilidad del Contenido del Cliente",
          description:
            "Usted es el único responsable de todo el contenido que proporciona o publica a través de su sitio web o aplicación. No soy responsable de:",
          items: [
            "La precisión, legalidad o adecuación de su contenido",
            "Infracción de derechos de autor o marcas comerciales en su contenido",
            "Cumplimiento legal de sus prácticas comerciales",
            "Contenido difamatorio, ofensivo o ilegal que publique",
          ],
        },
      },

      "9_confidentiality": {
        title: "9. Confidencialidad",
        description:
          "Entiendo que durante el curso de nuestro compromiso, puedo tener acceso a información confidencial sobre su negocio. Acepto:",
        items: [
          "Mantener toda la información confidencial privada y segura",
          "No divulgar información confidencial a terceros sin su consentimiento",
          "Usar información confidencial solo con el propósito de proporcionar servicios a usted",
          "Devolver o destruir la información confidencial al completar o terminar el proyecto",
        ],
        paragraphs: [
          "La información confidencial no incluye información que esté disponible públicamente, ya sea conocida por mí, o desarrollada independientemente por mí.",
          "Si su proyecto requiere un Acuerdo de No Divulgación (NDA) separado, por favor infórmeme antes de que comience el proyecto.",
        ],
      },

      "10_force_majeure": {
        title: "10. Fuerza Mayor",
        description:
          "No seré responsable de ningún retraso o incumplimiento en el desempeño de mis obligaciones debido a circunstancias fuera de mi control razonable, incluyendo pero no limitado a:",
        items: [
          "Desastres naturales, pandemias o epidemias",
          "Guerra, terrorismo o disturbios civiles",
          "Acciones o regulaciones gubernamentales",
          "Falla de servicios de terceros (proveedores de internet, servicios de alojamiento, etc.)",
          "Cortes de energía o fallas de hardware",
          "Huelgas o disputas laborales",
        ],
        conclusion:
          "En tales eventos, el cronograma se extenderá por un período razonable para tener en cuenta el retraso.",
      },

      "11_termination": {
        title: "11. Terminación",

        "11_1_either_party": {
          title: "11.1 Terminación por Cualquiera de las Partes",
          description:
            "Cualquiera de las partes puede terminar el acuerdo por causa con aviso por escrito si la otra parte:",
          items: [
            "Incumple materialmente estos Términos",
            "No realiza los pagos requeridos",
            "Se vuelve insolvente o en quiebra",
            "Participa en conducta ilegal o poco ética",
          ],
        },

        "11_2_effect": {
          title: "11.2 Efecto de la Terminación",
          description: "Al terminar:",
          items: [
            "Debe pagar por todo el trabajo completado hasta la fecha de terminación",
            "Proporcionaré todo el trabajo completado hasta ese momento",
            "Ya no tendrá acceso a ningún servicio continuo",
            "Las secciones relacionadas con pago, propiedad intelectual y confidencialidad sobreviven a la terminación",
          ],
        },

        "11_3_hosting": {
          title: "11.3 Terminación del Servicio de Alojamiento",
          paragraphs: [
            "Si se terminan los servicios de alojamiento, debe migrar su sitio web a otro proveedor dentro de 30 días. Asistiré con el proceso de migración sin cargo adicional si la terminación no es debido a falta de pago.",
          ],
        },
      },

      "12_indemnification": {
        title: "12. Indemnización",
        description:
          "Usted acepta indemnizar, defender y mantenerme indemne de cualquier reclamo, daño, pérdida, responsabilidad y gasto (incluyendo honorarios legales) que surja de:",
        items: [
          "Su uso de los servicios o productos entregados",
          "Contenido que proporciona o publica a través de su sitio web o aplicación",
          "Su violación de estos Términos",
          "Su violación de cualquier derecho de terceros",
          "Sus prácticas u operaciones comerciales",
        ],
      },

      "13_dispute": {
        title: "13. Resolución de Disputas y Ley Aplicable",

        "13_1_law": {
          title: "13.1 Ley Aplicable",
          paragraphs: [
            "Estos Términos se rigen e interpretan de acuerdo con las leyes de Suecia, sin tener en cuenta sus disposiciones de conflicto de leyes.",
          ],
        },

        "13_2_resolution": {
          title: "13.2 Resolución de Disputas",
          description:
            "En caso de cualquier disputa que surja de estos Términos o nuestro compromiso:",
          steps: [
            {
              label: "Negociación",
              value:
                "Acordamos intentar primero resolver la disputa a través de negociación de buena fe",
            },
            {
              label: "Mediación",
              value:
                "Si la negociación falla, acordamos intentar la mediación antes de emprender acciones legales",
            },
            {
              label: "Acción Legal",
              value:
                "Cualquier procedimiento legal se llevará a cabo en los tribunales de Estocolmo, Suecia",
            },
          ],
        },

        "13_3_language": {
          title: "13.3 Idioma",
          paragraphs: [
            "Estos Términos están escritos en inglés. En caso de cualquier discrepancia entre las versiones en inglés y traducidas, prevalecerá la versión en inglés.",
          ],
        },
      },

      "14_miscellaneous": {
        title: "14. Varios",

        "14_1_entire": {
          title: "14.1 Acuerdo Completo",
          paragraphs: [
            "Estos Términos, junto con cualquier acuerdo específico del proyecto y presupuestos, constituyen el acuerdo completo entre nosotros y reemplazan todos los acuerdos, entendimientos y representaciones previos.",
          ],
        },

        "14_2_amendments": {
          title: "14.2 Enmiendas",
          paragraphs: [
            'Puedo actualizar estos Términos de vez en cuando. Los cambios se publicarán en esta página con una fecha "Última actualización" actualizada. Para servicios continuos, se le notificará de cambios materiales con al menos 30 días de anticipación.',
            "El uso continuado de mis servicios después de los cambios constituye la aceptación de los nuevos Términos.",
          ],
        },

        "14_3_severability": {
          title: "14.3 Divisibilidad",
          paragraphs: [
            "Si se determina que alguna disposición de estos Términos es inaplicable o inválida, esa disposición se limitará o eliminará en la medida mínima necesaria, y las disposiciones restantes permanecerán en pleno vigor y efecto.",
          ],
        },

        "14_4_waiver": {
          title: "14.4 Renuncia",
          paragraphs: [
            "Ninguna renuncia de cualquier término o condición se considerará una renuncia adicional o continua de dicho término o cualquier otro término. Mi incumplimiento en hacer cumplir cualquier derecho o disposición no constituirá una renuncia a dicho derecho o disposición.",
          ],
        },

        "14_5_assignment": {
          title: "14.5 Cesión",
          paragraphs: [
            "No puede ceder o transferir estos Términos o cualquier derecho aquí sin mi consentimiento previo por escrito. Puedo ceder estos Términos a cualquier entidad sucesora en caso de fusión o adquisición.",
          ],
        },

        "14_6_contractor": {
          title: "14.6 Contratista Independiente",
          paragraphs: [
            "Soy un contratista independiente y no un empleado, socio o agente suyo. Nada en estos Términos crea una relación laboral, de asociación o de agencia.",
          ],
        },
      },

      "15_contact": {
        title: "15. Información de Contacto",
        subtitle:
          "Si tiene alguna pregunta sobre estos Términos de Servicio, por favor contácteme:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Estocolmo, Suecia",
          email: "Correo electrónico",
          phone: "Teléfono",
        },
        acceptance: {
          title: "Aceptación de los Términos",
          text: "Al usar mis servicios, usted reconoce que ha leído y entendido estos Términos de Servicio y acepta estar sujeto a ellos. Si tiene alguna pregunta o inquietud, por favor contácteme antes de contratar mis servicios.",
        },
      },
    },
    btn: {
      text: "Volver al Inicio",
    },
  },
  sv: {
    meta: {
      title: "Användarvillkor | Carfdev",
      description:
        "Villkor för webbutveckling och webbhotell som tillhandahålls av Carfdev. Läs vårt serviceavtal innan du startar ditt projekt.",
    },
    title: "Användarvillkor",
    lastUpdated: new Date("2025-11-15"),

    sections: {
      "1_introduction": {
        title: "1. Introduktion och Acceptans",
        paragraphs: [
          'Dessa Användarvillkor ("Villkor") utgör ett juridiskt bindande avtal mellan dig ("Kund", "du" eller "din") och José Carlos Sanchez Fernandez, som driver Carfdev ("jag", "mig", "min" eller "Tjänsteleverantör"), baserad i Stockholm, Sverige.',
          "Genom att anlita mina tjänster, skicka en projektförfrågan eller göra en betalning, bekräftar du att du har läst, förstått och samtycker till att vara bunden av dessa Villkor. Om du inte samtycker till dessa Villkor, vänligen använd inte mina tjänster.",
        ],
      },

      "2_services": {
        title: "2. Tillhandahållna Tjänster",
        intro: "Jag erbjuder följande professionella tjänster:",

        "2_1_development": {
          title: "2.1 Webbutvecklingstjänster",
          items: [
            "Anpassad webbplatsdesign och utveckling",
            "E-handelslösningar",
            "Utveckling av webbapplikationer",
            "Utveckling av mobilapplikationer",
            "Omdesign och modernisering av webbplatser",
            "Prestandaoptimering",
            "API-utveckling och integration",
          ],
        },

        "2_2_ongoing": {
          title: "2.2 Löpande Tjänster",
          items: [
            "Webbplatsunderhåll och support",
            "Säkerhetsuppdateringar och övervakning",
            "Innehållsuppdateringar",
            "Prestandaövervakning och optimering",
            "Teknisk support",
          ],
        },

        "2_3_hosting": {
          title: "2.3 Webbhotell",
          items: [
            "Webbhotell på min hanterade infrastruktur",
            "SSL-certifikathantering",
            "Regelbundna säkerhetskopior",
            "Grundläggande säkerhetsövervakning",
            "99% drifttidsgaranti (exklusive schemalagt underhåll)",
          ],
        },

        conclusion:
          "Alla tjänster tillhandahålls som anpassade, personliga lösningar skräddarsydda för varje kunds specifika behov och krav.",
      },

      "3_project_process": {
        title: "3. Projektprocess",

        "3_1_consultation": {
          title: "3.1 Konsultation och Offert",
          description:
            "Alla projekt börjar med en kostnadsfri konsultation där vi diskuterar dina krav, mål och budget. Efter konsultationen kommer jag att tillhandahålla en detaljerad skriftlig offert som beskriver:",
          items: [
            "Arbetets omfattning och leverabler",
            "Projekttidslinje och milstolpar",
            "Total kostnadsuppdelning",
            "Betalningsschema",
            "Villkor som är specifika för ditt projekt",
          ],
        },

        "3_2_agreement": {
          title: "3.2 Projektavtal",
          paragraphs: [
            "När du accepterar offerten kommer vi att ingå ett formellt projektavtal. Projektet börjar vid mottagande av den initiala betalningen.",
          ],
        },

        "3_3_communication": {
          title: "3.3 Kommunikation",
          paragraphs: [
            "Under projektet kommer jag att upprätthålla regelbunden kommunikation med dig via e-post, telefon eller videosamtal enligt överenskommelse. Jag åtar mig att svara på dina förfrågningar inom 1-2 arbetsdagar.",
          ],
        },

        "3_4_revisions": {
          title: "3.4 Granskningar och Revideringar",
          description:
            "Jag erbjuder obegränsade revideringar under utvecklingsprocessen för att säkerställa att slutprodukten uppfyller dina förväntningar. Dock:",
          items: [
            "Revideringar måste vara inom det ursprungliga arbetets omfattning",
            "Större omfattningsändringar kan kräva ytterligare tid och kostnader, vilket kommer att diskuteras och överenskommas innan implementering",
            "Överdrivna revideringar eller ändringar utöver den ursprungliga omfattningen som orsakar betydande projektförseningar är inte mitt ansvar",
            "Jag förbehåller mig rätten att debitera för ytterligare arbete som faller utanför den överenskomna omfattningen",
          ],
        },
      },

      "4_payment": {
        title: "4. Betalningsvillkor",

        "4_1_structure": {
          title: "4.1 Betalningsstruktur",
          description:
            "Alla utvecklingsprojekt följer denna betalningsstruktur:",
          items: [
            {
              label: "50% förskottsbetalning",
              value:
                "Krävs innan arbetet börjar, förfaller inom 7 dagar efter att offerten accepterats",
            },
            {
              label: "50% slutbetalning",
              value:
                "Förfaller vid projektets slutförande och innan slutleverans av alla filer och åtkomst",
            },
          ],
        },

        "4_2_ongoing": {
          title: "4.2 Löpande Tjänster",
          paragraphs: [
            "Underhålls-, support- och webbhotelltjänster faktureras månadsvis eller årligen enligt överenskommelse i servicekontraktet. Betalning förfaller i början av varje faktureringsperiod.",
          ],
        },

        "4_3_methods": {
          title: "4.3 Betalningsmetoder",
          description: "Jag accepterar följande betalningsmetoder:",
          items: [
            "Banköverföring (Bankgiro/Plusgiro)",
            "Swish",
            "Internationell banköverföring (för internationella kunder)",
          ],
        },

        "4_4_currency": {
          title: "4.4 Valuta och Moms",
          paragraphs: [
            "Alla priser anges i svenska kronor (SEK) och inkluderar svensk moms till gällande skattesats (för närvarande 25%) om inte annat anges. För internationella kunder utanför EU kan moms inte gälla föremål för omvänd skattskyldighet.",
          ],
        },

        "4_5_late": {
          title: "4.5 Sen Betalning",
          description:
            "Fakturor förfaller inom den tidsram som anges på fakturan (vanligtvis 30 dagar). Sena betalningar kan medföra:",
          items: [
            "Förseningsavgifter enligt svensk lag",
            "Avbrott i tjänster tills betalning har mottagits",
            "Räntekostnader på förfallna belopp",
          ],
        },

        "4_6_additional": {
          title: "4.6 Ytterligare Kostnader",
          description:
            "Om det inte uttryckligen ingår i offerten ingår följande inte i projektkostnaderna och kommer att faktureras separat:",
          items: [
            "Domänregistrering och förnyelseavgifter",
            "Tredjepartstjänster och prenumerationer",
            "Stockfoton eller premiumteckensnitt (om inte specificerat)",
            "Premiumplugins eller programvarulicenser",
            "Innehållsskapande (copywriting, fotografering, videoproduktion)",
          ],
        },
      },

      "5_refund": {
        title: "5. Återbetalnings- och Avbokningspolicy",

        "5_1_provider_cancel": {
          title: "5.1 Avbokning av Tjänsteleverantör",
          paragraphs: [
            "Om jag behöver avboka ett projekt innan arbetet börjar, kommer du att få full återbetalning av eventuella gjorda betalningar, inklusive den initiala depositionen.",
          ],
        },

        "5_2_client_cancel": {
          title: "5.2 Avbokning av Kund",
          description: "Om du bestämmer dig för att avboka projektet:",
          items: [
            {
              label: "Innan arbetet börjar",
              value:
                "Du kommer att få full återbetalning av den initiala depositionen minus eventuella administrativa kostnader (max 10% av depositionen)",
            },
            {
              label: "Efter att arbetet har börjat",
              value:
                "Ingen återbetalning kommer att ges för den initiala depositionen, eftersom tid och resurser redan har investerats i ditt projekt. Du kommer att få allt arbete som slutförts fram till avbokningspunkten",
            },
            {
              label: "Efter 50% slutförande",
              value:
                "Den återstående 50% betalningen förfaller, proportionell baserat på slutfört arbete",
            },
          ],
        },

        "5_3_abandonment": {
          title: "5.3 Projektövergivande",
          paragraphs: [
            "Om du inte svarar på kommunikation i mer än 30 dagar, eller inte tillhandahåller nödvändigt material i mer än 60 dagar, kan projektet anses övergivet. I sådana fall kommer inga återbetalningar att utfärdas, och jag förbehåller mig rätten att stänga projektet och behålla alla gjorda betalningar.",
          ],
        },

        "5_4_ongoing": {
          title: "5.4 Återbetalningar för Löpande Tjänster",
          paragraphs: [
            "Månadsprenumerationer kan avbokas med 30 dagars varsel. Inga återbetalningar kommer att ges för delmånader. Årsprenumerationer är inte återbetalningsbara efter de första 30 dagarna.",
          ],
        },
      },

      "6_ip": {
        title: "6. Immateriella Rättigheter",

        "6_1_code": {
          title: "6.1 Kodägarskap och Licensiering",
          description:
            "Vid full betalning får du en evig, världsomspännande, icke-exklusiv licens att använda, modifiera och distribuera koden som utvecklats för ditt projekt. Dock:",
          items: [
            "Koden publiceras på mitt GitHub-repository under MIT-licensen i mitt namn",
            "Jag förbehåller mig rätten att återanvända kod, komponenter och tekniker som utvecklats för ditt projekt i framtida projekt",
            "Du har fulla rättigheter att använda koden för dina affärsändamål utan begränsningar",
            "MIT-licensen tillåter vem som helst att använda, kopiera, modifiera, slå samman, publicera, distribuera, underlicensiera och/eller sälja kopior av mjukvaran",
          ],
        },

        "6_2_opensource": {
          title: "6.2 Öppen Källkodskomponenter",
          paragraphs: [
            "Jag kan använda bibliotek, ramverk och verktyg med öppen källkod i ditt projekt. Dessa komponenter förblir föremål för sina ursprungliga licenser. Jag kommer att informera dig om eventuella betydande öppen källkodskomponenter som används.",
          ],
        },

        "6_3_client_materials": {
          title: "6.3 Kundtillhandahållet Material",
          paragraphs: [
            "Du behåller alla rättigheter till material du tillhandahåller (text, bilder, logotyper, etc.). Du garanterar att du har laglig rätt att använda allt tillhandahållet material och att deras användning inte inkräktar på tredje parts rättigheter.",
          ],
        },

        "6_4_portfolio": {
          title: "6.4 Portföljrättigheter",
          description:
            "Jag förbehåller mig rätten att inkludera ditt projekt i min portfölj och marknadsföringsmaterial, inklusive:",
          items: [
            "Visa skärmdumpar och beskrivningar av arbetet",
            "Länka till din live-webbplats",
            "Använda projektet som fallstudie",
            "Nämna ditt företagsnamn (med ditt tillstånd)",
          ],
          note: "Om du kräver konfidentialitet eller inte vill att ditt projekt ska presenteras i min portfölj, vänligen informera mig skriftligt innan projektet börjar.",
        },

        "6_5_third_party": {
          title: "6.5 Tredjepartsrättigheter",
          paragraphs: [
            "Du är ansvarig för att säkerställa att allt innehåll, bilder, text och annat material du tillhandahåller inte inkräktar på tredje parts upphovsrätter, varumärken eller andra immateriella rättigheter.",
          ],
        },
      },

      "7_client_responsibilities": {
        title: "7. Kundansvar",
        intro:
          "För att säkerställa framgångsrikt projektslutförande samtycker du till att:",

        "7_1_communication": {
          title: "7.1 Snabb Kommunikation",
          items: [
            "Svara på förfrågningar och begäranden inom rimlig tid",
            "Ge tydlig, konstruktiv feedback på design och leverabler",
            "Delta i schemalagda möten och samtal",
          ],
        },

        "7_2_materials": {
          title: "7.2 Materialtillhandahållande",
          items: [
            "Tillhandahålla allt nödvändigt material, innehåll, bilder och information i tid",
            "Säkerställa att allt tillhandahållet material är korrekt licensierat för användning",
            "Ge åtkomst till nödvändiga konton och system",
          ],
        },

        "7_3_decisions": {
          title: "7.3 Beslutsfattande",
          items: [
            "Fatta snabba beslut om design och funktionalitet",
            "Tillhandahålla tydliga krav och förväntningar",
            "Meddela mig omgående om eventuella ändringar av krav eller omfattning",
          ],
        },

        "7_4_testing": {
          title: "7.4 Testning och Godkännande",
          items: [
            "Noggrant testa all funktionalitet innan slutgodkännande",
            "Ge skriftligt godkännande av slutfört arbete",
            "Rapportera eventuella problem eller buggar i tid",
          ],
        },

        conclusion:
          "Förseningar orsakade av misslyckande att uppfylla dessa ansvarsområden kan resultera i projektets tidslinjeförlängningar och är inte mitt ansvar.",
      },

      "8_warranties": {
        title: "8. Garantier och Ansvarsbegränsningar",

        "8_1_service": {
          title: "8.1 Servicegaranti",
          description: "Jag garanterar att:",
          items: [
            "Tjänster kommer att utföras med professionell skicklighet och omsorg",
            "Det levererade arbetet kommer väsentligt att överensstämma med de överenskomna specifikationerna",
            "Koden kommer att vara fri från kritiska buggar och fel vid leveranstillfället",
          ],
        },

        "8_2_bugs": {
          title: "8.2 Buggfixar och Support",
          description:
            "Jag tillhandahåller en 90-dagars garantiperiod från projektets slutförandedatum för buggfixar relaterade till:",
          covered: [
            "Kodfel eller defekter i det levererade arbetet",
            "Funktionalitet som inte fungerar som specificerat",
            "Kritiska säkerhetssårbarheter i min kod",
          ],
          notCovered: {
            title: "Denna garanti täcker inte:",
            items: [
              "Problem orsakade av ändringar gjorda av dig eller tredje parter",
              "Problem som uppstår från ändringar i tredjepartstjänster eller API:er",
              "Kompatibilitetsproblem med nya webbläsarversioner släppta efter leverans",
              "Problem orsakade av din webbhotellmiljö (om jag inte tillhandahåller webbhotellet)",
              "Funktionstillägg eller förbättringar utöver den ursprungliga omfattningen",
            ],
          },
        },

        "8_3_hosting": {
          title: "8.3 Webbhotellgaranti",
          description: "För webbhotelltjänster garanterar jag:",
          items: [
            "99% drifttid (exklusive schemalagt underhåll)",
            "Dagliga säkerhetskopior som behålls i 30 dagar",
            "SSL-certifikathantering och förnyelse",
            "Grundläggande säkerhetsövervakning",
          ],
          note: "Schemalagt underhåll kommer att meddelas minst 48 timmar i förväg när det är möjligt. Akut underhåll kan utföras utan föregående meddelande.",
        },

        "8_4_disclaimer": {
          title: "8.4 Ansvarsfriskrivning för Garantier",
          description:
            'Förutom vad som uttryckligen anges i dessa Villkor tillhandahåller jag tjänster "i befintligt skick" utan några garantier, uttryckliga eller underförstådda, inklusive men inte begränsat till:',
          items: [
            "Garantier för säljbarhet eller lämplighet för ett särskilt ändamål",
            "Garantier för specifika resultat eller utfall",
            "Garantier angående tredjepartstjänster eller komponenter",
            "Garantier för felfri drift",
          ],
        },

        "8_5_limitation": {
          title: "8.5 Ansvarsbegränsning",
          paragraphs: [
            "I den utsträckning som tillåts enligt svensk lag ska mitt totala ansvar för eventuella anspråk som uppstår från eller är relaterade till mina tjänster inte överstiga det totala beloppet som betalats av dig för den specifika tjänsten som ger upphov till anspråket.",
          ],
          notLiable: {
            title: "Jag ska inte vara ansvarig för:",
            items: [
              "Indirekta, tillfälliga, speciella, följd- eller straffskador",
              "Förlust av vinster, intäkter, data eller affärsmöjligheter",
              "Kostnader för upphandling av ersättningstjänster",
              "Skador som uppstår från din användning eller oförmåga att använda tjänsterna",
              "Tredjepartsanspråk mot dig",
              "Problem orsakade av faktorer utanför min rimliga kontroll",
            ],
          },
        },

        "8_6_content": {
          title: "8.6 Kundinnehållsansvar",
          description:
            "Du är ensam ansvarig för allt innehåll du tillhandahåller eller publicerar genom din webbplats eller applikation. Jag är inte ansvarig för:",
          items: [
            "Riktigheten, lagligheten eller lämpligheten av ditt innehåll",
            "Upphovsrätts- eller varumärkesintrång i ditt innehåll",
            "Juridisk efterlevnad av dina affärspraxis",
            "Förtalande, stötande eller olagligt innehåll du publicerar",
          ],
        },
      },

      "9_confidentiality": {
        title: "9. Konfidentialitet",
        description:
          "Jag förstår att under vårt uppdrag kan jag få tillgång till konfidentiell information om ditt företag. Jag samtycker till att:",
        items: [
          "Hålla all konfidentiell information privat och säker",
          "Inte avslöja konfidentiell information till tredje part utan ditt samtycke",
          "Endast använda konfidentiell information i syfte att tillhandahålla tjänster till dig",
          "Returnera eller förstöra konfidentiell information vid projektets slutförande eller avslutande",
        ],
        paragraphs: [
          "Konfidentiell information inkluderar inte information som är allmänt tillgänglig, redan känd för mig eller oberoende utvecklad av mig.",
          "Om ditt projekt kräver ett separat sekretessavtal (NDA), vänligen informera mig innan projektet börjar.",
        ],
      },

      "10_force_majeure": {
        title: "10. Force Majeure",
        description:
          "Jag ska inte vara ansvarig för eventuell försening eller misslyckande att fullgöra mina åtaganden på grund av omständigheter utanför min rimliga kontroll, inklusive men inte begränsat till:",
        items: [
          "Naturkatastrofer, pandemier eller epidemier",
          "Krig, terrorism eller civila oroligheter",
          "Regeringsåtgärder eller regler",
          "Fel i tredjepartstjänster (internetleverantörer, webbhotelltjänster, etc.)",
          "Strömavbrott eller hårdvarufel",
          "Strejker eller arbetskonflikter",
        ],
        conclusion:
          "I sådana händelser kommer tidslinjen att förlängas med en rimlig period för att ta hänsyn till förseningen.",
      },

      "11_termination": {
        title: "11. Uppsägning",

        "11_1_either_party": {
          title: "11.1 Uppsägning av Endera Parten",
          description:
            "Endera parten kan säga upp avtalet av skäl med skriftligt meddelande om den andra parten:",
          items: [
            "Väsentligt bryter mot dessa Villkor",
            "Misslyckas med att göra erforderliga betalningar",
            "Blir insolvent eller går i konkurs",
            "Ägnar sig åt olagligt eller oetiskt beteende",
          ],
        },

        "11_2_effect": {
          title: "11.2 Effekt av Uppsägning",
          description: "Vid uppsägning:",
          items: [
            "Du måste betala för allt arbete som slutförts fram till uppsägningsdatumet",
            "Jag kommer att tillhandahålla allt arbete som slutförts fram till den punkten",
            "Du kommer inte längre ha tillgång till några löpande tjänster",
            "Avsnitt relaterade till betalning, immateriella rättigheter och konfidentialitet överlever uppsägningen",
          ],
        },

        "11_3_hosting": {
          title: "11.3 Uppsägning av Webbhotelltjänst",
          paragraphs: [
            "Om webbhotelltjänster sägs upp måste du migrera din webbplats till en annan leverantör inom 30 dagar. Jag kommer att assistera med migreringsprocessen utan extra kostnad om uppsägningen inte beror på utebliven betalning.",
          ],
        },
      },

      "12_indemnification": {
        title: "12. Gottgörelse",
        description:
          "Du samtycker till att gottgöra, försvara och hålla mig skadeslös från eventuella anspråk, skador, förluster, skulder och kostnader (inklusive juridiska avgifter) som uppstår från:",
        items: [
          "Din användning av de levererade tjänsterna eller produkterna",
          "Innehåll du tillhandahåller eller publicerar genom din webbplats eller applikation",
          "Din överträdelse av dessa Villkor",
          "Din överträdelse av tredje parts rättigheter",
          "Dina affärspraxis eller verksamhet",
        ],
      },

      "13_dispute": {
        title: "13. Tvistlösning och Tillämplig Lag",

        "13_1_law": {
          title: "13.1 Tillämplig Lag",
          paragraphs: [
            "Dessa Villkor styrs av och tolkas i enlighet med svensk lag, utan hänsyn till dess lagvalsprinciper.",
          ],
        },

        "13_2_resolution": {
          title: "13.2 Tvistlösning",
          description:
            "I händelse av en tvist som uppstår från dessa Villkor eller vårt uppdrag:",
          steps: [
            {
              label: "Förhandling",
              value:
                "Vi samtycker till att först försöka lösa tvisten genom förhandling i god tro",
            },
            {
              label: "Medling",
              value:
                "Om förhandling misslyckas samtycker vi till att försöka medling innan vi vidtar rättsliga åtgärder",
            },
            {
              label: "Rättsliga Åtgärder",
              value:
                "Eventuella rättsliga förfaranden ska väckas i Stockholms domstolar, Sverige",
            },
          ],
        },

        "13_3_language": {
          title: "13.3 Språk",
          paragraphs: [
            "Dessa Villkor är skrivna på engelska. I fall av eventuella avvikelser mellan engelska och översatta versioner ska den engelska versionen gälla.",
          ],
        },
      },

      "14_miscellaneous": {
        title: "14. Övrigt",

        "14_1_entire": {
          title: "14.1 Hela Avtalet",
          paragraphs: [
            "Dessa Villkor, tillsammans med eventuella projektspecifika avtal och offerter, utgör hela avtalet mellan oss och ersätter alla tidigare avtal, förståelser och representationer.",
          ],
        },

        "14_2_amendments": {
          title: "14.2 Ändringar",
          paragraphs: [
            'Jag kan uppdatera dessa Villkor då och då. Ändringar kommer att publiceras på denna sida med ett uppdaterat "Senast uppdaterad"-datum. För löpande tjänster kommer du att underrättas om väsentliga ändringar minst 30 dagar i förväg.',
            "Fortsatt användning av mina tjänster efter ändringar utgör acceptans av de nya Villkoren.",
          ],
        },

        "14_3_severability": {
          title: "14.3 Avskiljbarhet",
          paragraphs: [
            "Om någon bestämmelse i dessa Villkor befinns vara overkställbar eller ogiltig, kommer den bestämmelsen att begränsas eller elimineras i minsta möjliga utsträckning, och de återstående bestämmelserna kommer att förbli i full kraft och verkan.",
          ],
        },

        "14_4_waiver": {
          title: "14.4 Avstående",
          paragraphs: [
            "Inget avstående från någon term eller villkor ska anses vara ett ytterligare eller fortsatt avstående från sådan term eller någon annan term. Mitt misslyckande att verkställa någon rättighet eller bestämmelse ska inte utgöra ett avstående från sådan rättighet eller bestämmelse.",
          ],
        },

        "14_5_assignment": {
          title: "14.5 Överlåtelse",
          paragraphs: [
            "Du får inte överlåta eller överföra dessa Villkor eller några rättigheter häri utan mitt tidigare skriftliga samtycke. Jag kan överlåta dessa Villkor till någon efterträdande enhet i händelse av en fusion eller förvärv.",
          ],
        },

        "14_6_contractor": {
          title: "14.6 Oberoende Entreprenör",
          paragraphs: [
            "Jag är en oberoende entreprenör och inte en anställd, partner eller agent för dig. Ingenting i dessa Villkor skapar ett anställnings-, partnerskaps- eller agentförhållande.",
          ],
        },
      },

      "15_contact": {
        title: "15. Kontaktinformation",
        subtitle:
          "Om du har några frågor om dessa Användarvillkor, vänligen kontakta mig:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sverige",
          email: "E-post",
          phone: "Telefon",
        },
        acceptance: {
          title: "Acceptans av Villkor",
          text: "Genom att använda mina tjänster bekräftar du att du har läst och förstått dessa Användarvillkor och samtycker till att vara bunden av dem. Om du har några frågor eller farhågor, vänligen kontakta mig innan du anlitar mina tjänster.",
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
} = createI18nUtils(termsUi);
