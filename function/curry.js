module.exports = curry;

function curry (fn) {
  const args = [].slice.call(arguments);

  if (args.length - 1 >= fn.length)
    return fn.apply(this, args.slice(1));

  return function () {
    const tempArgs = args.concat([].slice.call(arguments));
    return curry.apply(this, tempArgs);
  };
}
