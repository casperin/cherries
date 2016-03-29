const tape = require('tape');
const initial = require('../../array/initial');

tape('array - initial', t => {
  const result = initial([1, 2, 3]);
  t.deepLooseEqual(result, [1, 2]);
  t.end();
});



