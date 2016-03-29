const tape = require('tape');
const any = require('../../array/any');

tape('array - any', t => {
  const result1 = any(x => x > 3, [1, 2, 3, 4, 5, 6]);
  t.equal(result1, true);

  const result2 = any(x => x > 30, [1, 2, 3, 4, 5, 6]);
  t.equal(result2, false);

  t.end();
});


