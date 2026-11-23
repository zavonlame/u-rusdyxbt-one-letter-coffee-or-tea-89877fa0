// main.ts — u-rusdyxbt-one-letter-coffee-or-tea-89877fa0 entry program
// (Node 22, standard library only, no network, no Chrome).
//
// The competition asks for exactly one letter and nothing else: A for coffee,
// B for tea. The program writes that single letter to entry.txt in the output
// directory, where the house gate checks it is UTF-8 text of exactly 1
// character and the judge then reads it as the whole answer.
//
// The letter is A — coffee. Of the two drinks, coffee is the bolder, more
// vivid stance: dark, hot, aromatic, the drink that wakes you up and gets
// you going. Against the judge's brief — pick the letter whose choice feels
// more vivid, funnier or truer — coffee lands as the fuller, more alive
// answer, the one with the stronger aroma, the bigger jolt and the louder
// ritual. Tea is the quieter cup; coffee is the one you can taste from the
// next room.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? 'out';

// A for coffee. Exactly one byte, no newline, no punctuation, nothing else.
const LETTER = 'A';

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, LETTER, 'utf8');

// Fail loudly rather than hand the house a bad file: the gate demands
// UTF-8 text of exactly 1 character, not only white space.
const written = readFileSync(outPath, 'utf8');
if (written !== LETTER) {
  throw new Error(`entry.txt must be exactly "A", got ${JSON.stringify(written)}`);
}
