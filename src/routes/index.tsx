import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, WA_URL, MAPS_URL, seo } from "@/components/SiteLayout";
import { useInView } from "@/hooks/use-in-view";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Afrodita Studio — Manicura rusa y pedicura en Móstoles",
      "Afrodita Studio, en C. de la Concordia 1, Móstoles. Manicura rusa, uñas con diseños y pedicura spa. 5,0★ con 26 reseñas en Google.",
    ),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="hero" id="inicio">
        <div className="hero-text">
          <span className="eyebrow">Afrodita Studio</span>
          <h1>Tu espacio, tu cuidado, <em>tu esencia.</em></h1>
          <p>Especialistas en manicura rusa, pedicura spa y estilismo de uñas. Un rincón pensado para desconectar y regalarte el tiempo y el detalle que mereces.</p>
          <div className="hero-ctas">
            <Link to="/servicios" className="btn-outline">Descubre los servicios</Link>
            <a href={WA_URL} className="btn-solid" target="_blank" rel="noopener">Pide tu cita →</a>
          </div>
          <a className="hero-rating" href={MAPS_URL} target="_blank" rel="noopener">
            <span className="stars">★★★★★</span>
            <span><strong>5,0</strong> · 26 reseñas en Google</span>
          </a>
        </div>
        <div className="hero-img"><img src="/salon-hero.jpg" alt="Salón de Afrodita Studio con flores rosas suspendidas" /></div>
      </section>

      <section className="trust">
        <div className="section-head">
          <span className="eyebrow">✦ Nuestra filosofía</span>
          <h2>Mimo <em>y profesionalidad</em></h2>
          <p>Cuidamos tus manos, tus pies y tu mirada: manicura, pedicura, extensiones de pestañas, especialistas en cejas y laminación coreana de cejas y pestañas. Todo con profesionales tituladas, máxima bioseguridad y productos de alta calidad, en un espacio de calma pensado para ti.</p>
          <PhilosophyIcons />
          <p>Creemos en el poder de la pausa, ese momento de desconexión que todas merecemos. Por eso cuidamos cada detalle para que vivas una experiencia de confianza total y salgas sintiéndote tú, con tu belleza natural realzada.</p>

        </div>
      </section>

      <section className="worlds">
        <div className="section-head">
          <span className="eyebrow">Lo que ofrecemos</span>
          <h2>Nuestras <em>categorías</em></h2>
        </div>
        <div className="worlds-grid">
          <Link to="/servicios" hash="manos" className="world-card"><img src="/maps_09.jpg" alt="Manicura" /><div className="world-text"><h3>Manicura</h3><span className="world-link">Ver servicios →</span></div></Link>
          <Link to="/servicios" hash="pies" className="world-card"><img src="/maps_08.jpg" alt="Pedicura" /><div className="world-text"><h3>Pedicura</h3><span className="world-link">Ver servicios →</span></div></Link>
          <Link to="/servicios" hash="pestanas" className="world-card"><img src="/pestanas-volumen.jpg" alt="Extensiones de pestañas con volumen" /><div className="world-text"><h3>Extensiones y lifting de pestañas</h3><span className="world-link">Ver servicios →</span></div></Link>
        </div>
      </section>

      <section className="gallery-wrap" id="galeria">
        <div className="section-head">
          <span className="eyebrow">Nuestros trabajos</span>
          <h2>Así es <em>Afrodita</em></h2>
          <p>Te esperamos en la calle de la Concordia, 1, local K, en Móstoles.</p>
        </div>
        <div className="gallery">
          <figure className="big"><img src="/maps_06.jpg" alt="Nuestro salón" loading="lazy" /></figure>
          <figure><img src="/maps_09.jpg" alt="Almendra nude" loading="lazy" /></figure>
          <figure><img src="/maps_07.jpg" alt="Rosa con lunares" loading="lazy" /></figure>
          <figure><img src="/maps_01.jpg" alt="Lila en el estudio" loading="lazy" /></figure>
          <figure><img src="/maps_08.jpg" alt="Puesto de manicura" loading="lazy" /></figure>
        </div>
      </section>

      <section className="reviews-wrap" id="opiniones">
        <div className="section-head">
          <span className="eyebrow">Reseñas Google</span>
          <h2>Lo que dicen <em>nuestras clientas</em></h2>
          <p>5,0 de 5 estrellas · 26 reseñas</p>
        </div>
        <div className="review-grid">
          <div className="review-card"><div className="stars">★★★★★</div><p>"Por fin un sitio de uñas donde cuidan cada detalle. Desde que entras el trato es increíble y se nota muchísimo el mimo y la profesionalidad. Me han dejado las uñas preciosas."</p><cite>Mar C.</cite></div>
          <div className="review-card"><div className="stars">★★★★★</div><p>"Son estupendas todas, en especial Evel: domina perfectamente la manicura rusa, la pedicura súper bien también. Lo recomiendo 100%."</p><cite>Priscila B.</cite></div>
          <div className="review-card"><div className="stars">★★★★★</div><p>"Me recomendaron una pedicura spa y siento mis pies como nuevos. Las chicas súper amables, me sentí muy cómoda."</p><cite>Fabiola C.</cite></div>
        </div>
      </section>

      <section className="cta-section">
        <span className="eyebrow">Reserva</span>
        <h2>¿Te reservamos <em>cita?</em></h2>
        <p>Escríbenos por WhatsApp y te buscamos hueco.</p>
        <div className="cta-row">
          <a href={WA_URL} className="btn-solid" target="_blank" rel="noopener">Pide tu cita →</a>
          <a href={WA_URL} className="btn-outline" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-head">
          <span className="eyebrow">Visítanos</span>
          <h2>Dónde y cuándo encontrarnos</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block"><h3>Dirección</h3><p>C. de la Concordia, 1, local K<br />28931 Móstoles, Madrid</p></div>
            <div className="contact-block"><h3>Teléfono / WhatsApp</h3><p><a href="tel:+34682297159">682 29 71 59</a></p></div>
            <div className="contact-block"><h3>Horario</h3><ul className="hours-list"><li><span>Lunes a viernes</span><span>10:00–20:00</span></li><li><span>Sábado</span><span>10:00–14:00</span></li><li><span>Domingo</span><span>Cerrado</span></li></ul></div>
          </div>
          <div className="contact-map">
            <iframe title="Mapa de Afrodita Studio" src="https://www.google.com/maps?q=Afrodita+Studio,+C.+de+la+Concordia+1,+M%C3%B3stoles&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PhilosophyIcons() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  return (
    <div className="philosophy-icons" ref={ref} data-in={inView ? "true" : "false"} aria-hidden="true">
      <span className="phi-ic">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.4 20.6C7.4 11.4 12.4 5.2 20 5.2s12.6 6.2 11.6 15.4" />
          <path d="M8.4 20.6c-.5 5.2-1.5 9.8-3 14M31.6 20.6c.5 5.2 1.5 9.8 3 14" />
          <path d="M12.9 13.6C13.7 10 16.5 8 20.6 7.8" />
          <path d="M14.9 15.4c1.1-1.2 2.6-1.2 3.6 0-1 1.1-2.5 1.1-3.6 0ZM21.5 15.4c1-1.2 2.5-1.2 3.6 0-1 1.1-2.5 1.1-3.6 0Z" />
          <path d="M12.4 19.6c1.7-2.2 4.2-2.9 7.6-2.9s5.9.7 7.6 2.9c.5 3.8-.6 7-2.7 9-1.8 1.8-3.4 2.6-4.9 2.6s-3.1-.8-4.9-2.6c-2.1-2-3.2-5.2-2.7-9Z" />
          <path d="M12.1 19.1c-1.4-.8-2.2-2.1-2.5-3.9M27.9 19.1c1.4-.8 2.2-2.1 2.5-3.9" />
          <path d="M13.6 22.6c4 1.1 8.8 1.1 12.8 0" />



        </svg>
      </span>
      <i className="phi-rule" />
      <span className="phi-ic">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="4.5" width="8" height="7" rx="1.6" />
          <path d="M17.5 11.5v3.5M22.5 11.5v3.5" />
          <path d="M13 15h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2Z" />
          <path d="M11 25c3 1.6 15 1.6 18 0" />
        </svg>
      </span>
      <i className="phi-rule" />
      <span className="phi-ic">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.6 13.2C11.6 8.6 24.4 8.6 29 12" />
          <path d="M6.5 20.5C11 28 29 28 33.5 20.5" />
          <path d="M10.6 24.1 7 28M15 25.6 13 30.5M20 26.1 20 31.5M25 25.6 27 30.5M29.4 24.1 33 28" />


        </svg>
      </span>
    </div>
  );
}
