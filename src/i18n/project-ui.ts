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
        title: "EricReyes Barbershop - Professional Website",
        image: EricReyesImg,
        imageAlt: "Mockup of professional barber Eric Reyes' portfolio website",
      },
      overview: {
        images: [
          {
            image: EricReyesMacImg,
            alt: "Eric Reyes website view displayed on a MacBook Air.",
          },
          {
            image: EricReyesIphoneImg,
            alt: "Mobile view of Eric Reyes website displayed on an iPhone.",
          },
        ],
        challenge: {
          title: "The Challenge",
          description: [
            "Eric Reyes, a professional barber renowned for his precision and style, needed to establish a digital presence that matched the quality of his craft. While his social media showcased his talent, he lacked a professional platform where clients could explore his background and services in a structured way.",
            "Potential clients couldn't find a dedicated space to view his complete portfolio, learn about his work philosophy, or quickly access contact information. It was time to create a digital business card that conveyed professionalism and built trust from the first click.",
            "The challenge was to design a website that not only showcased his best work but also reflected his personality and stood out in a competitive market, positioning him as the premium choice in his area.",
          ],
        },
        solution: {
          title: "The Solution",
          description: [
            "We developed a modern, fully responsive portfolio website that captures the essence of Eric's work: precision, style, and attention to detail. Every visual element was carefully selected to communicate professionalism and artistic quality.",
            "The design features a clear information architecture that guides visitors through his services, standout transformations, and brand values. We implemented a striking visual gallery that allows clients to appreciate the quality and versatility of his work, while strategically placed calls-to-action facilitate direct contact.",
            "We opted for a minimalist aesthetic with high-contrast photography that highlights the precision of each cut. The color palette and typography reinforce the masculine, sophisticated brand identity Eric wanted to project.",
            "We implemented a robust local SEO strategy, optimizing content for specific barbershop searches in Stockholm. This ensures Eric appears in top results when potential clients search for premium barbering services in his area.",
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
            items: ["Web Design", "Frontend Development", "UX/UI", "Local SEO"],
          },
          industry: {
            title: "Industry",
            items: ["Personal Services"],
          },
          timeline: {
            title: "Timeline",
            items: ["1 Week"],
          },
          scale: {
            title: "Investment",
            items: ["5 000 kr"],
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
            title: "Research & Strategy",
            description:
              "Local competition analysis, target audience study, and brand objective definition to position Eric as a leader in his sector.",
          },
          {
            title: "UX/UI Design",
            description:
              "Creation of wireframes and interactive prototypes with a mobile-first approach, prioritizing impactful visual experience and intuitive navigation.",
          },
          {
            title: "Development & Optimization",
            description:
              "Implementation with modern technologies, web performance and local SEO optimization, ensuring ultra-fast loading times and maximum search engine visibility.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "Eric Reyes, Owner",
        testimonial:
          "Working with Carfdev was easy and professional. My new website is exactly what I needed: fast, elegant, and perfectly represents my work. My clients constantly compliment the site and it has significantly improved my professional image.",
        name: "Eric Reyes",
        job: "Founder, EricReyes Barbershop",
      },
      cta: {
        title: "Ready to Take Your Business to the Next Level?",
        subtitle:
          "Let's transform your vision into a website that delivers results. I'll guide you through every stage of the process, from strategy to launch.",
        btn: {
          text: "Start Your Project",
        },
      },
      learned: {
        title: "Key Learnings",
        items: [
          {
            title: "Mobile-First isn't optional, it's fundamental",
            description:
              "With over 70% of local service searches performed on mobile devices, designing mobile-first ensures the experience is exceptional where it matters most.",
          },
          {
            title: "First impressions are digital",
            description:
              "A professional website acts as your best salesperson 24/7. Visual quality and loading speed directly impact the perception of professionalism and contact decisions.",
          },
          {
            title: "Performance translates to opportunities",
            description:
              "Each additional second of loading time reduces conversions. Optimizing performance isn't just technical—it's a business strategy that keeps potential clients engaged.",
          },
          {
            title: "Local SEO makes the difference",
            description:
              "For local service businesses, appearing in top search positions in your geographic area is the difference between being invisible or receiving constant inquiries from qualified clients.",
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
        title: "EricReyes Barbershop - Sitio Web Profesional",
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
            "Eric Reyes, un barbero profesional reconocido por su precisión y estilo, necesitaba establecer una presencia digital que estuviera a la altura de la calidad de su trabajo. Aunque sus redes sociales mostraban su talento, carecía de una plataforma profesional donde los clientes pudieran explorar su trayectoria y servicios de manera estructurada.",
            "Los clientes potenciales no encontraban un espacio donde ver su portafolio completo, conocer su filosofía de trabajo o encontrar información de contacto de forma rápida. Era momento de crear una carta de presentación digital que transmitiera profesionalismo y generara confianza desde el primer clic.",
            "El reto era diseñar un sitio web que no solo mostrara su mejor trabajo, sino que también reflejara su personalidad y destacara en un mercado competitivo, posicionándolo como la opción premium en su área.",
          ],
        },
        solution: {
          title: "La Solución",
          description: [
            "Desarrollamos un portafolio web moderno y completamente responsive que captura la esencia del trabajo de Eric: precisión, estilo y atención al detalle. Cada elemento visual fue cuidadosamente seleccionado para comunicar profesionalismo y calidad artística.",
            "El diseño presenta una arquitectura de información clara que guía al visitante a través de sus servicios, transformaciones destacadas y valores de marca. Implementamos una galería visual impactante que permite a los clientes apreciar la calidad y versatilidad de su trabajo, mientras que las llamadas a la acción estratégicamente ubicadas facilitan el contacto directo.",
            "Optamos por una estética minimalista con fotografías de alto contraste que destacan la precisión de cada corte. La paleta de colores y tipografía refuerzan la identidad de marca masculina y sofisticada que Eric buscaba proyectar.",
            "Implementamos una estrategia de SEO local robusta, optimizando el contenido para búsquedas específicas de barberías en Estocolmo. Esto garantiza que Eric aparezca en los primeros resultados cuando clientes potenciales buscan servicios de barbería premium en su zona.",
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
            items: ["Diseño Web", "Desarrollo Frontend", "UX/UI", "SEO Local"],
          },
          industry: {
            title: "Industria",
            items: ["Servicios Personales"],
          },
          timeline: {
            title: "Duración",
            items: ["1 Semana"],
          },
          scale: {
            title: "Inversión",
            items: ["5 000 kr"],
          },
          btn: {
            text: "Ver Sitio en Vivo",
            href: "https://www.ericreyes.se",
          },
        },
      },
      process: {
        items: [
          {
            title: "Investigación y Estrategia",
            description:
              "Análisis de competencia local, estudio del público objetivo y definición de objetivos de marca para posicionar a Eric como referente en su sector.",
          },
          {
            title: "Diseño UX/UI",
            description:
              "Creación de wireframes y prototipos interactivos con enfoque mobile-first, priorizando una experiencia visual impactante y navegación intuitiva.",
          },
          {
            title: "Desarrollo y Optimización",
            description:
              "Implementación con tecnologías modernas, optimización de rendimiento web y SEO local, garantizando tiempos de carga ultrarrápidos y máxima visibilidad en buscadores.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "Eric Reyes, Propietario",
        testimonial:
          "Trabajar con Carfdev fue muy fácil y profesional. Mi nuevo sitio web es exactamente lo que necesitaba: rápido, elegante y representa perfectamente mi trabajo. Mis clientes constantemente elogian el sitio y ha mejorado significativamente mi imagen profesional.",
        name: "Eric Reyes",
        job: "Fundador, EricReyes Barbershop",
      },
      cta: {
        title: "¿Listo para llevar tu negocio al siguiente nivel?",
        subtitle:
          "Transformemos tu visión en un sitio web que genere resultados. Te acompaño en cada etapa del proceso, desde la estrategia hasta el lanzamiento.",
        btn: {
          text: "Comencemos tu Proyecto",
        },
      },
      learned: {
        title: "Aprendizajes Clave",
        items: [
          {
            title: "Mobile-First no es opcional, es fundamental",
            description:
              "Con más del 70% de las búsquedas de servicios locales realizadas desde dispositivos móviles, diseñar primero para móvil garantiza que la experiencia sea excepcional donde más importa.",
          },
          {
            title: "Las primeras impresiones son digitales",
            description:
              "Un sitio web profesional actúa como tu mejor vendedor 24/7. La calidad visual y la velocidad de carga impactan directamente en la percepción de profesionalismo y en la decisión de contacto.",
          },
          {
            title: "El rendimiento se traduce en oportunidades",
            description:
              "Cada segundo de carga adicional reduce las conversiones. Optimizar el rendimiento no es solo técnico, es una estrategia de negocio que mantiene la atención de clientes potenciales.",
          },
          {
            title: "SEO local marca la diferencia",
            description:
              "Para negocios de servicios locales, aparecer en las primeras posiciones de búsqueda en tu área geográfica es la diferencia entre estar invisible o recibir consultas constantes de clientes calificados.",
          },
        ],
      },
    },
  },
  sv: {
    "eric-reyes": {
      name: "EricReyes",
      breadcrumb: ["Hem", "Projekt"],
      hero: {
        title: "EricReyes Barbershop - Professionell Webbplats",
        image: EricReyesImg,
        imageAlt:
          "Mockup av den professionella barberaren Eric Reyes portföljwebbplats",
      },
      overview: {
        images: [
          {
            image: EricReyesMacImg,
            alt: "Eric Reyes webbplatsvy visad på en MacBook Air.",
          },
          {
            image: EricReyesIphoneImg,
            alt: "Mobilvy av Eric Reyes webbplats visad på en iPhone.",
          },
        ],
        challenge: {
          title: "Utmaningen",
          description: [
            "Eric Reyes, en professionell barberare känd för sin precision och stil, behövde etablera en digital närvaro som matchade kvaliteten på hans arbete. Även om hans sociala medier visade hans talang, saknade han en professionell plattform där kunder kunde utforska hans bakgrund och tjänster på ett strukturerat sätt.",
            "Potentiella kunder kunde inte hitta ett dedikerat utrymme för att se hans kompletta portfölj, lära sig om hans arbetsfilosofi eller snabbt komma åt kontaktinformation. Det var dags att skapa ett digitalt visitkort som förmedlade professionalism och byggde förtroende från första klicket.",
            "Utmaningen var att designa en webbplats som inte bara visade hans bästa arbete, utan också speglade hans personlighet och stack ut på en konkurrensutsatt marknad, och positionerade honom som det premiumalternativet i hans område.",
          ],
        },
        solution: {
          title: "Lösningen",
          description: [
            "Vi utvecklade en modern, helt responsiv portföljwebbplats som fångar essensen av Erics arbete: precision, stil och uppmärksamhet på detaljer. Varje visuellt element valdes noggrant ut för att kommunicera professionalism och konstnärlig kvalitet.",
            "Designen har en tydlig informationsarkitektur som guidar besökare genom hans tjänster, framstående transformationer och varumärkesvärden. Vi implementerade ett slående visuellt galleri som låter kunder uppskatta kvaliteten och mångsidigheten i hans arbete, medan strategiskt placerade uppmaningar till handling underlättar direkt kontakt.",
            "Vi valde en minimalistisk estetik med högkontrast fotografi som lyfter fram precisionen i varje klippning. Färgpaletten och typografin förstärker den maskulina, sofistikerade varumärkesidentiteten som Eric ville projicera.",
            "Vi implementerade en robust lokal SEO-strategi och optimerade innehållet för specifika barberarsökningar i Stockholm. Detta säkerställer att Eric dyker upp i topresultaten när potentiella kunder söker efter premium barbertjänster i hans område.",
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
            items: ["Webbdesign", "Frontend-utveckling", "UX/UI", "Lokal SEO"],
          },
          industry: {
            title: "Bransch",
            items: ["Personliga Tjänster"],
          },
          timeline: {
            title: "Tidslinje",
            items: ["1 Vecka"],
          },
          scale: {
            title: "Investering",
            items: ["5 000 kr"],
          },
          btn: {
            text: "Visa Live-webbplats",
            href: "https://www.ericreyes.se",
          },
        },
      },
      process: {
        items: [
          {
            title: "Forskning & Strategi",
            description:
              "Lokal konkurrensanalys, målgruppsstudie och definition av varumärkesmål för att positionera Eric som ledare inom sin sektor.",
          },
          {
            title: "UX/UI Design",
            description:
              "Skapande av wireframes och interaktiva prototyper med ett mobile-first-tillvägagångssätt, prioritering av slagkraftig visuell upplevelse och intuitiv navigering.",
          },
          {
            title: "Utveckling & Optimering",
            description:
              "Implementering med moderna teknologier, webbprestanda och lokal SEO-optimering, vilket säkerställer ultrasnabba laddningstider och maximal synlighet i sökmotorer.",
          },
        ],
      },
      testimonial: {
        img: EricReyesAvatar,
        imgAlt: "Eric Reyes, Ägare",
        testimonial:
          "Att arbeta med Carfdev var enkelt och professionellt. Min nya webbplats är precis vad jag behövde: snabb, elegant och representerar mitt arbete perfekt. Mina kunder komplimenterar ständigt webbplatsen och den har avsevärt förbättrat min professionella image.",
        name: "Eric Reyes",
        job: "Grundare, EricReyes Barbershop",
      },
      cta: {
        title: "Redo att Ta Ditt Företag till Nästa Nivå?",
        subtitle:
          "Låt oss förvandla din vision till en webbplats som levererar resultat. Jag guidar dig genom varje steg av processen, från strategi till lansering.",
        btn: {
          text: "Starta Ditt Projekt",
        },
      },
      learned: {
        title: "Viktiga Lärdomar",
        items: [
          {
            title: "Mobile-First är inte valfritt, det är grundläggande",
            description:
              "Med över 70% av lokala tjänstsökningar utförda på mobila enheter, säkerställer mobile-first-design att upplevelsen är exceptionell där den spelar störst roll.",
          },
          {
            title: "Första intrycken är digitala",
            description:
              "En professionell webbplats fungerar som din bästa säljare 24/7. Visuell kvalitet och laddningshastighet påverkar direkt uppfattningen av professionalism och kontaktbeslut.",
          },
          {
            title: "Prestanda översätts till möjligheter",
            description:
              "Varje extra sekund av laddningstid minskar konverteringar. Att optimera prestanda är inte bara tekniskt—det är en affärsstrategi som håller potentiella kunder engagerade.",
          },
          {
            title: "Lokal SEO gör skillnaden",
            description:
              "För lokala tjänsteföretag är att dyka upp i topppositioner i ditt geografiska område skillnaden mellan att vara osynlig eller att få konstanta förfrågningar från kvalificerade kunder.",
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
