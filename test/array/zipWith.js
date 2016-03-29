const tape = require('tape');
const zipWith = require('../../array/zipWith');

tape('array - zipWith', t => {
  const array1 = [1, 2];
  const array2 = [3, 4, 5];
  const array3 = ['a', 'b'];

  const result1 = zipWith((n, m) => n + m, array1, array2);
  t.deepLooseEqual(result1, [4, 6]);

  const zipFn2 = (n, m, c) => c + n + m; // coercion
  const result2 = zipWith(zipFn2, array1, array2, array3);
  t.deepLooseEqual(result2, ['a13', 'b24']);

  t.end();
});
