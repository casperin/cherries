const tape = require('tape');
const all = require('../../array/all');

tape('array - all', t => {
  const result1 = all(x => x > 3, [5, 4, 3, 2]);
  t.equal(result1, false);

  const result2 = all(x => x < 30, [1, 2, 3, 4, 5, 6]);
  t.equal(result2, true);

  t.end();
});
