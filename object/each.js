module.exports = each;

function each (fn, object) {
  for (var prop in object)
    if (object.hasOwnProperty(prop)) fn(object[prop], prop);
}
