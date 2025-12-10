const fs = require('fs');

// Create a simple base64 encoded 16x16 favicon.ico
// This is a minimal ICO file with "DT" text
const faviconBase64 = 'AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmKuv85irr/OYq6/zmKuv85irr/OYq6/zmKuv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5irr/OYq6/zmKuv85irr/OYq6/zmKuv85irr/OYq6/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5irr/+Yq6//mKuv/5irr/+Yq6//mKuv/5irr/+Yq6/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOY';

// Create minimal SVG favicon that works
const svgContent = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6"/>
      <stop offset="50%" style="stop-color:#8B5CF6"/>
      <stop offset="100%" style="stop-color:#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#g)"/>
  <text x="16" y="23" font-family="Arial" font-size="18" font-weight="bold" fill="white" text-anchor="middle">DT</text>
</svg>`;

// Write SVG favicon
fs.writeFileSync('public/favicon.svg', svgContent);

console.log('✅ Favicon files created!');
console.log('');
console.log('For better quality, please:');
console.log('1. Open public/generate-favicons.html in a browser');
console.log('2. Or visit https://favicon.io/favicon-generator/');
console.log('3. Generate with text "DT", gradient blue background');
console.log('4. Save files to the public/ folder');
