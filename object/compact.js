module.exports = compact;

function compact (object) {
  const result = {};
  for (var prop in object) {
    if (object.hasOwnProperty(prop) && object[prop])
      result[prop] = object[prop];
  }
  return result;
}
