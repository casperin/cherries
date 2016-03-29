const tape = require('tape');
const flatten = require('../../array/flatten');

tape('array - flatten', t => {
  const array = [[1, 2], [3, 4], [[5, 6]]];
  t.deepLooseEqual(flatten(array), [1, 2, 3, 4, [5, 6]]);
  t.end();
});

