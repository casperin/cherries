module.exports = toPairs;

function toPairs (object) {
  var result = [];
  for (var prop in object)
    if (object.hasOwnProperty(prop)) result.push([prop, object[prop]]);
  return result;
}
