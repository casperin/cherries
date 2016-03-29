const tape = require('tape');
const last = require('../../array/last');

tape('array - last', t => {
  const result = last([1, 2, 3]);
  t.equal(result, 3);
  t.end();
});


