const tape = require('tape');
const toLists = require('../../object/toLists');

tape('object - toLists', t => {
  const result1 = toLists({one: 1, two: 2});
  t.deepLooseEqual(result1, [['one', 'two'], [1, 2]]);

  const result2 = toLists({});
  t.deepLooseEqual(result2, [[], []]);

  t.end();
});
