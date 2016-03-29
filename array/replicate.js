module.exports = replicate;

function replicate (n, x) {
  const result = [];
  while (n--) result.push(x);
  return result;
}
