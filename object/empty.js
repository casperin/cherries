module.exports = empty;

function empty (object) {
  for (var prop in object)
    if (object.hasOwnProperty(prop)) return false;
  return true;
}
