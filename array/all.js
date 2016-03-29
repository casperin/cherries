module.exports = all;

function all (fn, array) {
  for (var item of array)
    if (!fn(item)) return false;
  return true;
}
