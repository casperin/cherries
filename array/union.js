module.exports = union;

function union (array1, array2) {
  return array1.concat(array2.filter(item => array1.indexOf(item) === -1));
}
