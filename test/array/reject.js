const tape = require('tape');
const reject = require('../../array/reject');

tape('array - reject', t => {
  const array = [1, 2, 3, 4, 5];
  const result = reject(x => x > 3, array);
  t.deepLooseEqual(result, [1, 2, 3]);
  t.end();
});


