module.exports = c0;

/**
 * aka. `compose`
 */
function c0 () {
  var fns = arguments;
  return function () {
    var args = arguments;
    var i = fns.length;
    while (i--) args = [fns[i].apply(this, args)];
    return args[0];
  };
}
