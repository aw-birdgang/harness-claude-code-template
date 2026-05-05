/**
 * Shared path/root helpers for hooks/scripts (확장 시 참조 하네스 utils 패턴에 맞출 수 있음).
 */
const path = require('path');

function repoRoot(fromDir = __dirname) {
  return path.resolve(fromDir, '..', '..');
}

module.exports = { repoRoot, path };
