module.exports = find;

function find (fn, array, notFound) {
  for (var item of array)
    if (fn(item)) return item;
  return arguments.length === 3 ? notFound : null;
}
