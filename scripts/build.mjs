import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

const requiredFiles = ["index.html", "styles.css", "script.js", "package.json"];
const requiredSections = [
  'id="opening-intro"',
  'id="opening-slides"',
  'id="briefing-main"',
  'id="briefing-list"',
  'id="briefing-catalog"',
  'id="briefing-viewer"',
  'id="viewer-body"',
  'id="contact"',
  "const openingSlides",
  "const briefingItems",
  "let selectedOpeningSlideIndex",
  "let selectedItemIndex",
  "let isViewerOpen",
  "function goOpeningNext",
  "function scrollToBriefingMain",
  "function openViewer",
  "function goNext",
  "function goPrev",
  "function closeViewer",
  "/opening/01-ai-beyond-search.png",
  "/opening/08-platform-final-no-dog.png",
  "public/assets/webtoon/opening-briefing/",
  "public/assets/webtoon/power-bottleneck/",
  "public/assets/webtoon/grid-bottleneck/",
  "public/assets/webtoon/evidence-solution/",
  "public/assets/webtoon/yeoju-case/",
  "public/assets/webtoon/dogsim-esg/",
  "public/assets/slides/business-structure/",
  "public/assets/slides/closing-difference/",
  "public/assets/slides/app-demo/",
];

for (const file of requiredFiles) {
  if (!existsSync(path.join(root, file))) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const html = await readFile(path.join(root, "index.html"), "utf8");
const script = await readFile(path.join(root, "script.js"), "utf8");
for (const marker of requiredSections) {
  if (!html.includes(marker) && !script.includes(marker)) {
    throw new Error(`Missing required page marker: ${marker}`);
  }
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  await cp(path.join(root, file), path.join(dist, file));
}

if (existsSync(path.join(root, "public"))) {
  await cp(path.join(root, "public"), path.join(dist, "public"), {
    recursive: true,
  });
}

if (existsSync(path.join(root, "public", "opening"))) {
  await cp(path.join(root, "public", "opening"), path.join(dist, "opening"), {
    recursive: true,
  });
}

console.log("Build complete: dist/");
