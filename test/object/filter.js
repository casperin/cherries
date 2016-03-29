const tape = require('tape');
const filter = require('../../object/filter');

tape('object - filter', t => {
  var keysResult = '';
  var valuesResult = 0;
  const obj = {a: 1, b: 2};
  const result = filter((value, key) => value < 2, obj);
  t.deepLooseEqual(result, {a: 1});
  t.end();
});
