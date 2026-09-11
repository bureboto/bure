export type Project = {
  href: string;
  name: string;
  date: string;
  cover?: string;
  description: string;
};

export const projects: Project[] = [
  {
    href: "/project1",
    name: "Musho.ai",
    date: "2024",
    cover: "/design/musho/12_Cover_Musho.gif",
    description:
      "Musho is an AI-powered design assistant, turning your prompts into websites, social media posts, slides, and more — effortlessly.",
  },
  {
    href: "/project2",
    name: "Gandum",
    date: "Agosto, 2026",
    cover: "/design/gandum/1_Gandum.jpg",
    description:
      "Gandum es un festival que conecta la música electrónica y la cultura, la primera edición se realiza en Coffs Harbour, Australia en octubre del 2026.",
  },
  {
    href: "/project3",
    name: "Espacio",
    date: "Marzo, 2026",
    cover: "/design/espacio/4_Cover_Espacio.mp4",
    description:
      "Espacio es una media company que hace contenido y difusión sobre finanzas y tecnologías emergentes, empezó como Espacio Cripto y evolucionó a Espacio.",
  },
  {
    href: "/project4",
    name: "c3r0",
    date: "Julio, 2026",
    cover: "/design/cero/Cover_Cer0_03.jpg",
    description:
      "c3r0 es el primer mocktail bar en San José del Cabo, Baja California, México. Branding fresco, orgánico y con vibe tropical.",
  },
  {
    href: "/project5",
    name: "El Prado",
    date: "Marzo, 2025",
    cover: "/design/prado/1_Cover_Prado.jpg",
    description:
      "Plásticos El Prado es una empresa dedicada a la venta de artículos de limpieza y empaque para hogar y oficina, con distribución en todo México.",
  },
  {
    href: "/project6",
    name: "Nouns | Devconnect ARG",
    date: "Noviembre, 2025",
    cover: "/design/nouns/7_Cover_Nous_ARG.jpg",
    description:
      "Ilustración y muralismo para el espacio de Nouns en Devconnect Argentina: gráficas, señalética y piezas para la comunidad durante todo el evento.",
  },
  {
    href: "/project7",
    name: "Nouns | Devconnect Singapore",
    date: "Septiembre, 2024",
    cover: "/design/singapore/1_Singapore.jpg",
    description:
      "Ilustración y activación para el stand de Nouns en ETHGlobal Singapore: mural, gráficas de gran formato y experiencia para la comunidad.",
  },
];
