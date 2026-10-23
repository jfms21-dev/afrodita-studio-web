import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, seo } from "@/components/SiteLayout";

export const Route = createFileRoute("/aviso-legal")({
  head: () => seo("Aviso Legal — Afrodita Studio", "Aviso legal del sitio web de Afrodita Studio, Móstoles."),
  component: () => (
    <SiteLayout alwaysScrolled>
      <main className="legal"><h1>Aviso Legal</h1>
        <h2>1. Datos identificativos</h2>
        <p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que este sitio web pertenece a <strong>Afrodita Studio</strong>, con domicilio en C. de la Concordia, 1, local K, 28931 Móstoles (Madrid). Teléfono de contacto: 682 29 71 59.</p>
        <h2>2. Objeto</h2>
        <p>Este sitio web tiene como finalidad informar sobre los servicios de manicura y pedicura que se prestan en el centro, así como facilitar el contacto y la reserva de citas.</p>
        <h2>3. Condiciones de uso</h2>
        <p>El acceso a esta web es gratuito e implica la aceptación de este aviso legal. La persona usuaria se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.</p>
        <h2>4. Propiedad intelectual</h2>
        <p>Los textos, fotografías de trabajos, logotipos y diseño de esta web pertenecen a su titular o se usan con licencia (algunas imágenes ilustrativas proceden de Unsplash). Queda prohibida su reproducción sin autorización.</p>
        <h2>5. Enlaces externos</h2>
        <p>La web contiene enlaces a servicios de terceros (Instagram, Facebook, WhatsApp, Google Maps y Reservio). El titular no se responsabiliza del contenido ni de las políticas de dichos sitios.</p>
        <h2>6. Legislación aplicable</h2>
        <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme a derecho.</p>
      </main>
    </SiteLayout>
  ),
});
