// Simple script to generate OG image from HTML preview
// Run: node generate-og-image.js

const fs = require('fs');
const path = require('path');

console.log('📸 Generating OG image...');

// For now, you can:
// 1. Open public/og-preview.html in your browser
// 2. Take a screenshot at 1200x630 resolution
// 3. Save as public/og-image.png

// Or install playwright: npm install -D playwright
// Then run this automated version:

async function generateOGImage() {
  try {
    const { chromium } = require('playwright');

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.setViewportSize({ width: 1200, height: 630 });
    await page.goto(`file://${path.resolve(__dirname, 'public/og-preview.html')}`);

    await page.screenshot({
      path: path.resolve(__dirname, 'public/og-image.png'),
      type: 'png',
      fullPage: true
    });

    await browser.close();
    console.log('✅ OG image generated successfully at public/og-image.png');
  } catch (error) {
    console.log('⚠️  Playwright not installed. Install with: npm install -D playwright');
    console.log('Or manually:');
    console.log('1. Open public/og-preview.html in your browser');
    console.log('2. Set window to 1200x630');
    console.log('3. Take screenshot and save as public/og-image.png');
  }
}

generateOGImage();
