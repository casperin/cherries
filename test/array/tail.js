const tape = require('tape');
const tail = require('../../array/tail');

tape('array - tail', t => {
  const result = tail([1, 2, 3]);
  t.deepLooseEqual(result, [2, 3]);
  t.end();
});

