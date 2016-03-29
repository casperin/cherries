module.exports = take;

function take (n, array) {
  const result = [];
  const len = array.length;
  var i = -1;
  while (++i < len) {
    if (i >= n) return result;
    result.push(array[i]);
  }
  return result;
}
