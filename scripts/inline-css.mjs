import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

async function inlineCSS() {
  console.log('Running CSS inlining...');
  const htmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found in dist/!');
    return;
  }

  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Find all <link> tags
  const linkRegex = /<link[^>]+>/gi;
  const matches = htmlContent.match(linkRegex) || [];

  for (const linkTag of matches) {
    if (!linkTag.includes('rel="stylesheet"') && !linkTag.includes("rel='stylesheet'")) {
      continue;
    }

    const hrefMatch = linkTag.match(/href="([^"]+)"|href='([^']+)'/i);
    if (!hrefMatch) {
      continue;
    }

    const cssHref = hrefMatch[1] || hrefMatch[2];

    if (cssHref.startsWith('http://') || cssHref.startsWith('https://') || cssHref.startsWith('//')) {
      continue;
    }

    const relativeCssPath = cssHref.startsWith('/') ? cssHref.slice(1) : cssHref;
    const cssPath = path.join(distDir, relativeCssPath);

    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const styleTag = `<style>${cssContent}</style>`;
      htmlContent = htmlContent.replace(linkTag, styleTag);
      fs.writeFileSync(htmlPath, htmlContent, 'utf8');
      console.log(`Successfully inlined ${cssHref} into index.html`);
      // Keep the CSS file on disk to avoid build runner upload/manifest crashes
    }
  }
}

inlineCSS();
