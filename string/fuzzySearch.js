module.exports = fuzzySearch;

/**
 * Adapted from
 * http://stackoverflow.com/questions/9206013/javascript-fuzzy-search
 */
function fuzzySearch (needle, hay) {
  hay = hay.toLowerCase();
  needle = needle.toLowerCase();
  for (var i = 0, n = -1, l; l = needle[i++] ;)
    if (!~(n = hay.indexOf(l, n + 1))) return false;
  return true;
};
