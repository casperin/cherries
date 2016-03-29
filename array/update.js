module.exports = update;

function update (item, index, array) {
  const result = array.slice(0, index);
  result.push(item);
  return result.concat(array.slice(index + 1));
}
