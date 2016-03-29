const tape = require('tape');
const update = require('../../array/update');

tape('array - update', t => {
  const result1 = update('a', 2, [0, 1, 2, 3, 4, 5]);
  t.deepLooseEqual(result1, [0, 1, 'a', 3, 4, 5]);

  const result2 = update(['a', 'b'], 2, [0, 1, 2, 3, 4, 5]);
  t.deepLooseEqual(result2, [0, 1, ['a', 'b'], 3, 4, 5]);

  t.end();
});
