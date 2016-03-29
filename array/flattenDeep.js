module.exports = flattenDeep;

/**
 * Notice: Recursive function
 */
function flattenDeep (array) {
  var result = [];
  for (var item of array) {
    if (Array.isArray(item)) item = flattenDeep(item);
    result = result.concat(item);
  }
  return result;
}
