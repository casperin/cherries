module.exports = endsWith;

function endsWith (x, string) {
  if (x.length === 0 && typeof x === 'string') return true;
  return string.substr(-x.length) === x;
}
