// Generate OG Image using SVG
const fs = require('fs');
const path = require('path');

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 255, 65, 0.1)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>

  <!-- Grid Pattern -->
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Border -->
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#00ff41" stroke-width="4"/>

  <!-- Main Title -->
  <text x="600" y="270" font-family="monospace" font-size="80" font-weight="bold" fill="#00ff41" text-anchor="middle">ARUN VIGNESH</text>

  <!-- Subtitle -->
  <text x="600" y="340" font-family="monospace" font-size="36" fill="#888888" text-anchor="middle">FULL-STACK WEB DEVELOPER</text>

  <!-- Tech Stack -->
  <text x="600" y="400" font-family="monospace" font-size="24" fill="rgba(0, 255, 65, 0.5)" text-anchor="middle">React • TypeScript • Node.js • AI/ML</text>

  <!-- Domain -->
  <text x="600" y="520" font-family="monospace" font-size="28" font-weight="bold" fill="#00ff41" text-anchor="middle">arunvignesh.one</text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.svg');
fs.writeFileSync(outputPath, svg.trim());
console.log('✓ OG image (SVG) created at:', outputPath);
console.log('\nNote: SVG works well for OG images. To convert to PNG, you can:');
console.log('1. Open the HTML file: scripts/generate-og-image.html');
console.log('2. Or use an online converter: https://cloudconvert.com/svg-to-png');
console.log('3. Or install sharp: npm install sharp, then use a conversion script');
