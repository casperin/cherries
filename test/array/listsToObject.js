const tape = require('tape');
const listsToObject = require('../../array/listsToObject');

tape('array - listsToObject', t => {
  const array1 = ['a', 'b'];
  const array2 = [1, 2, 3];
  const result = listsToObject(array1, array2);
  t.deepLooseEqual(result, {a: 1, b: 2});
  t.end();
});
