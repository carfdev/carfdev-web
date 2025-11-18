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
          "Welcome to Carfdev. I respect your privacy and am committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website or use my services.",
          "This policy applies to all services provided by José Carlos Sanchez Fernandez (operating as Carfdev), based in Stockholm, Sweden. I comply with the General Data Protection Regulation (GDPR) and Swedish data protection laws.",
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
            "When you contact me through the website's contact form, I collect:",
          items: [
            { label: "Name", value: "First and last name" },
            { label: "Email address", value: "To respond to your inquiry" },
            { label: "Company name", value: "Optional, if provided" },
            {
              label: "Project details",
              value: "Information about your project needs",
            },
            {
              label: "Budget and project type",
              value: "To better understand your requirements",
            },
          ],
        },

        "3_2_analytics": {
          title: "3.2 Analytics Data",
          description: "Umami Analytics collects anonymous, aggregated data:",
          items: [
            "General location",
            "Browser type and version",
            "Device type",
            "Operating system",
            "Pages visited and time spent",
            "Referrer information",
          ],
          note: "Data is anonymous. No IPs or identifiers stored.",
        },

        "3_3_technical": {
          title: "3.3 Technical Data",
          description: "Automatically collected technical information:",
          items: [
            "IP address (temporarily processed by Cloudflare)",
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
          { label: "Consent", value: "When submitting the contact form" },
          {
            label: "Legitimate interests",
            value: "Website analytics and security",
          },
          {
            label: "Contract performance",
            value: "To enter or perform a contract",
          },
        ],
      },

      "6_storage_security": {
        title: "6. Data Storage and Security",

        "6_1_storage": {
          title: "6.1 Where Your Data Is Stored",
          paragraphs: [
            "Contact form submissions go to email via Resend and are not stored on servers.",
            "The website is hosted on a server in Europe using Docker and Oracle Cloud.",
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
          "I use the following third-party services that may process your data:",

        resend: {
          title: "7.1 Resend",
          description: "Transactional email delivery. GDPR compliant.",
        },
        cloudflare: {
          title: "7.2 Cloudflare",
          description:
            "Security and performance. Processes IP temporarily. GDPR compliant.",
        },
        umami: {
          title: "7.3 Umami Analytics",
          description: "Self-hosted. No third-party data sharing.",
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
          "As a data subject in the EU/EEA, you have the following rights:",
        rights: [
          {
            label: "Right to Access",
            value:
              "You can request a copy of the personal data I hold about you.",
          },
          {
            label: "Right to Rectification",
            value:
              "You can request that I correct any inaccurate or incomplete data.",
          },
          {
            label: "Right to Erasure",
            value:
              "You can request that I delete your personal data (subject to legal obligations).",
          },
          {
            label: "Right to Restriction",
            value:
              "You can request that I restrict the processing of your data in certain circumstances.",
          },
          {
            label: "Right to Data Portability",
            value:
              "You can request a copy of your data in a machine-readable format.",
          },
          {
            label: "Right to Object",
            value:
              "You can object to the processing of your data based on legitimate interests.",
          },
          {
            label: "Right to Withdraw Consent",
            value:
              "You can withdraw your consent at any time where processing is based on consent.",
          },
          {
            label: "Right to Lodge a Complaint",
            value:
              "You can file a complaint with the Swedish Authority for Privacy Protection (IMY - Integritetsskyddsmyndigheten).",
          },
        ],
        contact: {
          label: "To exercise any of these rights, please contact me at",
          value: "info@carf.dev",
        },
      },

      "10_transfers": {
        title: "10. International Data Transfers",
        paragraphs: [
          "All processing is within the EEA.",
          "If transfers occur, safeguards such as SCCs will be used.",
        ],
      },

      "11_children": {
        title: "11. Children's Privacy",
        paragraphs: [
          "Not directed to individuals under 16.",
          "If data from a child is collected accidentally, it will be deleted.",
        ],
      },

      "12_changes": {
        title: "12. Changes to This Privacy Policy",
        paragraphs: [
          "The policy may be updated.",
          "The last updated date will reflect major changes.",
        ],
      },

      "13_contact": {
        title: "13. Contact Information",
        subtitle:
          "If you have any questions, concerns, or requests regarding this privacy policy or how I handle your personal data, please contact me:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sweden",
          email: "info@carf.dev",
          phone: "+46 72 271 02 80",
        },
        authority: {
          name: "Swedish Authority for Privacy Protection (IMY)",
          description:
            "If you are not satisfied with my response to your privacy concerns, you have the right to lodge a complaint with the Swedish Authority for Privacy Protection:",
          website: "https://www.imy.se",
          email: "imy@imy.se",
        },
      },
    },
    btn: {
      text: "Back to Home",
    },
  },
  sv: {
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
          "Welcome to Carfdev. I respect your privacy and am committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website or use my services.",
          "This policy applies to all services provided by José Carlos Sanchez Fernandez (operating as Carfdev), based in Stockholm, Sweden. I comply with the General Data Protection Regulation (GDPR) and Swedish data protection laws.",
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
            "When you contact me through the website's contact form, I collect:",
          items: [
            { label: "Name", value: "First and last name" },
            { label: "Email address", value: "To respond to your inquiry" },
            { label: "Company name", value: "Optional, if provided" },
            {
              label: "Project details",
              value: "Information about your project needs",
            },
            {
              label: "Budget and project type",
              value: "To better understand your requirements",
            },
          ],
        },

        "3_2_analytics": {
          title: "3.2 Analytics Data",
          description: "Umami Analytics collects anonymous, aggregated data:",
          items: [
            "General location",
            "Browser type and version",
            "Device type",
            "Operating system",
            "Pages visited and time spent",
            "Referrer information",
          ],
          note: "Data is anonymous. No IPs or identifiers stored.",
        },

        "3_3_technical": {
          title: "3.3 Technical Data",
          description: "Automatically collected technical information:",
          items: [
            "IP address (temporarily processed by Cloudflare)",
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
          { label: "Consent", value: "When submitting the contact form" },
          {
            label: "Legitimate interests",
            value: "Website analytics and security",
          },
          {
            label: "Contract performance",
            value: "To enter or perform a contract",
          },
        ],
      },

      "6_storage_security": {
        title: "6. Data Storage and Security",

        "6_1_storage": {
          title: "6.1 Where Your Data Is Stored",
          paragraphs: [
            "Contact form submissions go to email via Resend and are not stored on servers.",
            "The website is hosted on a server in Europe using Docker and Oracle Cloud.",
          ],
        },

        "6_2_security": {
          description:
            "I implement appropriate technical and organizational measures to protect your data:",
          title: "6.2 Security Measures",
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
          "I use the following third-party services that may process your data:",

        resend: {
          title: "7.1 Resend",
          description: "Transactional email delivery. GDPR compliant.",
        },
        cloudflare: {
          title: "7.2 Cloudflare",
          description:
            "Security and performance. Processes IP temporarily. GDPR compliant.",
        },
        umami: {
          title: "7.3 Umami Analytics",
          description: "Self-hosted. No third-party data sharing.",
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
          "As a data subject in the EU/EEA, you have the following rights:",
        rights: [
          {
            label: "Right to Access",
            value:
              "You can request a copy of the personal data I hold about you.",
          },
          {
            label: "Right to Rectification",
            value:
              "You can request that I correct any inaccurate or incomplete data.",
          },
          {
            label: "Right to Erasure",
            value:
              "You can request that I delete your personal data (subject to legal obligations).",
          },
          {
            label: "Right to Restriction",
            value:
              "You can request that I restrict the processing of your data in certain circumstances.",
          },
          {
            label: "Right to Data Portability",
            value:
              "You can request a copy of your data in a machine-readable format.",
          },
          {
            label: "Right to Object",
            value:
              "You can object to the processing of your data based on legitimate interests.",
          },
          {
            label: "Right to Withdraw Consent",
            value:
              "You can withdraw your consent at any time where processing is based on consent.",
          },
          {
            label: "Right to Lodge a Complaint",
            value:
              "You can file a complaint with the Swedish Authority for Privacy Protection (IMY - Integritetsskyddsmyndigheten).",
          },
        ],
        contact: {
          label: "To exercise any of these rights, please contact me at",
          value: "info@carf.dev",
        },
      },

      "10_transfers": {
        title: "10. International Data Transfers",
        paragraphs: [
          "All processing is within the EEA.",
          "If transfers occur, safeguards such as SCCs will be used.",
        ],
      },

      "11_children": {
        title: "11. Children's Privacy",
        paragraphs: [
          "Not directed to individuals under 16.",
          "If data from a child is collected accidentally, it will be deleted.",
        ],
      },

      "12_changes": {
        title: "12. Changes to This Privacy Policy",
        paragraphs: [
          "The policy may be updated.",
          "The last updated date will reflect major changes.",
        ],
      },

      "13_contact": {
        title: "13. Contact Information",
        subtitle:
          "If you have any questions, concerns, or requests regarding this privacy policy or how I handle your personal data, please contact me:",
        owner: {
          name: "José Carlos Sanchez Fernandez (Carfdev)",
          location: "Stockholm, Sweden",
          email: "info@carf.dev",
          phone: "+46 72 271 02 80",
        },
        authority: {
          name: "Swedish Authority for Privacy Protection (IMY)",
          description:
            "If you are not satisfied with my response to your privacy concerns, you have the right to lodge a complaint with the Swedish Authority for Privacy Protection:",
          website: "https://www.imy.se",
          email: "imy@imy.se",
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
} = createI18nUtils(policyUi);
