const tape = require('tape');
const sortWith = require('../../array/sortWith');

tape('array - sortWith', t => {
  const array = [2, 5, 3, 4, 1];
  const result = sortWith((x, y) => y - x, array);
  t.deepLooseEqual(result, [5, 4, 3, 2, 1]);
  t.end();
});

