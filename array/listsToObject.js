module.exports = listsToObject;

function listsToObject (props, values) {
  const result = {};
  const len = Math.min(props.length, values.length);
  var i = -1;
  while (++i < len) result[props[i]] = values[i];
  return result;
}
