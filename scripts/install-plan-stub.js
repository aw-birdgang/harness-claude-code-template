#!/usr/bin/env node
/**
 * Read-only: resolves manifests/install-profiles.json + install-modules.json
 * into a JSON plan (no file copy). 참조용 full install-plan의 축소판.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const profPath = path.join(root, 'manifests', 'install-profiles.json');
const modPath = path.join(root, 'manifests', 'install-modules.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const profileName = process.argv[2] || 'minimal';
const profiles = readJson(profPath);
const modulesFile = readJson(modPath);

const profile = profiles.profiles && profiles.profiles[profileName];
if (!profile) {
  console.error(`Unknown profile: ${profileName}. See manifests/install-profiles.json`);
  process.exit(1);
}

const moduleById = Object.fromEntries(modulesFile.modules.map((m) => [m.id, m]));

const plan = {
  profile: profileName,
  description: profile.description,
  modules: [],
};

for (const modId of profile.modules || []) {
  const m = moduleById[modId];
  if (!m) {
    plan.modules.push({ id: modId, error: 'module not found in install-modules.json' });
    continue;
  }
  plan.modules.push({
    id: m.id,
    kind: m.kind,
    paths: m.paths,
    targets: m.targets,
  });
}

console.log(JSON.stringify(plan, null, 2));
