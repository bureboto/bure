export type Piece = {
  id: string;
  year: number;
  place: string;
  ft?: string;
  // aspect ratio (height / width) drives the pinterest-style card height
  ratio: number;
};

// Datos de ejemplo (placeholder) — se reemplazarán por las piezas reales
// cuando se suban las fotografías.
export const pieces: Piece[] = [
  { id: "p1", year: 2026, place: "Ciudad de México", ratio: 1.1 },
  { id: "p2", year: 2026, place: "Nueva York", ft: "Studio 12", ratio: 0.63 },
  { id: "p3", year: 2026, place: "Guadalajara", ratio: 0.88 },
  { id: "p4", year: 2026, place: "Milán", ratio: 1.05 },
  { id: "p5", year: 2025, place: "Texcoco", ratio: 1.1 },
  { id: "p6", year: 2025, place: "Oaxaca", ratio: 0.63 },
  { id: "p7", year: 2025, place: "París", ft: "Léa Dubois", ratio: 0.98 },
  { id: "p8", year: 2025, place: "Monterrey", ratio: 0.73 },
  { id: "p9", year: 2025, place: "Roma", ratio: 1.05 },
  { id: "p10", year: 2024, place: "Molino de Flores, Texcoco", ratio: 1.1 },
  { id: "p11", year: 2024, place: "Puebla", ratio: 0.63 },
  { id: "p12", year: 2024, place: "Tulum", ratio: 0.88 },
  { id: "p13", year: 2024, place: "Berlín", ratio: 1.05 },
];

export function getPiece(id: string) {
  return pieces.find((p) => p.id === id);
}

export function piecesByYearDesc(): { year: number; items: Piece[] }[] {
  const years = Array.from(new Set(pieces.map((p) => p.year))).sort(
    (a, b) => b - a
  );
  return years.map((year) => ({
    year,
    items: pieces.filter((p) => p.year === year),
  }));
}
