module.exports = takeWhile;

function takeWhile (fn, array) {
  const result = [];
  for (var item of array) {
    if (!fn(item)) break;
    result.push(item);
  }
  return result;
}
