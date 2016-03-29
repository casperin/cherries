module.exports = zip;

/**
 * zip([1, 2], [3, 4], [5, 6])
 * => [[1, 3, 5], [2, 4, 6]]
 */
function zip () {
  const arrays = [].slice.call(arguments, 0);
  const result = [];
  var i = -1;
  // Find length of shortest array
  var len = Math.min.apply(Math, arrays.map(arr => arr.length));
  while (++i < len)
    result.push(arrays.map(array => array[i]));
  return result;
}
