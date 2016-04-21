const tape = require('tape');
const group = require('../../array/group');

tape('array - group', t => {
  const array1 = [{a: 'a', b: 1}, {a: 'b', b: 2}, {a: 'a', b: 3}, {a: 'c', b: 4}, {a: 'b', b: 5}];
  const result1 = group((o => o.a), array1);
  console.log(result1);
  const expected1 = {
    a: [{a: 'a', b: 1}, {a: 'a', b: 3}],
    b: [{a: 'b', b: 2}, {a: 'b', b: 5}],
    c: [{a: 'c', b: 4}]
  };
  t.deepLooseEqual(result1, expected1);
  t.end();
});


