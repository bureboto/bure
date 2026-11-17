export type Project = {
  href: string;
  name: string;
  client?: string;
  date: string;
  cover?: string;
  description: { es: string; en: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    href: "/project13",
    name: "INE – PREP Help Materials",
    client: "Instituto Nacional Electoral (INE)",
    date: "2018",
    cover: "/design/INE/INE-Challenge-2-3.gif",
    description: {
      es: "Branding y sistema de ilustración para el centro de ayuda y los materiales de capacitación del PREP en las elecciones nacionales de México 2018, usado por más de 8,000 capturistas y 171,000 ciudadanos.",
      en: "Branding and illustration system for the help center and training materials of the PREP in Mexico's 2018 national elections, used by more than 8,000 data entry staff and 171,000 citizens.",
    },
    tags: ["Design System", "Government"],
  },
  {
    href: "/projects/bando",
    name: "Bando",
    client: "Bando",
    date: "2026",
    cover: "/design/bando/Product/Final-1.jpg",
    description: {
      es: "Bando es una fintech que busca conectar la blockchain con la banca tradicional, conectando servicios y la bolsa de valores a usuarios finales.",
      en: "Bando is a fintech that connects blockchain with traditional banking, bringing services and the stock market to end users.",
    },
    tags: ["Product design", "Fintech"],
  },
  {
    href: "/project2",
    name: "Gandum",
    client: "Gandum",
    date: "Agosto, 2026",
    cover: "/design/gandum/1_Gandum.jpg",
    description: {
      es: "Gandum es un festival que conecta la música electrónica y la cultura, la primera edición se realiza en Coffs Harbour, Australia en octubre del 2026.",
      en: "Gandum is a festival connecting electronic music and culture — its first edition takes place in Coffs Harbour, Australia in October 2026.",
    },
    tags: ["Branding", "Entertainment"],
  },
  {
    href: "/project3",
    name: "Espacio",
    date: "Marzo, 2026",
    cover: "/design/espacio/4_Cover_Espacio.mp4",
    description: {
      es: "Espacio es una media company que hace contenido y difusión sobre finanzas y tecnologías emergentes, empezó como Espacio Cripto y evolucionó a Espacio.",
      en: "Espacio is a media company creating content around finance and emerging technologies — it started as Espacio Cripto and evolved into Espacio.",
    },
    tags: ["Brand", "UI", "Motion"],
  },
  {
    href: "/project1",
    name: "Musho.ai",
    client: "Musho.ai",
    date: "2024",
    cover: "/design/musho/12_Cover_Musho.gif",
    description: {
      es: "Musho es un asistente de diseño con IA, que convierte tus prompts en sitios web, publicaciones para redes sociales, presentaciones y más — sin esfuerzo.",
      en: "Musho is an AI-powered design assistant, turning your prompts into websites, social media posts, slides, and more — effortlessly.",
    },
    tags: ["Branding", "AI"],
  },
  {
    href: "/project4",
    name: "C3Я0",
    client: "C3Я0",
    date: "2026",
    cover: "/design/cero/Cover_Cer0_03.jpg",
    description: {
      es: "c3r0 es el primer mocktail bar en San José del Cabo, Baja California, México. Branding fresco, orgánico y con vibe tropical.",
      en: "c3r0 is the first mocktail bar in San José del Cabo, Baja California, Mexico. Fresh, organic branding with a tropical vibe.",
    },
    tags: ["Branding", "Restaurant"],
  },
  {
    href: "/project5",
    name: "El Prado",
    client: "El Prado",
    date: "2026",
    cover: "/design/prado/1_Cover_Prado.jpg",
    description: {
      es: "El Prado es una empresa dedicada a la venta de artículos de limpieza y empaque para hogar y oficina, con distribución en todo México.",
      en: "El Prado is a company selling cleaning and packaging supplies for home and office, distributed across Mexico.",
    },
    tags: ["Branding", "Facility supplies"],
  },
  {
    href: "/project6",
    name: "Nouns | Devconnect ARG",
    client: "Nouns",
    date: "Noviembre, 2025",
    cover: "/design/nouns/5_Nous_ARG.gif",
    description: {
      es: "Ilustración y muralismo para el espacio de Nouns en Devconnect Argentina: gráficas, señalética y piezas para la comunidad durante todo el evento.",
      en: "Illustration and muralism for Nouns' space at Devconnect Argentina: graphics, signage, and community pieces throughout the event.",
    },
    tags: ["Branding, Ilustración", "Blockchain"],
  },
  {
    href: "/project7",
    name: "Nouns | ETHGlobal Singapore",
    client: "Nouns",
    date: "2024",
    cover: "/design/singapore/1_Singapore.jpg",
    description: {
      es: "Ilustración y activación para el stand de Nouns en ETHGlobal Singapore: mural, gráficas de gran formato y experiencia para la comunidad.",
      en: "Illustration and activation for Nouns' booth at ETHGlobal Singapore: mural, large-format graphics, and a community experience.",
    },
    tags: ["Branding, Ilustración", "Blockchain"],
  },
  {
    href: "/project8",
    name: "Línea 16 – Sin Límite",
    client: "Línea 16",
    date: "2018",
    cover: "/design/linea16/2_Linea16_SinLimite.jpg",
    description: {
      es: "Linea 16 es una liga de batallas escritas que concentra a los mejores exponentes de hip hop de habla hispana, con identidad urbana y desgastada en amarillo y negro.",
      en: "Linea 16 is a written battle league bringing together top Spanish-language hip hop artists, with a worn, urban identity in yellow and black.",
    },
    tags: ["Branding", "Entertainment"],
  },
  {
    href: "/project9",
    name: "Linea 16 – Sin Salida",
    client: "Línea 16",
    date: "Julio, 2017",
    cover: "/design/linea16-sinsalida/1_Cover_Linea16_SinLimite.jpg",
    description: {
      es: "Rebranding de Linea 16 con un nuevo logotipo tipo escudo deportivo y la línea visual para su evento Callejón Sin Salida, en tonos rojo y negro con texturas urbanas.",
      en: "Rebrand of Linea 16 with a new sports-crest logo and visual system for its Callejón Sin Salida event, in red and black with urban textures.",
    },
    tags: ["Branding", "Entertainment"],
  },
  {
    href: "/project11",
    name: "IDF – Inversionista del Futuro",
    date: "2025",
    cover: "/design/idf/9_IDF.jpg",
    description: {
      es: "Branding, landing page y materiales de venta para IDF, el curso de Espacio Cripto para aprender a invertir en criptomonedas desde cero.",
      en: "Branding, landing page, and sales materials for IDF, Espacio Cripto's course for learning to invest in crypto from scratch.",
    },
    tags: ["Brand", "UI"],
  },
  {
    href: "/project12",
    name: "The Base Night Show",
    date: "Septiembre, 2025",
    cover: "/design/base/0_Cover_BNS.jpg",
    description: {
      es: "Branding e ilustración para The Base Night Show, un espacio de conversación creado con Espacio para la colaboración de Base en LATAM.",
      en: "Branding and illustration for The Base Night Show, a conversation space created with Espacio for Base's collaboration in LATAM.",
    },
    tags: ["Brand", "Ilustración"],
  },
  {
    href: "/robopets",
    name: "Robotos",
    date: "2021–2024",
    cover: "/design/robotos/0_Cover_Robotos.jpg",
    description: {
      es: "Robotos NFTs es una colección de 10,000 personajes únicos creada por Pablo Stanley. Sistemas de diseño, ilustración y motion para la marca y su colección derivada Robopets.",
      en: "Robotos NFTs is a collection of 10,000 unique characters created by Pablo Stanley. Design systems, illustration, and motion for the brand and its derivative collection, Robopets.",
    },
    tags: ["Brand", "Ilustración"],
  },
];
