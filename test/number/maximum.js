const tape = require('tape');
const maximum = require('../../number/maximum');

tape('number - maximum', t => {
  const result = maximum([1, 2, 3, 11, 3]);
  t.deepLooseEqual(result, 11);
  t.end();
});
