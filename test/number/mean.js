const tape = require('tape');
const mean = require('../../number/mean');

tape('number - mean', t => {
  const result = mean([1, 2, 3, 11, 3]);
  t.deepLooseEqual(result, 4);
  t.end();
});
