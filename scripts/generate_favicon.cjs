const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_PATH = path.join(__dirname, '../public/logo-sandrine.png');
const OUTPUT_PATH = path.join(__dirname, '../app/icon.png');

async function generateFavicon() {
    try {
        console.log(`Reading from: ${INPUT_PATH}`);

        // Create a circular SVG mask
        const width = 512;
        const r = width / 2;
        const circleShape = Buffer.from(`<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`);

        await sharp(INPUT_PATH)
            .resize(width, width, { fit: 'cover' })
            .composite([{
                input: circleShape,
                blend: 'dest-in'
            }])
            .png()
            .toFile(OUTPUT_PATH);

        console.log(`✅ Rounded favicon generated at: ${OUTPUT_PATH}`);
    } catch (error) {
        console.error('❌ Error generating favicon:', error);
        process.exit(1);
    }
}

generateFavicon();
