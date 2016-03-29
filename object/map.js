module.exports = map;

function map (fn, object) {
  var result = [];
  for (var prop in object) {
    if (object.hasOwnProperty(prop))
      result.push(fn(object[prop], prop));
  }
  return result;
}

