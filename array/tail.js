module.exports = tail;

/**
 * Everything but the first item.
 */
function tail (array) {
  return array.slice(1);
}
