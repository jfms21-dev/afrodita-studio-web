import { describe, expect, it } from "vitest";
import { CATEGORIES } from "@/data/services";

const expected = [
  [
    "manos",
    "Manicura",
    "Exprés",
    30,
    15.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Rusa",
    90,
    28.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Rusa spa",
    90,
    32.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Rusa sin esmalte",
    60,
    20.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Rusa spa sin esmalte",
    60,
    22.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Japonesa",
    30,
    20.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Retirada semipermanente manos",
    30,
    12.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Tratamiento onicofagia",
    180,
    45.9,
    false
  ],
  [
    "manos",
    "Manicura",
    "Corrección estructura",
    10,
    1.0,
    false
  ],
  [
    "manos",
    "Manicura",
    "Niños-Manicura",
    30,
    12.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Extensiones soft gel",
    90,
    40.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Extensiones acrygel S-M",
    120,
    47.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Extensiones acrygel L-XL",
    150,
    56.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Relleno soft gel",
    90,
    32.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Relleno acrygel S-M",
    90,
    39.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Relleno acrygel L-XL",
    120,
    48.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Retirada soft gel",
    60,
    22.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Retirada acrygel",
    90,
    22.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Retirada soft gel/acrygel/semi+manicura rusa",
    90,
    30.9,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Extensión 1 uña",
    10,
    3.5,
    false
  ],
  [
    "manos",
    "Uñas gel / acrygel",
    "Parche por uña",
    10,
    2.5,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Puntos y líneas por uña",
    30,
    0.5,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Cambio de color",
    5,
    1.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Purpurina",
    5,
    1.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Básica",
    5,
    2.5,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Puntos y líneas manos",
    30,
    3.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Francesa clásica",
    5,
    3.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Premium o doble francesa",
    15,
    3.5,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "3D",
    30,
    5.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Diseño elaborado por uña",
    30,
    5.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Francesa sonrisa",
    10,
    5.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Glazed",
    10,
    5.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Ojo de gato",
    10,
    8.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Babyboomer/Aurora",
    15,
    10.0,
    false
  ],
  [
    "manos",
    "Decoración · Extras",
    "Múltiple",
    30,
    10.0,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Exprés",
    30,
    20.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Rusa",
    90,
    39.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Rusa spa",
    90,
    42.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Rusa sin esmaltar",
    60,
    35.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Rusa spa sin esmaltar",
    60,
    38.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Retirada semipermanente pies",
    30,
    12.9,
    false
  ],
  [
    "pies",
    "Pedicura",
    "Reconstrucción 1 uña pie",
    10,
    4.0,
    false
  ],
  [
    "pestanas",
    "Lifting de pestañas",
    "Lifting coreano+tinte",
    90,
    50.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Clásicas · Set",
    135,
    45.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Clásicas · Relleno",
    90,
    30.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Efecto rímel · Set",
    150,
    55.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Efecto rímel · Relleno",
    90,
    35.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Aura · Set",
    150,
    70.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Aura · Relleno",
    90,
    45.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Brasileño · Set",
    195,
    75.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Brasileño · Relleno",
    120,
    50.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Egipcio 6D · Set",
    210,
    85.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Egipcio 6D · Relleno",
    120,
    60.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Griego 5D · Set",
    210,
    95.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Griego 5D · Relleno",
    120,
    55.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Retirada pestañas",
    60,
    15.0,
    false
  ],
  [
    "pestanas",
    "Extensiones de pestañas",
    "Retirada + nueva puesta mismo día",
    60,
    5.0,
    true
  ],
  [
    "pestanas",
    "Cejas",
    "Laminado+henna+depilación",
    80,
    40.0,
    false
  ],
  [
    "pestanas",
    "Cejas",
    "Henna Ombre Brown+diseño+depilación",
    90,
    45.0,
    false
  ],
  [
    "pestanas",
    "Cejas",
    "Depilación cejas Prémium",
    60,
    20.0,
    false
  ],
  [
    "pestanas",
    "Cejas",
    "Depilación cejas exprés",
    30,
    13.0,
    false
  ],
  [
    "pestanas",
    "Depilación facial",
    "Pack facial+labio sup+patillas+mentón",
    90,
    20.0,
    false
  ],
  [
    "pestanas",
    "Depilación facial",
    "Depilación labio sup cera",
    15,
    5.0,
    false
  ]
] as const;

describe("User supplied service durations and tariffs", () => {
  it.each(expected)("%s / %s / %s", (category, group, name, minutes, price, from) => {
    const service = CATEGORIES.find(c => c.id === category)?.groups.find(g => g.title === group)?.services.find(s => s.name === name);
    expect(service).toEqual({ name, minutes, price, ...(from ? { from: true } : {}) });
  });
});
