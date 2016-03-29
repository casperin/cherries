module.exports = dropWhile;

function dropWhile (fn, array) {
  const result = [];
  var dropping = true;
  for (var item of array) {
    if (dropping && fn(item)) continue;
    dropping = false;
    result.push(item);
  }
  return result;
}
