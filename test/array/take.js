const tape = require('tape');
const take = require('../../array/take');

tape('array - take', t => {
  const result1 = take(2, [1, 2, 3]);
  t.deepLooseEqual(result1, [1, 2]);

  const result2 = take(300, [1, 2, 3]);
  t.deepLooseEqual(result2, [1, 2, 3]);

  t.end();
});



