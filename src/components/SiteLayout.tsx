import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export const WA_URL =
  "https://wa.me/34682297159?text=Hola%2C%20quiero%20pedir%20cita%20en%20Afrodita%20Studio";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Afrodita+Studio,+C.+de+la+Concordia+1,+M%C3%B3stoles";

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className={light ? "logo light" : "logo"} aria-label="Afrodita Studio, inicio">
      {light ? (
        <img src="/logo-full.png" alt="Afrodita Studio · Tu espacio, tu cuidado y tu esencia" width={700} height={461} style={{ width: 220, height: "auto" }} />
      ) : (
        <img src="/logo-header.png" alt="Afrodita Studio" width={600} height={194} style={{ height: 46, width: "auto" }} />
      )}
    </Link>
  );
}

export function SiteLayout({ children, alwaysScrolled }: { children: ReactNode; alwaysScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    let choice: string | null = null;
    try { choice = localStorage.getItem("starperfecta_cookies"); } catch {}
    if (!choice) setShowCookies(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const setChoice = (v: string) => {
    try { localStorage.setItem("starperfecta_cookies", v); } catch {}
    setShowCookies(false);
  };
  const close = () => setOpen(false);

  return (
    <>
      <header id="header" className={scrolled || alwaysScrolled ? "scrolled" : ""}>
        <Logo />
        <nav id="nav" aria-label="Navegación principal" className={open ? "open" : ""}>
          <ul>
            <li><a href="/#inicio" onClick={close}>Inicio</a></li>
            <li><Link to="/servicios" onClick={close}>Servicios</Link></li>
            <li><a href="/#galeria" onClick={close}>Galería</a></li>
            <li><a href="/#opiniones" onClick={close}>Opiniones</a></li>
            <li><a href="/#contacto" onClick={close}>Contacto</a></li>
          </ul>
        </nav>
        <button className="nav-toggle" id="navToggle" aria-label="Abrir menú" onClick={() => setOpen((o) => !o)}>☰</button>
      </header>

      {children}

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Manicura rusa y pedicura.</p>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><Link to="/servicios" hash="manos">Manicura</Link></li>
              <li><Link to="/servicios" hash="pies">Pedicura</Link></li>
              <li><Link to="/servicios" hash="pestanas">Extensiones y lifting de pestañas</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>📍 C. de la Concordia, 1</li>
              <li>Móstoles, Madrid</li>
              <li>📞 <a href="tel:+34682297159">682 29 71 59</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Afrodita Studio</span>
          <span>
            <Link to="/aviso-legal">Aviso Legal</Link> &middot; <Link to="/politica-privacidad">Privacidad</Link> &middot;{" "}
            <Link to="/politica-cookies">Cookies</Link>
          </span>
        </div>
      </footer>

      <div id="cookie-banner" className="cookie-banner" style={{ display: showCookies ? "flex" : "none" }}>
        <p>
          Esta web utiliza cookies de terceros (Google Maps) para ofrecerte la mejor experiencia. Puedes aceptar su uso o
          rechazarlas. <Link to="/politica-cookies">Más información</Link>
        </p>
        <div className="cookie-actions">
          <button onClick={() => setChoice("rejected")} className="ck-reject">Rechazar</button>
          <button onClick={() => setChoice("accepted")} className="ck-accept">Aceptar</button>
        </div>
      </div>

      <div className="social-fabs">
        <a className="wa-fab" href={WA_URL} target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c2.6 1 2.6.7 3.1.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.3A11.8 11.8 0 0 0 1.8 17.7L.2 23.8l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.5Z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
