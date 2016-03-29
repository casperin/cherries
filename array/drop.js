module.exports = drop;

function drop (n, array) {
  const result = [];
  var i = n - 1;
  while (++i < array.length)
    result.push(array[i]);
  return result;
}
