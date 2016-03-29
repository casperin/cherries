module.exports = pairsToObject;

function pairsToObject (array) {
  var result = {}, i = -1;
  while (++i < array.length)
    result[array[i][0]] = array[i][1];
  return result;
}
