const tape = require('tape');
const dropWhile = require('../../array/dropWhile');

tape('array - dropWhile', t => {
  const result1 = dropWhile(x => x < 3, [1, 2, 3]);
  t.deepLooseEqual(result1, [3]);

  const result2 = dropWhile(_ => false, [1, 2, 3]);
  t.deepLooseEqual(result2, [1, 2, 3]);

  const result3 = dropWhile(_ => true, [1, 2, 3]);
  t.deepLooseEqual(result3, []);

  t.end();
});
