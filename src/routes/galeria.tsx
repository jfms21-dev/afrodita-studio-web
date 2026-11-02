import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, seo } from "@/components/SiteLayout";
import { GALLERY } from "@/data/gallery";

export const Route = createFileRoute("/galeria")({
  head: () => seo("Galería — Afrodita Studio", "Trabajos de manicura, pedicura, pestañas y cejas de Afrodita Studio."),
  component: Galeria,
});

function Galeria() {
  return (
    <SiteLayout>
      <section className="gallery-wrap gallery-page">
        <div className="section-head">
          <span className="eyebrow">Galería</span>
          <h2>Nuestros <em>trabajos</em></h2>
        </div>
        <div className="gallery-full">
          {GALLERY.map((p) => (
            <figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" /></figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
