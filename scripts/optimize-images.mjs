import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const images = [
  { relPath: 'src/assets/uploaded-commitment-team.png', maxWidth: 600 },
  { relPath: 'src/assets/feature-graphic.png', maxWidth: 600 },
  { relPath: 'src/assets/about_ai_boardroom.png', maxWidth: 600 },
  { relPath: 'src/assets/case-studies/cloud_optimization.png', maxWidth: 600 },
  { relPath: 'src/assets/case-studies/network_security.png', maxWidth: 600 },
  { relPath: 'src/assets/case-studies/crm_success.png', maxWidth: 600 },
  { relPath: 'src/assets/case-studies/data_migration.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 5.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 8.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 3.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 4.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 6.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 7.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 10.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 11.png', maxWidth: 600 },
  { relPath: 'src/assets/industry/bg/image 12.png', maxWidth: 600 },
  { relPath: 'src/assets/logo_forte_new_transparent.png', maxWidth: 300 },
  { relPath: 'src/assets/logo.png', maxWidth: 150 },
  { relPath: 'src/assets/blog/boardroom_meeting.png', maxWidth: 600 },
  { relPath: 'src/assets/blog/cloud_migration.png', maxWidth: 600 },
  { relPath: 'src/assets/blog/cybersecurity_trends.png', maxWidth: 600 },
  { relPath: 'src/assets/meeting_room_hologram.jpg', maxWidth: 600 },
  { relPath: 'src/assets/blog/it_strategies.png', maxWidth: 600 },
  { relPath: 'src/assets/uploaded-commitment-female.png', maxWidth: 80 },
  { relPath: 'src/assets/uploaded-commitment-cap.png', maxWidth: 80 },
  { relPath: 'src/assets/client-reviews/client-1.png', maxWidth: 120 },
  { relPath: 'src/assets/client-reviews/client-2.png', maxWidth: 120 },
  { relPath: 'src/assets/client-reviews/client-3.png', maxWidth: 120 },
  { relPath: 'src/assets/client-reviews/client-4.png', maxWidth: 120 },
  { relPath: 'src/assets/client-reviews/client-5.png', maxWidth: 120 },
  { relPath: 'src/assets/uploaded-contact-building-hero.jpg', maxWidth: 600 },
  { relPath: 'src/assets/uploaded-contact-building.jpg', maxWidth: 600 },
];

async function optimize() {
  console.log('Starting image optimization...');
  for (const img of images) {
    const fullPath = path.join(projectRoot, img.relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${img.relPath}`);
      continue;
    }

    const dir = path.dirname(fullPath);
    const ext = path.extname(fullPath);
    const baseName = path.basename(fullPath, ext);
    const outName = `${baseName}-mobile.webp`;
    const outPath = path.join(dir, outName);

    try {
      const metadata = await sharp(fullPath).metadata();
      const width = metadata.width;

      let pipeline = sharp(fullPath);
      // Resize only if it's wider than maxWidth
      if (width && width > img.maxWidth) {
        pipeline = pipeline.resize({ width: img.maxWidth });
      }

      await pipeline
        .webp({ quality: 80 })
        .toFile(outPath);

      const originalSize = fs.statSync(fullPath).size;
      const optimizedSize = fs.statSync(outPath).size;
      const savings = ((originalSize - optimizedSize) / 1024).toFixed(2);
      
      console.log(`Optimized: ${img.relPath} -> ${outName}`);
      console.log(`  Size: ${(originalSize / 1024).toFixed(2)} KB -> ${(optimizedSize / 1024).toFixed(2)} KB (Saved ${savings} KB)`);
    } catch (err) {
      console.error(`Failed to optimize ${img.relPath}:`, err.message);
    }
  }
  console.log('Image optimization finished.');
}

optimize();
