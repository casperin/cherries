const tape = require('tape');
const reverse = require('../../array/reverse');

tape('array - reverse', t => {
  const array = [1, 2, 3];
  t.deepLooseEqual(reverse(array), [3, 2, 1]);
  // make sure the original array is untouched.
  t.deepLooseEqual(array, [1, 2, 3]);
  t.end();
});
