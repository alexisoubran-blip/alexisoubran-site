import { slides } from "../src/slides.js";

const expected = 85;
const ids = slides.map((slide) => slide.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

if (slides.length !== expected) {
  console.error(`Expected ${expected} slides, found ${slides.length}.`);
  process.exit(1);
}

if (duplicateIds.length) {
  console.error(`Duplicate slide ids: ${duplicateIds.join(", ")}`);
  process.exit(1);
}

for (const [index, slide] of slides.entries()) {
  if (!slide.title && slide.kind !== "break") {
    console.error(`Slide ${index + 1} (${slide.id}) has no title.`);
    process.exit(1);
  }
}

console.log(`Deck validated: ${slides.length} unique slides.`);
