import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, seo } from "@/components/SiteLayout";
import { GALLERY } from "@/data/gallery";

export const Route = createFileRoute("/galeria")({
  head: () => seo("Galería — Afrodita Studio", "Trabajos de manicura, pedicura, pestañas y cejas de Afrodita Studio."),
  component: Galeria,
});

function Galeria() {
  const [open, setOpen] = useState<(typeof GALLERY)[number] | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <SiteLayout>
      <section className="gallery-wrap gallery-page">
        <div className="section-head">
          <span className="eyebrow">Galería</span>
          <h2>Nuestros <em>trabajos</em></h2>
        </div>
        <div className="gallery-full">
          {GALLERY.map((p) => (
            <figure key={p.src}>
              <button type="button" onClick={() => setOpen(p)} aria-label={`Ampliar ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            </figure>
          ))}
        </div>
      </section>
      {open && (
        <div className="lightbox open" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" aria-label="Cerrar" onClick={() => setOpen(null)}>×</button>
          <img src={open.src} alt={open.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </SiteLayout>
  );
}
