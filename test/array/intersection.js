const tape = require('tape');
const intersection = require('../../array/intersection');

tape('array - intersection', t => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  const result = intersection(array1, array2);
  t.deepLooseEqual(result, [2, 3]);
  t.end();
});
