const tape = require('tape');
const find = require('../../array/find');

tape('array - find', t => {
  const result1 = find(x => x > 2, [0, 1, 2, 3, 4]);
  t.equal(result1, 3);

  const result2 = find(x => x > 2, [0, 1, 2]);
  t.equal(result2, null);

  const result3 = find(x => x > 2, [0, 1, 2], 'NOT_FOUND');
  t.equal(result3, 'NOT_FOUND');

  t.end();
});
