// Piezas individuales para la sección Pieces — vaciado desde la hoja de
// cálculo "Piezas bure" (Google Sheets). Por ahora son solo de consulta:
// no hay página de detalle ("+ Info" manda a contacto) y la imagen sigue
// siendo un placeholder gris hasta que se suban las fotos reales.
export type Artwork = {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  detail?: string;
  price?: string;
  moreHref?: string;
};

// moreHref: manda a contacto por ahora (CTA temporal) hasta que la
// tienda de Shopify esté lista y cada pieza tenga su propio link.
const CONTACT_HREF = "mailto:bureboto@gmail.com";

export const artworks: Artwork[] = [
  {
    id: "a1",
    title: "Vistazoo al charco",
    year: 2026,
    medium: "Acrilico sobre tela",
    dimensions: "60x50cm",
    detail: "Marco de acrilico 3mm",
    price: "$ 10,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a2",
    title: "Reliquia 002",
    year: 2025,
    medium: "Acrilico sobre MDF 1.2cm",
    dimensions: "1.10x1.10m",
    price: "$ 12,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a3",
    title: "Día de parque",
    year: 2025,
    medium: "Acrilico sobre tela",
    dimensions: "40x50cm",
    price: "$ 8,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a4",
    title: "Expresion de mi mismo",
    year: 2025,
    medium: "Acrilico sobre tela",
    dimensions: "1.00x1.50m",
    detail: "Enmarcado",
    price: "$ 30,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a5",
    title: "Florero 001",
    year: 2026,
    medium: "Acrilico sobre tela",
    dimensions: "80x80cm",
    price: "$ 20,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a6",
    title: "Daed",
    year: 2025,
    medium: "Acrilico sobre tela",
    dimensions: "90 x 1.50m",
    price: "Comision",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a7",
    title: "Bure x Nie",
    year: 2024,
    medium: "Risografía 2 tintas",
    dimensions: "20.5 x 27cm. 21.5 x 14.5cm. 12.5 x 12.5cm.",
    detail: "Kit de 3 prints",
    price: "$ 600.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a8",
    title: "Layered Mirror – Acrylic 002",
    year: 2024,
    medium: "Acrilico con aluminio",
    dimensions: "1.3mx.77m",
    price: "$ 20,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a9",
    title: "Espacio",
    year: 2023,
    medium: "Acrilico sobre tela",
    dimensions: "",
    price: "Comision",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a10",
    title: "Portal Mirror 1.0",
    year: 2024,
    medium: "Espejo con MDF",
    dimensions: ".80x1.20m",
    price: "Comision",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a11",
    title: "Bure x Phon",
    year: 2024,
    medium: "Risografía 3 tintas, Papel Antique Vellum 216 gsm.",
    dimensions: "28x39cm",
    price: "$ 600.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a12",
    title: "Mahou – Miércoles",
    year: 2022,
    medium: "Acrilico sobre tela",
    dimensions: "60x80cm",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a13",
    title: "Mahou – Jueves",
    year: 2022,
    medium: "Acrilico sobre tela",
    dimensions: "80x60cm",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a14",
    title: "Mahou – Viernes",
    year: 2022,
    medium: "Acrilico sobre tela",
    dimensions: "80x120cm",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a15",
    title: "B-Drop",
    year: 2022,
    medium: "Alfombra",
    dimensions: "80x90cm",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a16",
    title: "No name",
    year: 2022,
    medium: "Acrilico sobre tela",
    dimensions: "43x28cm Ovalo",
    price: "Comision",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a17",
    title: "Paisaje",
    year: 2022,
    medium: "Acrilico sobre hoja de algohodon",
    dimensions: "9x12\"",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a18",
    title: "Mas allá del muro",
    year: 2021,
    medium: "Impresion sobre tela",
    dimensions: "1.50x1.50m",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a19",
    title: "Topical metal",
    year: 2021,
    medium: "Aerosol sobre MDF",
    dimensions: "73x100cm",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a20",
    title: "Bronce",
    year: 2021,
    medium: "Acrilico sobre MDF y base de madera",
    dimensions: "1.10x.80m",
    price: "$ 20,000.00",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a21",
    title: "1.1.2",
    year: 2019,
    medium: "Acrilico sobre tela",
    dimensions: "",
    moreHref: CONTACT_HREF,
  },
  {
    id: "a22",
    title: "Socceramic",
    year: 2018,
    medium: "Serigrafía a 3 tintas, seriado 50 piezas",
    dimensions: "40x60cm",
    price: "$ 300.00",
    moreHref: CONTACT_HREF,
  },
];
