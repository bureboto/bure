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
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project5",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
  {
    href: "/project6",
    name: "Nombre del proyecto",
    date: "Febrero 2026",
    description:
      "Robotos NFTs es un proyecto se arte que surgio en el 2021 en el boom del arte digital NFT, fué creado por Pablo Stanley y otros colaboradores, es una colección de 10,000 personajes unicos.",
  },
];
