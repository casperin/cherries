const tape = require('tape');
const takeWhile = require('../../array/takeWhile');

tape('array - takeWhile', t => {
  const result1 = takeWhile(x => x < 3, [1, 2, 3]);
  t.deepLooseEqual(result1, [1, 2]);

  const result2 = takeWhile(_ => false, [1, 2, 3]);
  t.deepLooseEqual(result2, []);

  const result3 = takeWhile(_ => true, [1, 2, 3]);
  t.deepLooseEqual(result3, [1, 2, 3]);

  t.end();
});
