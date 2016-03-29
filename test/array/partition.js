const tape = require('tape');
const partition = require('../../array/partition');

tape('array - partition', t => {
  const array = [0, 3, 1, 4, 2, 5];
  const result = partition(x => x > 2, array);
  const passed = result[0];
  const failed = result[1];
  t.deepLooseEqual(passed, [3, 4, 5]);
  t.deepLooseEqual(failed, [0, 1, 2]);
  t.end();
});
