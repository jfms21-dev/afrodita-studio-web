// Shared by build validation, local preview and deployed-site verification.
export const pages = [
  { path: "/", file: "index.html", title: "Afrodita Studio — Manicura rusa y pedicura en Móstoles" },
  { path: "/servicios", file: "servicios/index.html", title: "Servicios — Afrodita Studio Móstoles" },
  { path: "/aviso-legal", file: "aviso-legal/index.html", title: "Aviso Legal — Afrodita Studio" },
  { path: "/politica-privacidad", file: "politica-privacidad/index.html", title: "Política de Privacidad — Afrodita Studio" },
  { path: "/politica-cookies", file: "politica-cookies/index.html", title: "Política de Cookies — Afrodita Studio" },
];

export const images = ["maps_01.jpg", "maps_06.jpg", "maps_07.jpg", "maps_08.jpg", "maps_09.jpg", "favicon.png", "logo-header.png", "logo-full.png"];

export function localReferences(html) {
  return [...html.matchAll(/(?:src|href)=["'](\/[^"']*)["']/g)].map((match) => match[1]);
}