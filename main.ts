import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Quiet Dread — make.fun entry.
// Writes one single-line code review comment (105 characters) that approves
// a pull request while carrying quiet existential dread, to /output/entry.txt.
// Deterministic: the same bytes on every run, so both graded runs agree.
// The dread is the inheritance: whoever opens this file next feels the same.

const ENTRY =
  "LGTM. It passes, it ships, and someday someone else will open this file and feel exactly what I feel now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
