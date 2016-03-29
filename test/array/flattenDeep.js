const tape = require('tape');
const flattenDeep = require('../../array/flattenDeep');

tape('array - flattenDeep', t => {
  const array = [[1, 2], [3, 4], [[5, 6]]];
  t.deepLooseEqual(flattenDeep(array), [1, 2, 3, 4, 5, 6]);
  t.end();
});

