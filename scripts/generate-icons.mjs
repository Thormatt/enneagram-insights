import sharp from 'sharp';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

const svgBuffer = readFileSync(join(publicDir, 'enneagram-icon.svg'));

// Generate PWA icons
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile(join(publicDir, 'pwa-192x192.png'));

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(join(publicDir, 'pwa-512x512.png'));

await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(publicDir, 'apple-touch-icon.png'));

console.log('Icons generated successfully!');
