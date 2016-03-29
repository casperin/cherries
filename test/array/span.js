const tape = require('tape');
const span = require('../../array/span');

tape('array - span', t => {
  const array = [1, 4, 2, 3, 6, 5, 1, 0, 3];

  const result1 = span(x => x < 6, array);
  t.deepLooseEqual(result1, [[1, 4, 2, 3], [6, 5, 1, 0, 3]]);

  const result2 = span(_ => false, array);
  t.deepLooseEqual(result2, [[], array]);

  const result3 = span(_ => true, array);
  t.deepLooseEqual(result3, [array, []]);

  t.end();
});
