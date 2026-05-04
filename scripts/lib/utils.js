/**
 * Shared path/root helpers for hooks/scripts (확장 시 ECC utils.js 패턴 정렬).
 */
const path = require('path');

function repoRoot(fromDir = __dirname) {
  return path.resolve(fromDir, '..', '..');
}

module.exports = { repoRoot, path };
