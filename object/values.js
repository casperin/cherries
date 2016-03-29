module.exports = values;

function values (object) {
  const result = [];
  for (var prop in object)
    if (object.hasOwnProperty(prop)) result.push(object[prop]);
  return result;
}
