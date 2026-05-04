#!/usr/bin/env node
/**
 * Phase A 검증: 필수 디렉터리·manifest JSON 파싱 (전략 §2.7).
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const requiredDirs = [
  'agents',
  'skills',
  'commands',
  'rules/common',
  'hooks',
  'scripts/hooks',
  'manifests',
  'schemas',
  'tests',
  '.claude-plugin',
];

let errors = 0;
for (const rel of requiredDirs) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) {
    console.error(`Missing directory: ${rel}`);
    errors++;
  }
}

const manifestFiles = [
  'manifests/install-profiles.json',
  'manifests/install-modules.json',
  'manifests/install-components.json',
];
for (const rel of manifestFiles) {
  const p = path.join(root, rel);
  try {
    JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.error(`Invalid or missing JSON: ${rel}`, e.message);
    errors++;
  }
}

for (const f of ['package.json', '.claude-plugin/plugin.json', 'hooks/hooks.json']) {
  const p = path.join(root, f);
  try {
    JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.error(`Invalid or missing JSON: ${f}`, e.message);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\nvalidate-skeleton: ${errors} error(s)`);
  process.exit(1);
}
console.log('validate-skeleton: OK');
