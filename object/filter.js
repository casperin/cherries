module.exports = filter;

function filter (fn, object) {
  const result = {};
  for (var prop in object) {
    if (object.hasOwnProperty(prop) && fn(object[prop], prop))
      result[prop] = object[prop];
  }
  return result;
}
