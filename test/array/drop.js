const tape = require('tape');
const drop = require('../../array/drop');

tape('array - drop', t => {
  const result1 = drop(2, [1, 2, 3, 4]);
  t.deepLooseEqual(result1, [3, 4]);

  const result2 = drop(8, [1, 2, 3, 4]);
  t.deepLooseEqual(result2, []);

  t.end();
});



