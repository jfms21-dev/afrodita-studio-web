// Static gallery photos (public/galeria). Browser-safe for prerendering.
const group = (slug: string, label: string, count: number) =>
  Array.from({ length: count }, (_, i) => ({ src: `/galeria/${slug}-${i + 1}.jpg`, alt: `${label} ${i + 1}` }));

export const GALLERY = [
  ...group("manicura", "Manicura", 23),
  ...group("pedicura", "Pedicura", 2),
  ...group("lifting-coreano", "Pestañas y lifting coreano", 4),
  ...group("laminado-cejas", "Cejas y laminado", 3),
];
