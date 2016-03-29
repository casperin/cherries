module.exports = extend;

function extend () {
  const objects = [].slice.call(arguments, 0);
  const result = {};
  var i = -1;
  while (++i < objects.length) {
    for (var prop in objects[i]) {
      if (objects[i].hasOwnProperty(prop))
        result[prop] = objects[i][prop];
    }
  }
  return result;
}
