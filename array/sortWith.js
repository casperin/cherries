module.exports = sortWith;

function sortWith (fn, array) {
  return array.slice(0).sort(fn);
}

