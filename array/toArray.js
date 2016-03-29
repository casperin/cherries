module.exports = toArray;

function toArray (item) {
  return Array.isArray(item) ? item : [item];
}
