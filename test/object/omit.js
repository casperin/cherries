const tape = require('tape');
const omit = require('../../object/omit');

tape('object - omit', t => {
  const obj = {one: 1, two: 2, three: 3, four: 4};
  const result = omit(['one', 'four'], obj);
  t.deepLooseEqual(result, {two: 2, three: 3});
  t.end();
});

