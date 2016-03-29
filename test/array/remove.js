const tape = require('tape');
const remove = require('../../array/remove');

tape('array - remove', t => {
  const array = [1, 2, 3, 4, 2, 3, 1, 4];
  const result = remove(2, array);
  t.deepLooseEqual(result, [1, 3, 4, 3, 1, 4]);
  t.end();
});

