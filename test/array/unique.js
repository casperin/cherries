const tape = require('tape');
const unique = require('../../array/unique');

tape('array - unique', t => {
  const array = [1, 2, 4, 2, 4, 3];
  const result = unique(array);
  t.deepLooseEqual(result, [1, 2, 4, 3]);
  t.end();
});
