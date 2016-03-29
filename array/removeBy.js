module.exports = removeBy;

function removeBy (fn, array) {
  return array.filter(item => !fn(item));
}
