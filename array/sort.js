module.exports = sort;

function sort (array) {
  return array.slice(0).sort((x, y) => x - y);
}
