import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const images = [
  'src/assets/uploaded-commitment-team.png',
  'src/assets/blog/boardroom_meeting.png',
  'src/assets/meeting_room_hologram.jpg',
  'src/assets/blog/cloud_migration.png',
  'src/assets/logo_forte_new_transparent.png',
  'src/assets/blog/it_strategies.png',
  'src/assets/blog/cybersecurity_trends.png',
  'src/assets/feature-graphic.png',
  'src/assets/logo.png',
  'src/assets/about_ai_boardroom.png',
  'src/assets/case-studies/cloud_optimization.png',
  'src/assets/case-studies/network_security.png',
  'src/assets/case-studies/crm_success.png',
  'src/assets/case-studies/data_migration.png',
  'src/assets/logo_forte_dark_footer_new.jpg',
];

async function printSizes() {
  for (const img of images) {
    const fullPath = path.join(projectRoot, img);
    if (fs.existsSync(fullPath)) {
      const meta = await sharp(fullPath).metadata();
      console.log(`${img}: ${meta.width}x${meta.height}`);
    } else {
      console.log(`${img}: NOT FOUND`);
    }
  }
}

printSizes();
