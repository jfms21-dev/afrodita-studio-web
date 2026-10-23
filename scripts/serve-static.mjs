import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const port = Number(process.env.PORT || 4173);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff", ".txt": "text/plain" };
await stat(path.join(root, "index.html"));
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    const contents = await readFile(file);
    response.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
    response.end(contents);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Página no encontrada");
  }
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://localhost:${port}`));