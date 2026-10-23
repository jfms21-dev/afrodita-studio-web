import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, seo } from "@/components/SiteLayout";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => seo("Política de Privacidad — Afrodita Studio", "Cómo trata Afrodita Studio tus datos personales."),
  component: () => (
    <SiteLayout alwaysScrolled>
      <main className="legal"><h1>Política de Privacidad</h1>
        <h2>Responsable del tratamiento</h2>
        <p><strong>Afrodita Studio</strong> · C. de la Concordia, 1, local K, 28931 Móstoles (Madrid) · Tel. 682 29 71 59.</p>
        <h2>Qué datos tratamos</h2>
        <p>Esta web no dispone de formularios. Solo trataremos los datos que nos facilites voluntariamente al contactar por teléfono o WhatsApp, o al reservar a través de Reservio (nombre, teléfono y, en su caso, correo electrónico).</p>
        <h2>Finalidad y legitimación</h2>
        <p>Usamos tus datos únicamente para gestionar tu cita y responder a tus consultas, con base en tu consentimiento y en la relación precontractual o contractual derivada de la prestación del servicio.</p>
        <h2>Conservación</h2>
        <p>Los datos se conservarán el tiempo necesario para atender tu solicitud y cumplir las obligaciones legales aplicables.</p>
        <h2>Destinatarios</h2>
        <p>No cedemos tus datos a terceros salvo obligación legal. Las plataformas que utilizas para contactarnos (WhatsApp, Reservio) tratan los datos según sus propias políticas.</p>
        <h2>Tus derechos</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad dirigiéndote al centro en la dirección indicada. También puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
      </main>
    </SiteLayout>
  ),
});
