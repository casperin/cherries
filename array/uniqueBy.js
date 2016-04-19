module.exports = uniqueBy;

function uniqueBy (fn, array) {
  const seen = new Set();
  const result = [];
  array.forEach(item => {
    const computed = fn(item);
    if (seen.has(computed)) return;
    seen.add(computed);
    result.push(item);
  });
  return result;
}
