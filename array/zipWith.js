module.exports = zip;

function zip (fn) {
  const arrays = [].slice.call(arguments, 1);
  const result = [];
  var i = -1;
  // Find length of shortest array
  var len = Math.min.apply(Math, arrays.map(arr => arr.length));
  while (++i < len)
    result.push(fn.apply(null, arrays.map(array => array[i])));
  return result;
}
