module.exports = toLists;

/**
 * Same as [keys(obj), values(obj)]
 */
function toLists (object) {
  var keys = [], values = [];
  for (var prop in object) {
    if (!object.hasOwnProperty(prop)) continue;
    keys.push(prop);
    values.push(object[prop]);
  }
  return [keys, values];
}
