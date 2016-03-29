module.exports = omit;

function omit (props, object) {
  var result = {};
  for (var prop in object) {
    if (object.hasOwnProperty(prop) && props.indexOf(prop) === -1)
      result[prop] = object[prop];
  }
  return result;
}
