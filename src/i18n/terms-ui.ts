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
      title: "Terms of Service | Carfdev",
      description:
        "Terms and conditions for web development and hosting services provided by Carfdev. Read our service agreement before starting your project.",
    },
    title: "Terms of Service",
    lastUpdated: new Date("2025-01-15"),

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
  sv: {
    meta: {
      title: "Terms of Service | Carfdev",
      description:
        "Terms and conditions for web development and hosting services provided by Carfdev. Read our service agreement before starting your project.",
    },
    title: "Terms of Service",
    lastUpdated: new Date("2025-01-15"),

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
};

export const {
  getLangFromUrl,
  getUrlWithoutLang,
  useTranslations,
  useTranslatedPath,
} = createI18nUtils(termsUi);
