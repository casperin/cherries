module.exports = compact;

/**
 * Removes falsy items like 0, undefined and null from an array.
 */
function compact (array) {
  return array.filter(item => item);
}
