module.exports = pick;

function pick (props, object) {
  const result = {};
  for (var prop of props)
    if (object.hasOwnProperty(prop)) result[prop] = object[prop];
  return result;
}
