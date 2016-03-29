const tape = require('tape');
const compact = require('../../object/compact');

tape('object - compact', t => {
  const obj = {a: 1, b: 2, c: 0, d: null, e: '', f: 42};
  const result = compact(obj);
  t.deepLooseEqual(result, {a: 1, b: 2, f: 42});
  t.end();
});

