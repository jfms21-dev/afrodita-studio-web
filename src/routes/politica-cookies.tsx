import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, seo } from "@/components/SiteLayout";

export const Route = createFileRoute("/politica-cookies")({
  head: () => seo("Política de Cookies — Afrodita Studio", "Qué cookies usa la web de Afrodita Studio y cómo gestionarlas."),
  component: () => (
    <SiteLayout alwaysScrolled>
      <main className="legal"><h1>Política de Cookies</h1>
        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos que los sitios web guardan en tu navegador para recordar información sobre tu visita.</p>
        <h2>Cookies que utiliza esta web</h2>
        <ul>
          <li><strong>Preferencia de cookies (técnica, propia):</strong> se guarda en tu navegador si has aceptado o rechazado el aviso de cookies, para no volver a mostrarlo.</li>
          <li><strong>Google Maps (terceros):</strong> el mapa de la sección de contacto lo proporciona Google, que puede instalar cookies propias. Más información en la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">política de cookies de Google</a>.</li>
        </ul>
        <h2>Cómo gestionarlas</h2>
        <p>Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge…). Si las bloqueas, es posible que el mapa no se muestre correctamente.</p>
      </main>
    </SiteLayout>
  ),
});
