module.exports = sortBy;

function sortBy (fn, array) {
  return array.slice(0).sort((x, y) => fn(x) - fn(y));
}
