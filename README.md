# Afrodita Studio — web independiente

Web corporativa de manicura y pedicura en Móstoles. Se desarrolla y publica sin cuenta, claves ni servicios de Lovable, conservando el diseño y las fotos del boceto.

## Instalación y ejecución local

Requisitos: Node.js 22.16 o posterior (`.node-version`) y Bun 1.4.4. Instalación de Bun: https://bun.sh/docs/installation

```sh
git clone <URL-DE-TU-REPOSITORIO>
cd <CARPETA-DEL-REPOSITORIO>
bun install --frozen-lockfile
bun run dev
```

Abre http://localhost:8080. No necesita `.env`, base de datos, autenticación ni pagos. También puedes usar `npm install` y `npm run dev`, pero el archivo de bloqueo mantenido es `bun.lock`; usa Bun para instalaciones reproducibles.

## Versión de producción

```sh
bun run test
bun run build
bun run preview
```

Abre http://localhost:4173. La generación prerenderiza las cinco páginas, valida los recursos locales y exporta `dist/`. Solo esa carpeta se publica: HTML, CSS, JavaScript, fotos y fuentes. El servidor generado en `.output/server` se usa durante la generación, **no se despliega ni se necesita en producción**.

```sh
bun run verify:site -- http://localhost:4173
```

El comprobador solicita todas las páginas, fotos, estilos, JavaScript y fuentes referenciadas y falla si falta algún recurso. Comprueba los destinos de contacto, pero no envía mensajes ni confirma su recepción.

## Cloudflare Pages desde GitHub

1. Guarda el proyecto en un repositorio de tu cuenta de GitHub, incluidos `bun.lock`, `public/` y `scripts/`. No subas `node_modules/`, `.output/` ni `dist/`.
2. En Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**. Autoriza GitHub y selecciona tu repositorio.
3. Elige la rama de producción (normalmente `main`) y configura:

| Opción | Valor |
| --- | --- |
| Framework preset | None |
| Root directory | Raíz del repositorio (dejar vacía) |
| Build command | `bun install --frozen-lockfile && bun run test && bun run build` |
| Build output directory | `dist` |
| Variable `NODE_VERSION` | `22.16.0` |
| Variable `BUN_VERSION` | `1.4.4` |

4. Guarda y despliega. Cada actualización de la rama elegida genera un nuevo despliegue. Cloudflare puede crear previews de otras ramas.
5. Añade tu dominio en **Pages → tu proyecto → Custom domains** y sigue las instrucciones DNS. No necesitas publicar en Lovable.

No configures Pages Functions, Workers, bases de datos ni secretos. Cada ruta tiene su propio `index.html`; no necesita una redirección global para simular páginas. Al añadir páginas actualiza `vite.config.ts` y `scripts/site-manifest.mjs`.

## Comprobación después del despliegue

Cuando Cloudflare proporcione una URL real:

```sh
bun run verify:site -- https://TU-PROYECTO.pages.dev
# Repite cuando conectes el dominio:
bun run verify:site -- https://TU-DOMINIO
```

Además, en un navegador de ordenador y móvil:

- Abre directamente `/`, `/servicios`, `/aviso-legal`, `/politica-privacidad` y `/politica-cookies` y recarga cada dirección.
- Comprueba las fotos del inicio, galería y servicios, y las tipografías.
- Alterna «Manos» y «Pies», abre y cierra los detalles y prueba `/servicios#manos` y `/servicios#pies`.
- Comprueba los enlaces a galería, opiniones y contacto, el menú móvil y el teléfono.
- Prueba todos los botones de WhatsApp: abren el número 682 29 71 59 con texto preparado; en ordenador puede pedir iniciar sesión en WhatsApp Web y en móvil abrir la aplicación.
- Prueba el enlace de Maps y el aviso de cookies. Google Maps es externo y no es necesario para mostrar el resto de la web.
- Comprueba una dirección inexistente para confirmar el comportamiento 404 del alojamiento.

**Un despliegue real solo queda verificado tras comprobar su URL. Las pruebas locales no verifican Cloudflare.**

## Contacto: no hay formulario

Esta web **no contiene un formulario ni un servicio receptor de mensajes**. El contacto se realiza mediante teléfono y WhatsApp. No se envía nada desde la web ni se registra una reserva en ella. Abrir WhatsApp no confirma un envío ni una cita.

Si se incorpora un formulario, hay que configurar un receptor bajo tu control y probar la recepción real, los errores y la protección frente a abuso antes de activarlo, además de actualizar la privacidad.

## Organización y recursos

```text
src/routes/          Inicio, servicios y páginas legales
src/components/      SiteLayout compartido y controles reutilizables
src/site.css         Estilos originales
src/styles.css       Estilos globales y fuentes locales
public/              Fotografías, favicon y robots.txt
scripts/             Exportación, vista previa y verificación
src/test/            Pruebas
vite.config.ts       Generación con plugins públicos
dist/                Producción (generada, no versionada)
```

Las fotos originales están en `public/maps_*.jpg`. Inter y Cormorant Upright se incluyen mediante Fontsource y se sirven desde el propio sitio, sin Google Fonts. Conserva las licencias OFL de esos paquetes y revisa los permisos de las fotos originales: guardar una imagen no acredita autorización de uso.

La web no utiliza servicios ni analítica de Lovable. Los únicos servicios externos visibles son WhatsApp y Google Maps. El consentimiento se guarda en el navegador; actualmente «Rechazar» no bloquea la carga del mapa incrustado, por lo que el aviso no constituye un bloqueo previo de Google Maps.

Confirma el catálogo, los horarios y los datos fiscales del titular antes de publicar. Los textos legales actuales no sustituyen una revisión legal.
