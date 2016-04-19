/**
 * TODO: Tests
 */
exports.module = uniqueBy;

function uniqueBy (fn, array) {
  const seen = new Set();
  const result = [];
  for (const item of array) {
    const computed = fn(item);
    if (seen.has(computed)) continue;
    seen.add(computed);
    result.push(item);
  }
  return result;
}
