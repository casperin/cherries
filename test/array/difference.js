const tape = require('tape');
const difference = require('../../array/difference');

tape('array - difference', t => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  const result = difference(array1, array2);
  t.deepLooseEqual(result, [1, 4]);
  t.end();
});

