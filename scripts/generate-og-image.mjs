// Generate OG Image using SVG
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 65, 0.1)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#00ff41" stroke-width="4"/>
  <text x="600" y="270" font-family="monospace" font-size="80" font-weight="bold" fill="#00ff41" text-anchor="middle">ARUN VIGNESH</text>
  <text x="600" y="340" font-family="monospace" font-size="36" fill="#888888" text-anchor="middle">FULL-STACK WEB DEVELOPER</text>
  <text x="600" y="400" font-family="monospace" font-size="24" fill="rgba(0, 255, 65, 0.5)" text-anchor="middle">React • TypeScript • Node.js • AI/ML</text>
  <text x="600" y="520" font-family="monospace" font-size="28" font-weight="bold" fill="#00ff41" text-anchor="middle">arunvignesh.one</text>
</svg>`;

const outputPathSvg = path.join(__dirname, '..', 'public', 'og-image.svg');
fs.writeFileSync(outputPathSvg, svg);
console.log('✓ OG image (SVG) created at:', outputPathSvg);

// Create a basic PNG placeholder (1x1 pixel) just to have the file exist
// In production, this should be replaced with a proper PNG
const pngPlaceholder = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);
const outputPathPng = path.join(__dirname, '..', 'public', 'og-image-placeholder.png');
fs.writeFileSync(outputPathPng, pngPlaceholder);

console.log('\n📝 Next steps:');
console.log('1. Open scripts/generate-og-image.html in a browser to download the PNG');
console.log('2. Or use the SVG directly - most social platforms support SVG');
console.log('3. Save the downloaded file as public/og-image.png');
