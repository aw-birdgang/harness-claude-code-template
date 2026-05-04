#!/usr/bin/env node
/**
 * 축소된 harness CLI (전략 §2.6). 실제 install/닥터는 이후 확장.
 * 사용: node scripts/ecc.js [plan|help]
 */
const { spawnSync } = require('child_process');
const path = require('path');

const COMMANDS = {
  plan: { script: 'install-plan-stub.js', description: 'Show resolved install plan from manifests' },
  help: { description: 'Show this help' },
};

const cmd = process.argv[2] || 'help';

if (cmd === 'help' || cmd === '-h' || cmd === '--help') {
  console.log('harness (ecc.js) — minimal CLI\n');
  for (const [name, def] of Object.entries(COMMANDS)) {
    console.log(`  ${name.padEnd(8)} ${def.description || ''}`);
  }
  process.exit(0);
}

const def = COMMANDS[cmd];
if (!def || !def.script) {
  console.error(`Unknown command: ${cmd}. Try: plan, help`);
  process.exit(1);
}

const r = spawnSync(process.execPath, [path.join(__dirname, def.script), ...process.argv.slice(3)], {
  stdio: 'inherit',
});
process.exit(r.status ?? 1);
