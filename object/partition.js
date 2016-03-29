module.exports = partition;

function partition (fn, object) {
  const passed = {};
  const failed = {};
  for (var prop in object) {
    if (object.hasOwnProperty(prop) && fn(object[prop], prop))
      passed[prop] = object[prop];
    else
      failed[prop] = object[prop];
  }
  return [passed, failed];
}
