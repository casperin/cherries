const tape = require('tape');
const removeBy = require('../../array/removeBy');

tape('array - removeBy', t => {
  const array = [1, 2, 3, 4, 2, 3, 1, 4];
  const result = removeBy(x => x < 3, array);
  t.deepLooseEqual(result, [3, 4, 3, 4]);
  t.end();
});

