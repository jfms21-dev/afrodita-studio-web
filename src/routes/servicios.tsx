import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, seo } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { CATEGORIES, formatPrice, type CategoryId } from "@/data/services";

export const Route = createFileRoute("/servicios")({
  head: () => seo("Servicios — Afrodita Studio Móstoles", "Precios y duración de manicura, pedicura, extensiones y lifting de pestañas, cejas y depilación facial en Afrodita Studio. Reserva por WhatsApp."),
  component: Servicios,
});

function Servicios() {
  const [tab, setTab] = useState<CategoryId>("manos");
  const [modal, setModal] = useState<CategoryId | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "manos" || h === "pies" || h === "pestanas") setTab(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("hashchange", fromHash); document.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <SiteLayout alwaysScrolled>
      <div className="page-hero">
        <span className="eyebrow">Nuestro catálogo</span>
        <h1>Servicios</h1>
        <p>Manicura, pedicura, extensiones y lifting de pestañas.</p>
      </div>
      <div className="tabs">
        {CATEGORIES.map((category) => (
          <Button variant="ghost" key={category.id} className={`tab-btn${tab === category.id ? " active" : ""}`} aria-pressed={tab === category.id} onClick={() => { setTab(category.id); window.history.replaceState(null, "", `#${category.id}`); }}>{category.title}</Button>
        ))}
      </div>
      {CATEGORIES.map((category) => (
        <div key={category.id} className={`tab-panel${tab === category.id ? " active" : ""}`} id={category.id}>
          <div className="tab-intro"><h2>{category.title}</h2></div>
          <div className="cat-grid single">
            <Button variant="ghost" className="cat-card service-card-button" aria-label={`Ver servicios de ${category.title}`} onClick={() => setModal(category.id)}><img src={category.img} alt={category.title} loading="lazy" /><div className="cat-card-text"><h3>{category.title}</h3><span>Ver servicios</span></div></Button>
          </div>
        </div>
      ))}
      <p className="services-note">¿Quieres saber precios o tienes dudas? Escríbenos por WhatsApp al <a href="https://wa.me/34682297159" target="_blank" rel="noopener" style={{ color: "var(--red)" }}>682 29 71 59</a> y te asesoramos sin compromiso.</p>

      {CATEGORIES.map((category) => (
        <div key={category.id} className={`modal-overlay${modal === category.id ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby={`title-${category.id}`}>
            <Button variant="ghost" className="modal-close" onClick={() => setModal(null)} aria-label="Cerrar">×</Button>
            <h3 id={`title-${category.id}`}>{category.title}</h3>
            {category.groups.map(group => (
              <div className="svc-group" key={group.title}>
                <h4>{group.title}</h4>
                {group.services.map(service => (
                  <div className="svc-row" key={service.name}><div><div className="svc-name">{service.name}</div><span className="svc-desc">{service.minutes} min</span></div><div className="svc-price">{formatPrice(service)}</div></div>
                ))}
              </div>
            ))}
            <a className="modal-cta alt" href={`https://wa.me/34682297159?text=${encodeURIComponent(`Hola, quiero información sobre ${category.title.toLowerCase()} en Afrodita Studio`)}`} target="_blank" rel="noopener">Pedir cita por WhatsApp</a>
          </div>
        </div>
      ))}
    </SiteLayout>
  );
}
