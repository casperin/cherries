/**
 * The opposite of Array.filter
 */
module.exports = reject;

function reject (fn, array) {
  return array.reduce(function (result, item) {
    if (!fn(item)) result.push(item);
    return result;
  }, []);
}
