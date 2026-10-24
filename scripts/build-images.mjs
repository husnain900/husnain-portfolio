import sharp from 'sharp';
const input = 'public/assets/husnain-portrait.png';
for (const width of [420, 720, 1100]) {
  await sharp(input).resize({ width }).webp({ quality: 88, alphaQuality: 95 }).toFile(`public/assets/portrait-${width}.webp`);
}
const portrait = await sharp(input).resize({ height: 630 }).png().toBuffer();
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><text x="65" y="255" fill="#f4f1ec" font-family="Arial,sans-serif" font-weight="900" font-size="90">HUSNAIN</text><text x="68" y="330" fill="#f4f1ec" font-family="Arial,sans-serif" font-size="46">TANVEER</text><text x="70" y="390" fill="#ff3d5a" font-family="Arial,sans-serif" font-size="25" letter-spacing="8">THE SERIES</text><text x="70" y="465" fill="#a7a6ad" font-family="Arial,sans-serif" font-size="19">AI-ASSISTED BUILDS · REACT · SHOPIFY</text></svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } }).composite([{input:portrait,gravity:'east'}, {input:text}]).jpeg({quality:88}).toFile('public/assets/og-image.jpg');
console.log('Husnain portraits and social share image built.');
console.log(await sharp(input).metadata());

