module.exports = initial;

/**
 * Everything but the last item.
 */
function initial (array) {
  return array.slice(0, array.length-1);
}

