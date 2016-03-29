const tape = require('tape');
const union = require('../../array/union');

tape('array - union', t => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  const result = union(array1, array2);
  t.deepLooseEqual(result, [1, 2, 3, 4]);
  t.end();
});
