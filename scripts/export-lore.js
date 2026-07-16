#!/usr/bin/env node
/*
 * Everden Player Guide — flavor text exporter.
 *
 * Reads every data/*.js file that index.html actually loads (in the order it loads them),
 * runs them the same way the browser does (plain scripts sharing one global scope), and
 * writes out a clean, markdown-lite .txt file containing just the narrative/flavor text —
 * no mechanical trait text, no colors, no icons, no CSS-ish bookkeeping fields.
 *
 * Because it reads the <script src="data/...js"> list straight out of index.html instead of
 * hardcoding filenames, adding/renaming/removing a data file (and updating index.html to match,
 * which you'd do anyway) means this script picks it up automatically on the next run.
 *
 * Usage:
 *   node scripts/export-lore.js
 *   node scripts/export-lore.js --out my-export.txt
 *   node scripts/export-lore.js --include-disabled
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

// ---------- CLI args ----------
const args = process.argv.slice(2);
const includeDisabled = args.includes('--include-disabled');
const outFlagIdx = args.indexOf('--out');
const outPath = outFlagIdx !== -1 && args[outFlagIdx + 1]
  ? path.resolve(process.cwd(), args[outFlagIdx + 1])
  : path.join(ROOT, 'everden-flavor-text.txt');

// ---------- load data files the same way the browser does ----------
function getDataScriptPaths() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const re = /<script src="(data\/[^"]+\.js)"><\/script>/g;
  const files = [];
  let m;
  while ((m = re.exec(html))) files.push(m[1]);
  if (!files.length) throw new Error('No data/*.js <script> tags found in index.html — is the file structure unchanged?');
  return files;
}

function loadContent() {
  const context = vm.createContext({});
  for (const rel of getDataScriptPaths()) {
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) {
      console.warn(`warning: ${rel} is referenced in index.html but doesn't exist on disk — skipping`);
      continue;
    }
    vm.runInContext(fs.readFileSync(full, 'utf8'), context, { filename: rel });
  }
  const CONTENT = vm.runInContext('typeof CONTENT !== "undefined" ? CONTENT : null', context);
  const races = vm.runInContext('typeof races !== "undefined" ? races : null', context);
  if (!CONTENT) throw new Error('data files loaded, but no top-level CONTENT object was produced');
  return { CONTENT, races };
}

// ---------- helpers ----------
function isEnabled(x) {
  return includeDisabled || x.enabled !== false;
}

function h1(s) { return `\n\n${'='.repeat(70)}\n${s.toUpperCase()}\n${'='.repeat(70)}`; }
function h2(s) { return `\n## ${s}`; }
function h3(s) { return `\n### ${s}`; }
function h4(s) { return `\n#### ${s}`; }

const out = [];
function push(...lines) { out.push(...lines); }

// ---------- known-section formatters ----------

function formatHero(hero) {
  if (!hero) return;
  push(h1(hero.title || 'Everden'));
  if (hero.sub) push(stripTags(hero.sub));
}

function formatNations(nations, nationNotes) {
  if (!nations || !nations.length) return;
  push(h1('Nations'));
  for (const n of nations.filter(isEnabled)) {
    const badge = n.badge ? ` (${n.badge})` : '';
    push(h2(`${n.name} — "${n.subtitle}"${badge}`));
    if (n.values && n.values.length) push(`Values: ${n.values.join(', ')}`);
    if (n.leaderText) push(`${(n.leaderLabel || 'Leader:').trim()} ${n.leaderText}`);
    push('');
    (n.desc || []).forEach(p => push(stripTags(p), ''));
    const settlements = (n.settlements || []).filter(isEnabled);
    if (settlements.length) {
      push(h3(`Settlements of ${n.name}`));
      for (const s of settlements) {
        const tags = (s.tags || []).map(t => t.text).join(', ');
        push(h4(`${s.name}${tags ? ` (${tags})` : ''}`));
        push(stripTags(s.body));
      }
    }
  }
  if (nationNotes && nationNotes.length) {
    push(h2('Notes on Everden'));
    for (const note of nationNotes.filter(isEnabled)) {
      push(h3(note.label));
      push(stripTags(note.text));
    }
  }
}

function formatRaces(races) {
  if (!races || !races.length) return;
  push(h1('Playable Races'));
  for (const r of races.filter(isEnabled)) {
    push(h2(`${r.name} (${r.animal})`));
    if (r.lore) push(stripTags(r.lore));
  }
}

function formatOtherRaces(otherRaces) {
  if (!otherRaces || !otherRaces.list || !otherRaces.list.length) return;
  push(h1(otherRaces.label || 'Other Peoples of Everden'));
  if (otherRaces.intro) push(stripTags(otherRaces.intro), '');
  for (const r of otherRaces.list.filter(isEnabled)) {
    push(h2(`${r.name} (${r.subtitle})`));
    (r.paragraphs || []).forEach(p => push(stripTags(p)));
    if (r.tags && r.tags.length) push(`Associations: ${r.tags.join(', ')}`);
  }
}

function formatCharacters(characters) {
  if (!characters || !characters.list || !characters.list.length) return;
  push(h1(characters.label || 'Characters'));
  if (characters.intro) push(stripTags(characters.intro), '');
  for (const c of characters.list.filter(isEnabled)) {
    push(h2(`${c.name} — ${c.title} (${c.location})`));
    (c.paragraphs || []).forEach(p => push(stripTags(p)));
  }
}

function formatPantheon(pantheon) {
  if (!pantheon) return;
  push(h1('Pantheon'));
  if (pantheon.intro) push(stripTags(pantheon.intro), '');
  for (const group of pantheon.groups || []) {
    const gods = (group.gods || []).filter(isEnabled);
    if (!gods.length) continue;
    push(h2(group.title));
    for (const god of gods) {
      const origin = god.original ? ` (inspired by: ${god.original})` : '';
      push(h3(`${god.name} — ${god.epithet}${origin}`));
      (god.paragraphs || []).forEach(p => push(stripTags(p)));
      if (god.worshipers && god.worshipers.length) push(`Worshipers: ${god.worshipers.join(', ')}`);
    }
  }
  if (pantheon.otherPowersText) {
    push(h2('Other Powers'));
    push(stripTags(pantheon.otherPowersText));
  }
  if (pantheon.patrons && pantheon.patrons.list && pantheon.patrons.list.length) {
    push(h1(pantheon.patrons.label || 'Warlock Patrons'));
    if (pantheon.patrons.intro) push(stripTags(pantheon.patrons.intro), '');
    for (const p of pantheon.patrons.list.filter(isEnabled)) {
      const origin = p.original ? ` (inspired by: ${p.original})` : '';
      push(h2(`${p.name} — ${p.epithet} [${p.type}]${origin}`));
      (p.paragraphs || []).forEach(par => push(stripTags(par)));
      if (p.seekers && p.seekers.length) push(`Sought by: ${p.seekers.join(', ')}`);
    }
  }
}

function formatLanguages(languages) {
  if (!languages || !languages.list || !languages.list.length) return;
  push(h1('Languages'));
  if (languages.intro) push(stripTags(languages.intro), '');
  for (const l of languages.list.filter(isEnabled)) {
    push(h2(`${l.name} (${l.script})`));
    push(stripTags(l.desc));
    if (l.restrict) push(`Restriction: ${stripTags(l.restrict)}`);
  }
}

function formatLore(lore) {
  if (!lore) return;
  push(h1(lore.label || 'Lore & Mysteries'));
  if (lore.intro) push(stripTags(lore.intro), '');
  const sub = (block) => {
    if (!block || !block.list || !block.list.length) return;
    push(h2(block.label));
    if (block.intro) push(stripTags(block.intro), '');
    for (const entry of block.list.filter(isEnabled)) {
      push(h3(`${entry.title} [${entry.status}]`));
      if (entry.teaser) push(`_${stripTags(entry.teaser)}_`);
      (entry.paragraphs || []).forEach(p => push(stripTags(p)));
    }
  };
  sub(lore.knownLore);
  sub(lore.mysteries);
}

// ---------- generic fallback for any future/unrecognized CONTENT.* section ----------
// Walks an unknown object tree and prints any string that reads like prose (long, has spaces),
// skipping obvious non-flavor keys (colors, icons, flags, etc).
const SKIP_KEYS = new Set(['icon', 'iconBg', 'style', 'extraClass', 'enabled', 'speed', 'size', 'traits', 'feat', 'id']);
function collectProse(node, lines, depth) {
  if (node == null) return;
  if (typeof node === 'string') {
    if (node.length > 30 && /\s/.test(node)) lines.push(stripTags(node));
    return;
  }
  if (Array.isArray(node)) {
    node.forEach(item => collectProse(item, lines, depth));
    return;
  }
  if (typeof node === 'object') {
    if (!includeDisabled && node.enabled === false) return;
    for (const [key, value] of Object.entries(node)) {
      if (SKIP_KEYS.has(key)) continue;
      collectProse(value, lines, depth + 1);
    }
  }
}

function stripTags(s) {
  return typeof s === 'string' ? s.replace(/<[^>]+>/g, '') : s;
}

const KNOWN_TOP_LEVEL_KEYS = new Set([
  'hero', 'nationsGridLabel', 'languagesLabel', 'tabs',
  'nations', 'nationNotes', 'pantheon', 'languages', 'characters', 'otherRaces', 'lore'
]);

function formatUnknownSections(CONTENT) {
  for (const [key, value] of Object.entries(CONTENT)) {
    if (KNOWN_TOP_LEVEL_KEYS.has(key)) continue;
    const lines = [];
    collectProse(value, lines, 0);
    if (!lines.length) continue;
    push(h1(`${key} (auto-detected new section — export script may need updating)`));
    lines.forEach(l => push(l));
  }
}

// ---------- run ----------
function main() {
  const { CONTENT, races } = loadContent();

  push(`EVERDEN — WORLDBUILDING FLAVOR TEXT EXPORT`);
  push(`Generated ${new Date().toISOString().slice(0, 10)} by scripts/export-lore.js`);
  push(`This file contains narrative/flavor text only — no game mechanics or UI data.`);

  formatHero(CONTENT.hero);
  formatNations(CONTENT.nations, CONTENT.nationNotes);
  formatRaces(races);
  formatOtherRaces(CONTENT.otherRaces);
  formatCharacters(CONTENT.characters);
  formatPantheon(CONTENT.pantheon);
  formatLanguages(CONTENT.languages);
  formatLore(CONTENT.lore);
  formatUnknownSections(CONTENT);

  const text = out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  fs.writeFileSync(outPath, text, 'utf8');
  console.log(`Wrote ${text.split('\n').length} lines to ${path.relative(process.cwd(), outPath)}`);
}

main();
