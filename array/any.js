module.exports = any;

function any (fn, array) {
  for (var item of array)
    if (fn(item)) return true;
  return false;
}
