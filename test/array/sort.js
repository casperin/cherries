const tape = require('tape');
const sort = require('../../array/sort');

tape('array - sort', t => {
  const result1 = sort([2, 5, 3, 4, 2]);
  t.deepLooseEqual(result1, [2, 2, 3, 4, 5]);

  const result2 = sort([10, 2]);
  t.deepLooseEqual(result2, [2, 10]);

  t.end();
});
