const tape = require('tape');
const map = require('../../object/map');

tape('object - map', t => {
  var keysResult = '';
  var valuesResult = 0;
  const obj = {a: 1, b: 2};
  const result = map((value, key) => key + value, obj);
  t.deepLooseEqual(result, ['a1', 'b2']);
  t.end();
});
