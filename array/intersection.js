module.exports = intersection;

function intersection (array1, array2) {
  return array1.filter(item => array2.indexOf(item) > -1);
}
