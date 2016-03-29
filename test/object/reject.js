const tape = require('tape');
const reject = require('../../object/reject');

tape('object - reject', t => {
  var keysResult = '';
  var valuesResult = 0;
  const obj = {a: 1, b: 2};
  const result = reject((value, key) => value < 2, obj);
  t.deepLooseEqual(result, {b: 2});
  t.end();
});
