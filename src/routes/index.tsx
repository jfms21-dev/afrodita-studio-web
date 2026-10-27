import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, WA_URL, MAPS_URL, seo } from "@/components/SiteLayout";

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
          <h1>Tu espacio de <em>cuidado y delicadeza.</em></h1>
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
          <p>Un equipo de profesionales tituladas que cuida de tus uñas y tu mirada como te mereces. Nos esforzamos al máximo en bioseguridad y trabajamos solo con productos de alta calidad, en un espacio de calma pensado para tu bienestar.</p>
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
        <div className="brands"><span>Afrodita</span><span>Móstoles</span><span>Studio</span></div>
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
