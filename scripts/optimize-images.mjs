// One-off script: generates WebP versions of the heaviest local raster images
// so the app can serve <picture> with a modern format + original fallback.
// Run with: node scripts/optimize-images.mjs
import sharp from "sharp";
import { existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "..", "src", "assets");

const jobs = [
  { file: "rig-3d-photo.png", maxWidth: 1400, quality: 82 },
  { file: "hero-rig.jpg", maxWidth: 1920, quality: 76 },
  { file: "step-1-marking.jpg", maxWidth: 1024, quality: 78 },
  { file: "step-2-drilling.jpg", maxWidth: 1024, quality: 78 },
  { file: "step-3-casing.jpg", maxWidth: 1024, quality: 78 },
  { file: "step-4-water.jpg", maxWidth: 1024, quality: 78 },
];

for (const { file, maxWidth, quality } of jobs) {
  const inputPath = join(assetsDir, file);
  if (!existsSync(inputPath)) {
    console.warn(`skip (not found): ${file}`);
    continue;
  }
  const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = statSync(inputPath).size;

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const after = statSync(outputPath).size;
  console.log(
    `${file} -> ${outputPath.split(/[\\/]/).pop()}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`,
  );
}
