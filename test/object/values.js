const tape = require('tape');
const values = require('../../object/values');

tape('object - values', t => {
  const result1 = values({one: 1, two: 2});
  t.deepLooseEqual(result1, [1, 2]);

  const result2 = values({});
  t.deepLooseEqual(result2, []);

  t.end();
});
