const tape = require('tape');
const compact = require('../../array/compact');

tape('array - compact', t => {
  const array = [1, 0, 2, undefined, null, 3, -1, 'foo', false, ''];
  const result = compact(array);
  t.deepLooseEqual(result, [1, 2, 3, -1, 'foo']);
  t.end();
});
