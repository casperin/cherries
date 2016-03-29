const tape = require('tape');
const each = require('../../object/each');

tape('object - each', t => {
  var keysResult = '';
  var valuesResult = 0;
  const obj = {a: 1, b: 2};

  each((value, key) => {
    keysResult += key;
    valuesResult += value;
  }, obj);

  t.equal(keysResult, 'ab');
  t.equal(valuesResult, 3);

  t.end();
});

