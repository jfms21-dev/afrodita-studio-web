import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, seo } from "@/components/SiteLayout";

export const Route = createFileRoute("/servicios")({
  head: () => seo("Servicios — Afrodita Studio Móstoles", "Manicura rusa, semipermanente, diseños y pedicura spa en Afrodita Studio, Móstoles. Pide precio o cita por WhatsApp."),
  component: Servicios,
});

type Tab = "manos" | "pies";
const DATA = {
  manos: { title: "Manicura", sub: "Manos", intro: "Manos perfectas.", img: "/maps_09.jpg", rows: [["Manicura rusa", "Limpieza profunda de cutícula"], ["Manicura semipermanente", "Color duradero"], ["Diseños", "Decoración a tu gusto"]], msg: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20manicura" },
  pies: { title: "Pedicura", sub: "Pies", intro: "Pies como nuevos.", img: "/maps_08.jpg", rows: [["Pedicura spa", "Exfoliación e hidratación"], ["Pedicura semipermanente", "Color duradero"]], msg: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20pedicura" },
} as const;

function Servicios() {
  const [tab, setTab] = useState<Tab>("manos");
  const [modal, setModal] = useState<Tab | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "manos" || h === "pies") setTab(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("hashchange", fromHash); document.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => { document.body.style.overflow = modal ? "hidden" : ""; }, [modal]);

  return (
    <SiteLayout alwaysScrolled>
      <div className="page-hero">
        <span className="eyebrow">Nuestro catálogo</span>
        <h1>Servicios</h1>
        <p>Organizados por categoría. Toca una tarjeta para ver los servicios y pedir precio o cita.</p>
      </div>
      <div className="tabs">
        {(["manos", "pies"] as Tab[]).map((t) => (
          <button key={t} className={`tab-btn${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>{DATA[t].sub}</button>
        ))}
      </div>
      {(["manos", "pies"] as Tab[]).map((t) => (
        <div key={t} className={`tab-panel${tab === t ? " active" : ""}`} id={t}>
          <div className="tab-intro"><span className="script">{DATA[t].sub}</span><h2>{DATA[t].title}</h2><p>{DATA[t].intro}</p></div>
          <div className="cat-grid single">
            <div className="cat-card" onClick={() => setModal(t)}><img src={DATA[t].img} alt={DATA[t].title} loading="lazy" /><div className="cat-card-text"><h3>{DATA[t].title}</h3><span>Ver servicios</span></div></div>
          </div>
        </div>
      ))}
      <p className="services-note">¿Quieres saber precios o tienes dudas? Escríbenos por WhatsApp al <a href="https://wa.me/34682297159" target="_blank" rel="noopener" style={{ color: "var(--red)" }}>682 29 71 59</a> y te asesoramos sin compromiso.</p>

      {(["manos", "pies"] as Tab[]).map((t) => (
        <div key={t} className={`modal-overlay${modal === t ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Cerrar">×</button>
            <h3>{DATA[t].title}</h3><p className="modal-sub">{DATA[t].sub}</p>
            {DATA[t].rows.map(([n, d]) => (
              <div className="svc-row" key={n}><div><div className="svc-name">{n}</div><span className="svc-desc">{d}</span></div><div className="svc-price">Consultar</div></div>
            ))}
            <a className="modal-cta alt" href={`https://wa.me/34682297159?text=${DATA[t].msg}`} target="_blank" rel="noopener">Pedir cita por WhatsApp</a>
          </div>
        </div>
      ))}
    </SiteLayout>
  );
}
