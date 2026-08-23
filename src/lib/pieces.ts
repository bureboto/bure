export type Piece = {
  id: string;
  year: number;
  // fecha completa tomada del nombre de archivo (AÑO_MES_DÍA_Etiqueta.jpg)
  dateLabel: string;
  file: string;
  width: number;
  height: number;
  // aspect ratio (height / width) drives the pinterest-style card height
  ratio: number;
};

// Datos generados a partir de las fotografías en Assets/Images (public/archive).
// Convención de nombre: AÑO_MES_DÍA_Etiqueta.jpg — el pie de foto muestra solo la fecha.
export const pieces: Piece[] = [
  { id: "p001", year: 2026, dateLabel: "16.08.2026", file: "/archive/2026_08_16_Sketch.jpg", width: 1136, height: 2030, ratio: 1.7870 },
  { id: "p002", year: 2026, dateLabel: "07.08.2026", file: "/archive/2026_08_07_Flowers.jpg", width: 1404, height: 1378, ratio: 0.9815 },
  { id: "p003", year: 2026, dateLabel: "02.08.2026", file: "/archive/2026_08_02_Crome.jpg", width: 1398, height: 1762, ratio: 1.2604 },
  { id: "p004", year: 2026, dateLabel: "23.07.2026", file: "/archive/2026_07_23_Lick.jpg", width: 1140, height: 2030, ratio: 1.7807 },
  { id: "p005", year: 2026, dateLabel: "19.05.2026", file: "/archive/2026_05_19_Texcoco.jpg", width: 1406, height: 1760, ratio: 1.2518 },
  { id: "p006", year: 2026, dateLabel: "10.05.2026", file: "/archive/2026_05_10_Mirror.jpg", width: 1394, height: 1754, ratio: 1.2582 },
  { id: "p007", year: 2026, dateLabel: "17.04.2026", file: "/archive/2026_04_17_Croche.jpg", width: 1404, height: 1754, ratio: 1.2493 },
  { id: "p008", year: 2026, dateLabel: "14.04.2026", file: "/archive/2026_04_14_Phone.jpg", width: 1398, height: 1750, ratio: 1.2518 },
  { id: "p009", year: 2026, dateLabel: "09.04.2026", file: "/archive/2026_04_09_Machine.jpg", width: 1208, height: 1512, ratio: 1.2517 },
  { id: "p010", year: 2026, dateLabel: "25.03.2026", file: "/archive/2026_03_25_Flowers.jpg", width: 1396, height: 1442, ratio: 1.0330 },
  { id: "p011", year: 2026, dateLabel: "25.03.2026", file: "/archive/2026_03_25__Flowers.jpg", width: 1138, height: 2024, ratio: 1.7786 },
  { id: "p012", year: 2026, dateLabel: "12.03.2026", file: "/archive/2026_03_12_Chocolate.jpg", width: 1400, height: 1878, ratio: 1.3414 },
  { id: "p013", year: 2026, dateLabel: "18.02.2026", file: "/archive/2026_02_18_Izta.jpg", width: 1134, height: 2026, ratio: 1.7866 },
  { id: "p014", year: 2026, dateLabel: "08.02.2026", file: "/archive/2026_02_08_Izta.jpg", width: 1404, height: 1872, ratio: 1.3333 },
  { id: "p015", year: 2026, dateLabel: "26.01.2026", file: "/archive/2026_01_26_Screenshot-2026-08-22at5.23.56p.m..jpg", width: 1404, height: 1870, ratio: 1.3319 },
  { id: "p016", year: 2026, dateLabel: "05.01.2026", file: "/archive/2026_01_05_Screenshot2026-08-22at52950pm.jpg", width: 1406, height: 1754, ratio: 1.2475 },
  { id: "p017", year: 2024, dateLabel: "02.12.2024", file: "/archive/2024_12_2_Paint.jpg", width: 1408, height: 1754, ratio: 1.2457 },
  { id: "p018", year: 2024, dateLabel: "02.12.2024", file: "/archive/2024_12_2_Tag.jpg", width: 1140, height: 2030, ratio: 1.7807 },
  { id: "p019", year: 2024, dateLabel: "02.12.2024", file: "/archive/2024_12_2_Video.jpg", width: 1136, height: 2018, ratio: 1.7764 },
  { id: "p020", year: 2024, dateLabel: "16.07.2024", file: "/archive/2024_07_16_Paint.jpg", width: 1138, height: 2032, ratio: 1.7856 },
  { id: "p021", year: 2024, dateLabel: "06.06.2024", file: "/archive/2024_06_06_Niiie-0.jpg", width: 1396, height: 1750, ratio: 1.2536 },
  { id: "p022", year: 2024, dateLabel: "06.06.2024", file: "/archive/2024_06_06_Niiie-1.jpg", width: 1398, height: 1758, ratio: 1.2575 },
  { id: "p023", year: 2024, dateLabel: "06.06.2024", file: "/archive/2024_06_06_Niiie-2.jpg", width: 1394, height: 1754, ratio: 1.2582 },
  { id: "p024", year: 2024, dateLabel: "27.05.2024", file: "/archive/2024_05_27_Texcoco-1.jpg", width: 1398, height: 1752, ratio: 1.2532 },
  { id: "p025", year: 2024, dateLabel: "27.05.2024", file: "/archive/2024_05_27_Texcoco.jpg", width: 1398, height: 1752, ratio: 1.2532 },
  { id: "p026", year: 2024, dateLabel: "24.05.2024", file: "/archive/2024_05_24_Bolsa.jpg", width: 1392, height: 1748, ratio: 1.2557 },
  { id: "p027", year: 2024, dateLabel: "17.05.2024", file: "/archive/2024_05_17_Mom.jpg", width: 1406, height: 1752, ratio: 1.2461 },
  { id: "p028", year: 2024, dateLabel: "16.04.2024", file: "/archive/2024_04_16_Bolsa.jpg", width: 1396, height: 1752, ratio: 1.2550 },
  { id: "p029", year: 2024, dateLabel: "05.03.2024", file: "/archive/2024_03_05_Acrilicos.jpg", width: 1398, height: 1754, ratio: 1.2546 },
  { id: "p030", year: 2024, dateLabel: "18.02.2024", file: "/archive/2024_02_18_Molino.jpg", width: 1398, height: 1756, ratio: 1.2561 },
  { id: "p031", year: 2024, dateLabel: "15.01.2024", file: "/archive/2024_01_15_Graffiti.jpg", width: 1406, height: 1754, ratio: 1.2475 },
  { id: "p032", year: 2023, dateLabel: "27.11.2023", file: "/archive/2023_11_27_Acrilico.jpg", width: 1138, height: 2020, ratio: 1.7750 },
  { id: "p033", year: 2023, dateLabel: "09.11.2023", file: "/archive/2023_11_09_Graffiti.jpg", width: 1406, height: 1756, ratio: 1.2489 },
  { id: "p034", year: 2023, dateLabel: "30.09.2023", file: "/archive/2023_09_30_Image.jpg", width: 1394, height: 1752, ratio: 1.2568 },
  { id: "p035", year: 2023, dateLabel: "07.09.2023", file: "/archive/2023_09_07_Graffiti.jpg", width: 1398, height: 1754, ratio: 1.2546 },
  { id: "p036", year: 2023, dateLabel: "18.08.2023", file: "/archive/2023_08_18_motion-.jpg", width: 1136, height: 2036, ratio: 1.7923 },
  { id: "p037", year: 2023, dateLabel: "11.08.2023", file: "/archive/2023_08_11_Paris-1.jpg", width: 1140, height: 2024, ratio: 1.7754 },
  { id: "p038", year: 2023, dateLabel: "11.08.2023", file: "/archive/2023_08_11_Paris.jpg", width: 1398, height: 1752, ratio: 1.2532 },
  { id: "p039", year: 2023, dateLabel: "27.07.2023", file: "/archive/2023_07_27_Card.jpg", width: 1130, height: 2022, ratio: 1.7894 },
  { id: "p040", year: 2023, dateLabel: "23.07.2023", file: "/archive/2023_07_23_Espacio.jpg", width: 1402, height: 1746, ratio: 1.2454 },
  { id: "p041", year: 2023, dateLabel: "14.03.2023", file: "/archive/2023_03_14_Art-1.jpg", width: 1400, height: 1750, ratio: 1.2500 },
  { id: "p042", year: 2023, dateLabel: "14.03.2023", file: "/archive/2023_03_14_Art.jpg", width: 1400, height: 1754, ratio: 1.2529 },
  { id: "p043", year: 2023, dateLabel: "02.03.2023", file: "/archive/2023_03_02_Animation.jpg", width: 1394, height: 1746, ratio: 1.2525 },
  { id: "p044", year: 2023, dateLabel: "02.03.2023", file: "/archive/2023_03_02_Motion.jpg", width: 1400, height: 1756, ratio: 1.2543 },
  { id: "p045", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Galeria-1.jpg", width: 1394, height: 1400, ratio: 1.0043 },
  { id: "p046", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Galeria-2.jpg", width: 1398, height: 1404, ratio: 1.0043 },
  { id: "p047", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Galeria-3.jpg", width: 1400, height: 1394, ratio: 0.9957 },
  { id: "p048", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Galeria-4.jpg", width: 1400, height: 1400, ratio: 1.0000 },
  { id: "p049", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Galeria.jpg", width: 1396, height: 1402, ratio: 1.0043 },
  { id: "p050", year: 2022, dateLabel: "08.12.2022", file: "/archive/2022_12_08_Rug.jpg", width: 1398, height: 1750, ratio: 1.2518 },
  { id: "p051", year: 2022, dateLabel: "16.09.2022", file: "/archive/2022_09_16_BCN.jpg", width: 1402, height: 1756, ratio: 1.2525 },
  { id: "p052", year: 2022, dateLabel: "02.09.2022", file: "/archive/2022_09_02_Florencia.jpg", width: 1396, height: 1756, ratio: 1.2579 },
  { id: "p053", year: 2022, dateLabel: "23.02.2022", file: "/archive/2022_02_23_Art.jpg", width: 1402, height: 1398, ratio: 0.9971 },
  { id: "p054", year: 2022, dateLabel: "09.02.2022", file: "/archive/2022_02_09_Art.jpg", width: 1396, height: 1404, ratio: 1.0057 },
  { id: "p055", year: 2022, dateLabel: "22.01.2022", file: "/archive/2022_01_22_Pin.jpg", width: 1398, height: 1394, ratio: 0.9971 },
  { id: "p056", year: 2021, dateLabel: "29.11.2021", file: "/archive/2021_11_29_GDL.jpg", width: 1402, height: 1760, ratio: 1.2553 },
  { id: "p057", year: 2021, dateLabel: "07.11.2021", file: "/archive/2021_11_07_Bomb.jpg", width: 1392, height: 1760, ratio: 1.2644 },
  { id: "p058", year: 2021, dateLabel: "04.11.2021", file: "/archive/2021_11_04_Graffiti.jpg", width: 1398, height: 1754, ratio: 1.2546 },
  { id: "p059", year: 2021, dateLabel: "03.10.2021", file: "/archive/2021_10_03_GDL.jpg", width: 1404, height: 1758, ratio: 1.2521 },
  { id: "p060", year: 2021, dateLabel: "26.09.2021", file: "/archive/2021_09_26_ART.jpg", width: 1402, height: 1406, ratio: 1.0029 },
  { id: "p061", year: 2021, dateLabel: "29.08.2021", file: "/archive/2021_08_29_Graffiti.jpg", width: 1394, height: 1744, ratio: 1.2511 },
  { id: "p062", year: 2021, dateLabel: "28.08.2021", file: "/archive/2021_08_28_Bombs.jpg", width: 1400, height: 1752, ratio: 1.2514 },
  { id: "p063", year: 2021, dateLabel: "15.08.2021", file: "/archive/2021_08_15_Mantel.jpg", width: 1396, height: 1404, ratio: 1.0057 },
  { id: "p064", year: 2021, dateLabel: "13.08.2021", file: "/archive/2021_08_13_Dee.jpg", width: 1392, height: 1400, ratio: 1.0057 },
  { id: "p065", year: 2021, dateLabel: "02.08.2021", file: "/archive/2021_08_02_Bomb.jpg", width: 1402, height: 1760, ratio: 1.2553 },
  { id: "p066", year: 2021, dateLabel: "28.07.2021", file: "/archive/2021_07_28_Acrilico.jpg", width: 1402, height: 1748, ratio: 1.2468 },
  { id: "p067", year: 2021, dateLabel: "18.07.2021", file: "/archive/2021_07_18_Orange.jpg", width: 1408, height: 1750, ratio: 1.2429 },
  { id: "p068", year: 2021, dateLabel: "27.06.2021", file: "/archive/2021_06_27_Die-1.jpg", width: 1624, height: 2028, ratio: 1.2488 },
  { id: "p069", year: 2021, dateLabel: "27.06.2021", file: "/archive/2021_06_27_Die-2.jpg", width: 1394, height: 1758, ratio: 1.2611 },
  { id: "p070", year: 2021, dateLabel: "27.06.2021", file: "/archive/2021_06_27_Die.jpg", width: 1616, height: 2022, ratio: 1.2512 },
  { id: "p071", year: 2021, dateLabel: "26.05.2021", file: "/archive/2021_05_26_Art-1.jpg", width: 1618, height: 2024, ratio: 1.2509 },
  { id: "p072", year: 2021, dateLabel: "26.05.2021", file: "/archive/2021_05_26_Art.jpg", width: 1618, height: 2024, ratio: 1.2509 },
  { id: "p073", year: 2021, dateLabel: "24.05.2021", file: "/archive/2021_05_24_Street.jpg", width: 1616, height: 2016, ratio: 1.2475 },
  { id: "p074", year: 2021, dateLabel: "26.04.2021", file: "/archive/2021_04_26_Vitraffiti.jpg", width: 1614, height: 2022, ratio: 1.2528 },
  { id: "p075", year: 2021, dateLabel: "17.04.2021", file: "/archive/2021_04_17_Temazcal-1.jpg", width: 1616, height: 2020, ratio: 1.2500 },
  { id: "p076", year: 2021, dateLabel: "17.04.2021", file: "/archive/2021_04_17_Temazcal.jpg", width: 1136, height: 2036, ratio: 1.7923 },
  { id: "p077", year: 2021, dateLabel: "03.03.2021", file: "/archive/2021_03_03_Bombs.jpg", width: 1614, height: 2016, ratio: 1.2491 },
  { id: "p078", year: 2021, dateLabel: "23.02.2021", file: "/archive/2021_02_23_Textura.jpg", width: 1614, height: 2022, ratio: 1.2528 },
  { id: "p079", year: 2021, dateLabel: "21.02.2021", file: "/archive/2021_02_21_Hofmann.jpg", width: 1616, height: 2026, ratio: 1.2537 },
  { id: "p080", year: 2021, dateLabel: "29.01.2021", file: "/archive/2021_01_29_T-Shirt.jpg", width: 1612, height: 2020, ratio: 1.2531 },
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
