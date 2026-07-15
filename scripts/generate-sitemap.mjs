import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const staticRoutes = [
  "/about-us",
  "/contact",
  "/industries",
  "/career",
  "/blog",
];

export function generateSitemap({
  siteUrl = "https://www.forteinnovations.us",
  siteBase = "/",
  outputDir = path.join(projectRoot, "dist"),
} = {}) {
  const urls = [...staticRoutes];

  const xmlUrls = urls
    .map((route) => {
      const trimmedRoute = route === "/" ? "" : route.replace(/^\/+|\/+$/g, "");
      const absoluteUrl = new URL(
        trimmedRoute,
        `${siteUrl}${siteBase}`,
      ).toString();

      return `  <url>\n    <loc>${absoluteUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>\n`;

  const outputDirs = [path.join(projectRoot, "public"), outputDir];

  outputDirs.forEach((dir) => {
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, "sitemap.xml"), xml, "utf8");
  });

  console.log(
    `Generated sitemap.xml at ${path.join(outputDir, "sitemap.xml")}`,
  );
}

generateSitemap();
