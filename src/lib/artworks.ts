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

export const artworks: Artwork[] = [
  { id: "a1", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a2", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a3", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a4", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a5", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a6", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a7", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
  { id: "a8", title: "Un vistazo al charco", year: 2026, medium: "Acrilico sobre tela", dimensions: "50x60cm" },
];
