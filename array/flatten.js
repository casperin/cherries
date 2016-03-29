module.exports = flatten;

/**
 * only flattens one level
 */
function flatten (arrays) {
  var result = [];
  for (var array of arrays)
    result = result.concat(array);
  return result;
}
