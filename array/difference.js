module.exports = difference;

function difference (array1, array2) {
  const diff1 = array1.filter(item => array2.indexOf(item) === -1);
  const diff2 = array2.filter(item => array1.indexOf(item) === -1);
  return diff1.concat(diff2);
}
