module.exports = remove;

function remove (x, array) {
  return array.filter(item => item !== x);
}
