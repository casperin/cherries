module.exports = group;

function group (fn, array) {
  const result = {};
  array.forEach(item => {
    const key = fn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
  });
  return result;
}
