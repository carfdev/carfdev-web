import type { ProjectUI } from "@/types/project.interface";
import EricReyesImg from "@/assets/images/ericReyes.webp";
import EricReyesMacImg from "@/assets/images/ericReyes-mac.webp";
import EricReyesIphoneImg from "@/assets/images/ericReyes-iphone.webp";
import EricReyesAvatar from "@/assets/images/ericReyes-avatar.webp";
import { createI18nUtils } from "./utils";

export const projectUi: ProjectUI = {
  en: {
    "eric-reyes": {
      name: "EricReyes",
      breadcrumb: ["Home", "Projects"],
      hero: {
        title: "EricReyes Barbershop New Website",
        image: EricReyesImg,
        imageAlt:
          "Mockup of the professional barber Eric Reyes portfolio website",
      },
      overview: {
        images: [
          {
            image: EricReyesMacImg,
            alt: "Eric Reyes website mockup displayed on a MacBook Air.",
          },
          {
            image: EricReyesIphoneImg,
            alt: "Mobile view of Eric Reyes website displayed on an iPhone.",
          },
        ],
        challenge: {
          title: "The Challenge",
          description: [
            "Eric Reyes, a professional barber known for his precision and style, lacked an online presence that matched the quality of his work. His previous social media pages showcased his skills but didn’t provide a professional platform for clients to explore his services or book appointments easily.",
            "Without a dedicated website, potential clients struggled to find detailed information, view his portfolio, or contact him directly. Eric needed a sleek, modern portfolio that reflected his craftsmanship and helped him build trust with new customers.",
            "The goal was clear: create a personal brand website that highlights his expertise, showcases his best transformations, and makes booking an effortless experience for every client.",
          ],
        },
        solution: {
          title: "The Solution",
          description: [
            "Our approach focused on crafting a modern, mobile-first portfolio that captures Eric Reyes’s professionalism and artistic style. We started by analyzing how potential clients search for barbers online and what inspires trust and conversion in personal service websites.",
            "The new design features clean navigation, bold visuals of Eric’s best work, and a seamless appointment booking flow. Clients can easily browse his services, view transformations, and schedule a session—all from any device.",
            "Visually, the site combines minimal aesthetics with high-contrast photography to highlight the precision and detail of his craft. Every section was built to reinforce Eric’s personal brand while keeping the user experience simple and intuitive.",
            "Additionally, we optimized the website for local SEO, helping Eric rank higher in barber-related searches in his area and attract a steady stream of new clients.",
          ],
        },
        technologies: {
          title: "Technologies Used",
          items: [
            {
              name: "Astro",
              link: "https://astro.build",
              icon: "IconBrandAstro",
            },
            {
              name: "Tailwind",
              link: "https://tailwindcss.com",
              icon: "IconBrandTailwind",
            },
            {
              name: "Docker",
              link: "https://www.docker.com",
              icon: "IconBrandDocker",
            },
            {
              name: "Git",
              link: "https://git-scm.com",
              icon: "IconBrandGit",
            },
            {
              name: "Typescript",
              link: "https://www.typescriptlang.org",
              icon: "IconBrandTypescript",
            },
            {
              name: "Go",
              link: "https://go.dev",
              icon: "IconBrandGolang",
            },
            {
              name: "Cloudflare",
              link: "https://www.cloudflare.com",
              icon: "IconBrandCloudflare",
            },
            {
              name: "Figma",
              link: "https://www.figma.com",
              icon: "IconBrandFigma",
            },
          ],
        },
        card: {
          services: {
            title: "Services",
            items: ["Web Design", "Development", "UX/UI", "SEO"],
          },
          industry: {
            title: "Industry",
            items: ["Services"],
          },
          timeline: {
            title: "Timeline",
            items: ["1 Week"],
          },
          scale: {
            title: "Project Scale",
            items: ["25 000 kr"],
          },
          btn: {
            text: "View Live Site",
            href: "https://www.ericreyes.se",
          },
        },
      },
      process: {
        items: [
          {
            title: "Research",
            description:
              "User interviews, competitor analysis, and market research to understand dining preferences in Stockholm.",
          },
          {
            title: "Design",
            description:
              "Wireframing, prototyping, and visual design focused on mobile-first reservation experience.",
          },
          {
            title: "Development",
            description:
              "Custom booking system integration, performance optimization, and thorough testing across devices.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "EricReyes Owner",
        testimonial:
          "Working with Carfdev was seamless. Our new site is fast, beautiful, and our customers love it. The reservation system has transformed how we manage bookings, and we've seen a remarkable increase in online orders.",
        name: "Eric Reyes",
        job: "Owner, EricReyes Barbershop",
      },
      cta: {
        title: "Ready to build your new website?",
        subtitle:
          "Let's create something amazing together. From concept to launch, we'll guide you through every step of the process.",
        btn: {
          text: "Let's Talk",
        },
      },
      learned: {
        title: "Lessons Learned",
        items: [
          {
            title: "Mobile-First is Essential",
            description:
              "With 70% of restaurant searches happening on mobile, designing for mobile first wasn't just a best practice—it was critical for business success.",
          },
          {
            title: "User Testing Pays Off",
            description:
              "Early user testing revealed friction points in the booking flow that we might have missed, leading to a much smoother final experience.",
          },
          {
            title: "Performance Matters",
            description:
              "Restaurant customers are often making quick decisions. Fast loading times directly correlated with higher booking conversion rates.",
          },
          {
            title: "Staff Integration is Key",
            description:
              "The booking system's success depended heavily on seamless integration with the restaurant's existing workflow and POS system.",
          },
        ],
      },
    },
  },
  es: {
    "eric-reyes": {
      name: "EricReyes",
      breadcrumb: ["Inicio", "Proyectos"],
      hero: {
        title: "EricReyes Barbershop Nuevo Sitio Web",
        image: EricReyesImg,
        imageAlt:
          "Maqueta del sitio web del portafolio del barbero profesional Eric Reyes",
      },
      overview: {
        images: [
          {
            image: EricReyesMacImg,
            alt: "Vista del sitio web de Eric Reyes mostrada en un MacBook Air.",
          },
          {
            image: EricReyesIphoneImg,
            alt: "Vista móvil del sitio web de Eric Reyes mostrada en un iPhone.",
          },
        ],
        challenge: {
          title: "El Desafío",
          description: [
            "Eric Reyes, un barbero profesional reconocido por su precisión y estilo, carecía de una presencia en línea que reflejara la calidad de su trabajo. Sus redes sociales mostraban su talento, pero no ofrecían una plataforma profesional donde los clientes pudieran explorar sus servicios o agendar citas fácilmente.",
            "Sin un sitio web dedicado, los clientes potenciales tenían dificultades para encontrar información detallada, ver su portafolio o contactarlo directamente. Eric necesitaba un portafolio moderno y elegante que reflejara su habilidad y generara confianza en nuevos clientes.",
            "El objetivo era claro: crear un sitio web personal que destacara su experiencia, mostrara sus mejores transformaciones y facilitara al máximo el proceso de reserva para cada cliente.",
          ],
        },
        solution: {
          title: "La Solución",
          description: [
            "Nuestro enfoque se centró en desarrollar un portafolio moderno y optimizado para dispositivos móviles que capturara el profesionalismo y el estilo artístico de Eric Reyes. Comenzamos analizando cómo los clientes buscan barberos en línea y qué elementos generan confianza y conversión en sitios de servicios personales.",
            "El nuevo diseño presenta una navegación limpia, imágenes impactantes del mejor trabajo de Eric y un flujo de reserva de citas fluido. Los clientes pueden explorar fácilmente sus servicios, ver transformaciones y agendar una sesión desde cualquier dispositivo.",
            "Visualmente, el sitio combina una estética minimalista con fotografías de alto contraste para resaltar la precisión y el detalle de su trabajo. Cada sección fue diseñada para reforzar la marca personal de Eric manteniendo una experiencia de usuario simple e intuitiva.",
            "Además, optimizamos el sitio para SEO local, ayudando a Eric a posicionarse mejor en búsquedas relacionadas con barberías en su área y atraer un flujo constante de nuevos clientes.",
          ],
        },
        technologies: {
          title: "Tecnologías Utilizadas",
          items: [
            {
              name: "Astro",
              link: "https://astro.build",
              icon: "IconBrandAstro",
            },
            {
              name: "Tailwind",
              link: "https://tailwindcss.com",
              icon: "IconBrandTailwind",
            },
            {
              name: "Docker",
              link: "https://www.docker.com",
              icon: "IconBrandDocker",
            },
            {
              name: "Git",
              link: "https://git-scm.com",
              icon: "IconBrandGit",
            },
            {
              name: "Typescript",
              link: "https://www.typescriptlang.org",
              icon: "IconBrandTypescript",
            },
            {
              name: "Go",
              link: "https://go.dev",
              icon: "IconBrandGolang",
            },
            {
              name: "Cloudflare",
              link: "https://www.cloudflare.com",
              icon: "IconBrandCloudflare",
            },
            {
              name: "Figma",
              link: "https://www.figma.com",
              icon: "IconBrandFigma",
            },
          ],
        },
        card: {
          services: {
            title: "Servicios",
            items: ["Diseño Web", "Desarrollo", "UX/UI", "SEO"],
          },
          industry: {
            title: "Industria",
            items: ["Servicios"],
          },
          timeline: {
            title: "Duración",
            items: ["1 Semana"],
          },
          scale: {
            title: "Escala del Proyecto",
            items: ["25 000 kr"],
          },
          btn: {
            text: "Ver Sitio Web",
            href: "https://www.ericreyes.se",
          },
        },
      },
      process: {
        items: [
          {
            title: "Investigación",
            description:
              "Entrevistas con usuarios, análisis de competidores y estudio de mercado para comprender las preferencias gastronómicas en Estocolmo.",
          },
          {
            title: "Diseño",
            description:
              "Wireframes, prototipos y diseño visual enfocados en una experiencia de reservas optimizada para móviles.",
          },
          {
            title: "Desarrollo",
            description:
              "Integración de un sistema de reservas personalizado, optimización del rendimiento y pruebas exhaustivas en distintos dispositivos.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "EricReyes Propietario",
        testimonial:
          "Trabajar con Carfdev fue muy fácil. Nuestro nuevo sitio es rápido, atractivo y a nuestros clientes les encanta. El sistema de reservas ha transformado la forma en que gestionamos las citas, y hemos visto un aumento notable en los pedidos en línea.",
        name: "Eric Reyes",
        job: "Propietario, EricReyes Barbershop",
      },
      cta: {
        title: "¿Listo para crear tu nuevo sitio web?",
        subtitle:
          "Creamos algo increíble juntos. Desde el concepto hasta el lanzamiento, te guiaremos en cada paso del proceso.",
        btn: {
          text: "Hablemos",
        },
      },
      learned: {
        title: "Lecciones aprendidas",
        items: [
          {
            title: "El enfoque móvil primero es esencial",
            description:
              "Con el 70% de las búsquedas de restaurantes ocurriendo en dispositivos móviles, diseñar con un enfoque mobile-first no solo fue una buena práctica, sino crucial para el éxito del negocio.",
          },
          {
            title: "Las pruebas con usuarios valen la pena",
            description:
              "Las pruebas tempranas con usuarios revelaron puntos de fricción en el flujo de reservas que podríamos haber pasado por alto, lo que llevó a una experiencia final mucho más fluida.",
          },
          {
            title: "El rendimiento importa",
            description:
              "Los clientes de restaurantes suelen tomar decisiones rápidamente. Los tiempos de carga rápidos se correlacionaron directamente con mayores tasas de conversión en reservas.",
          },
          {
            title: "La integración del personal es clave",
            description:
              "El éxito del sistema de reservas dependió en gran medida de una integración fluida con el flujo de trabajo y el sistema POS existente del restaurante.",
          },
        ],
      },
    },
  },
  sv: {
    "eric-reyes": {
      name: "EricReyes",
      breadcrumb: ["Hem", "projekt"],
      hero: {
        title: "EricReyes Barbershop Ny Webplats",
        image: EricReyesImg,
        imageAlt:
          "Mockup av den professionella barberarens Eric Reyes portfoliowebbplats",
      },
      overview: {
        images: [
          {
            image: EricReyesMacImg,
            alt: "Mockup av Eric Reyes webbplats visad på en MacBook Air.",
          },
          {
            image: EricReyesIphoneImg,
            alt: "Mobilvy av Eric Reyes webbplats visad på en iPhone.",
          },
        ],
        challenge: {
          title: "Utmaningen",
          description: [
            "Eric Reyes, en professionell barberare känd för sin precision och stil, saknade en online-närvaro som motsvarade kvaliteten på hans arbete. Hans tidigare sociala mediesidor visade upp hans färdigheter men erbjöd ingen professionell plattform där kunder enkelt kunde utforska hans tjänster eller boka tider.",
            "Utan en dedikerad webbplats hade potentiella kunder svårt att hitta detaljerad information, se hans portfölj eller kontakta honom direkt. Eric behövde en elegant och modern portfölj som speglade hans hantverk och byggde förtroende hos nya kunder.",
            "Målet var tydligt: skapa en personlig varumärkessida som lyfter fram hans expertis, visar hans bästa transformationer och gör bokningsprocessen enkel för varje kund.",
          ],
        },
        solution: {
          title: "Lösningen",
          description: [
            "Vår strategi fokuserade på att skapa en modern, mobilanpassad portfölj som fångar Eric Reyes professionalism och konstnärliga stil. Vi började med att analysera hur potentiella kunder söker efter barberare online och vad som skapar förtroende och konvertering på personliga tjänstesidor.",
            "Den nya designen har en ren navigering, kraftfulla bilder av Erics bästa arbeten och ett smidigt bokningsflöde. Kunder kan enkelt bläddra bland hans tjänster, se transformationer och boka en tid – från vilken enhet som helst.",
            "Visuellt kombinerar webbplatsen en minimalistisk estetik med högkontrastfotografi för att framhäva precisionen och detaljen i hans hantverk. Varje sektion är utformad för att stärka Erics personliga varumärke samtidigt som användarupplevelsen hålls enkel och intuitiv.",
            "Dessutom optimerade vi webbplatsen för lokal SEO, vilket hjälper Eric att rankas högre i sökningar relaterade till barberare i hans område och attrahera en stadig ström av nya kunder.",
          ],
        },
        technologies: {
          title: "Använda Teknologier",
          items: [
            {
              name: "Astro",
              link: "https://astro.build",
              icon: "IconBrandAstro",
            },
            {
              name: "Tailwind",
              link: "https://tailwindcss.com",
              icon: "IconBrandTailwind",
            },
            {
              name: "Docker",
              link: "https://www.docker.com",
              icon: "IconBrandDocker",
            },
            {
              name: "Git",
              link: "https://git-scm.com",
              icon: "IconBrandGit",
            },
            {
              name: "Typescript",
              link: "https://www.typescriptlang.org",
              icon: "IconBrandTypescript",
            },
            {
              name: "Go",
              link: "https://go.dev",
              icon: "IconBrandGolang",
            },
            {
              name: "Cloudflare",
              link: "https://www.cloudflare.com",
              icon: "IconBrandCloudflare",
            },
            {
              name: "Figma",
              link: "https://www.figma.com",
              icon: "IconBrandFigma",
            },
          ],
        },
        card: {
          services: {
            title: "Tjänster",
            items: ["Webbdesign", "Utveckling", "UX/UI", "SEO"],
          },
          industry: {
            title: "Bransch",
            items: ["Tjänster"],
          },
          timeline: {
            title: "Tidsram",
            items: ["1 Vecka"],
          },
          scale: {
            title: "Projektets Omfattning",
            items: ["25 000 kr"],
          },
          btn: {
            text: "Visa Webbplatsen",
            href: "https://www.ericreyes.se",
          },
        },
      },
      process: {
        items: [
          {
            title: "Forskning",
            description:
              "Användarintervjuer, konkurrentanalys och marknadsundersökning för att förstå matpreferenser i Stockholm.",
          },
          {
            title: "Design",
            description:
              "Wireframing, prototypframtagning och visuell design med fokus på en mobilförst bokningsupplevelse.",
          },
          {
            title: "Utveckling",
            description:
              "Integration av ett anpassat bokningssystem, prestandaoptimering och noggrann testning på olika enheter.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "EricReyes Ägare",
        testimonial:
          "Att arbeta med Carfdev var smidigt. Vår nya webbplats är snabb, snygg och våra kunder älskar den. Bokningssystemet har förändrat hur vi hanterar bokningar, och vi har sett en remarkabel ökning av onlinebeställningar.",
        name: "Eric Reyes",
        job: "Ägare, EricReyes Barbershop",
      },
      cta: {
        title: "Redo att bygga din nya webbplats?",
        subtitle:
          "Låt oss skapa något fantastiskt tillsammans. Från koncept till lansering guidar vi dig genom varje steg i processen.",
        btn: {
          text: "Låt oss prata",
        },
      },
      learned: {
        title: "Lärdomar",
        items: [
          {
            title: "Mobil-först är avgörande",
            description:
              "Med 70 % av restaurangsökningarna som sker på mobilen var mobil-först-design inte bara en bästa praxis – det var avgörande för affärsframgång.",
          },
          {
            title: "Användartester lönar sig",
            description:
              "Tidiga användartester avslöjade friktionspunkter i bokningsflödet som vi annars kunde ha missat, vilket ledde till en mycket smidigare slutanvändarupplevelse.",
          },
          {
            title: "Prestanda spelar roll",
            description:
              "Restauranggäster fattar ofta snabba beslut. Snabba laddningstider korrelerade direkt med högre bokningskonverteringsfrekvens.",
          },
          {
            title: "Personalintegration är nyckeln",
            description:
              "Bokningssystemets framgång berodde starkt på sömlös integration med restaurangens befintliga arbetsflöde och kassasystem (POS).",
          },
        ],
      },
    },
  },
};

export const {
  getLangFromUrl,
  getUrlWithoutLang,
  useTranslations,
  useTranslatedPath,
} = createI18nUtils(projectUi);
