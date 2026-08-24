// One-off script: renders the brand mark (orange square + drill icon, matching
// the header logo) into favicon.ico / favicon.svg / apple touch icon.
// Run with: node scripts/make-favicon.mjs
import sharp from "sharp";
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, "favicon-source.svg");
const publicDir = join(__dirname, "..", "public");

const svg = readFileSync(svgPath);

function buildIco(pngBuffers) {
  // Minimal ICO container (ICONDIR + ICONDIRENTRY[] + raw PNG payloads).
  // Modern Windows/browsers accept PNG-compressed frames inside .ico.
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const entries = [];
  pngBuffers.forEach(({ size, buffer }, i) => {
    const entryOffset = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0); // width
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // height
    header.writeUInt8(0, entryOffset + 2); // color palette
    header.writeUInt8(0, entryOffset + 3); // reserved
    header.writeUInt16LE(1, entryOffset + 4); // color planes
    header.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    header.writeUInt32LE(buffer.length, entryOffset + 8); // size in bytes
    header.writeUInt32LE(offset, entryOffset + 12); // offset
    offset += buffer.length;
    entries.push(buffer);
  });

  return Buffer.concat([header, ...entries]);
}

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map(async (size) => ({
    size,
    buffer: await sharp(svg, { density: 384 }).resize(size, size).png().toBuffer(),
  })),
);

writeFileSync(join(publicDir, "favicon.ico"), buildIco(pngBuffers));

// SVG favicon (used by modern browsers that support rel="icon" type="image/svg+xml").
copyFileSync(svgPath, join(publicDir, "favicon.svg"));

// Apple touch icon (180x180, no rounded corners needed — iOS masks it).
await sharp(svg, { density: 1024 })
  .resize(180, 180)
  .png()
  .toFile(join(publicDir, "apple-touch-icon.png"));

console.log("Favicon files written to public/: favicon.ico, favicon.svg, apple-touch-icon.png");
