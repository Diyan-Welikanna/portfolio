# Favicon Generation Guide

Your portfolio has an SVG favicon already configured. To add high-quality PNG and ICO favicons:

## Quick Method (Recommended)

1. **Visit**: https://favicon.io/favicon-generator/
2. **Settings**:
   - Text: `DT`
   - Background: `Rounded`
   - Font Family: `Arial`
   - Font Size: `60`
   - Background Color: `#3B82F6` (or use gradient)
   - Text Color: `#FFFFFF`
3. **Download** the generated package
4. **Extract** and copy these files to `public/` folder:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

## Alternative: Use Your Own Image

1. Visit https://realfavicongenerator.net/
2. Upload an image or the `public/favicon.svg` file
3. Generate all sizes
4. Download and extract to `public/` folder

## Manual Method

1. Open `public/generate-favicons.html` in your browser
2. Right-click each generated image
3. Save with the filename shown below it
4. Use https://convertio.co/png-ico/ to create favicon.ico from the 32x32 PNG

## Current Status

✅ SVG favicon (works in modern browsers)
✅ Favicon configured in layout.tsx
✅ Web manifest configured
⏳ Waiting for PNG/ICO files (optional but recommended for older browsers)

The site will work perfectly with just the SVG favicon, but adding PNG/ICO improves compatibility with older browsers and platforms.
