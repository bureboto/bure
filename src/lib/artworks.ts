// Piezas individuales para la sección Pieces — placeholder hasta que se
// suban las imágenes reales y su información (título, técnica, medidas).
export type Artwork = {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  moreHref?: string;
};

// moreHref: manda a contacto por ahora (CTA temporal) hasta que la
// tienda de Shopify esté lista y cada pieza tenga su propio link.
const CONTACT_HREF = "mailto:bureboto@gmail.com";

export const artworks: Artwork[] = [
  { id: "a1", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a2", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a3", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a4", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a5", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a6", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a7", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
  { id: "a8", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm", moreHref: CONTACT_HREF },
];
