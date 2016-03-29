const tape = require('tape');
const empty = require('../../object/empty');

tape('object - empty', t => {
  const result1 = empty({one: 1});
  t.equal(result1, false);

  const result2 = empty({});
  t.equal(result2, true);

  t.end();
});
