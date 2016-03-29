const tape = require('tape');
const pick = require('../../object/pick');

tape('object - pick', t => {
  const obj = {one: 1, two: 2, three: 3, four: 4};
  const result = pick(['one', 'four'], obj);
  t.deepLooseEqual(result, {one: 1, four: 4});
  t.end();
});
