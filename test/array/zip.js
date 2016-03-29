const tape = require('tape');
const zip = require('../../array/zip');

tape('array - zip', t => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4, 5];
  const array3 = ['a', 'b'];

  const result1 = zip(array1, array2);
  t.deepLooseEqual(result1, [[1, 2], [2, 3], [3, 4]]);

  const result2 = zip(array1, array2, array3);
  t.deepLooseEqual(result2, [[1, 2, 'a'], [2, 3, 'b']]);

  t.end();
});
