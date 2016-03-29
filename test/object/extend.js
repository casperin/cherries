const tape = require('tape');
const extend = require('../../object/extend');

tape('object - extend', t => {
  const obj1 = {one: 1, two: 2};
  const obj2 = {one: 11, three: 3};

  const result1 = extend(obj1, obj2);
  t.deepLooseEqual(result1, {one: 11, two: 2, three: 3});

  const result2 = extend(obj1, undefined, obj2);
  t.deepLooseEqual(result2, {one: 11, two: 2, three: 3});

  t.end();
});
