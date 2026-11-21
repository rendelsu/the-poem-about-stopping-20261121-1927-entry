import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Deterministic: the poem lives in poem.txt and is copied byte for byte
// to <output>/entry.txt, so every run produces identical output.
const here = dirname(fileURLToPath(import.meta.url));
const poem = readFileSync(join(here, "poem.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
