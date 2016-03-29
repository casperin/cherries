const tape = require('tape');
const toPairs = require('../../object/toPairs');

tape('object - toPairs', t => {
  const result1 = toPairs({one: 1, two: 2});
  t.deepLooseEqual(result1, [['one', 1], ['two', 2]]);

  const result2 = toPairs({});
  t.deepLooseEqual(result2, []);

  t.end();
});
