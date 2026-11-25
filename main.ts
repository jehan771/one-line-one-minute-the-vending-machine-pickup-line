import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by the vending machine itself.
// Machine world: exact change + coil. Punch lands on the last words.
const LINE =
  "I usually only fall for exact change, but for you I'd jam my own coil.";

// Gate check (mirrors the sealed scorer): 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
