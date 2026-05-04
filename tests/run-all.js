#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

const scripts = [path.join(__dirname, '..', 'scripts', 'ci', 'validate-skeleton.js')];

for (const s of scripts) {
  const r = spawnSync(process.execPath, [s], { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
console.log('run-all: all checks passed');
