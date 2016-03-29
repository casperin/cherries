module.exports = span;

/**
 * Equal to [takeWhile(fn, arr), dropWhile(fn, arr)]
 */
function span (fn, array) {
  const a = [];
  const b = [];
  var taking = true;
  for (var item of array) {
    taking = taking && fn(item);
    if (taking) a.push(item);
    else        b.push(item);
  }
  return [a, b];
}
