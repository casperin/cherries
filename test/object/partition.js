const tape = require('tape');
const partition = require('../../object/partition');

tape('object - partition', t => {
  var keysResult = '';
  var valuesResult = 0;
  const obj = {a: 1, b: 2, c: 3};
  const result = partition(value => value < 2, obj);
  t.deepLooseEqual(result, [{a: 1}, {b: 2, c: 3}]);
  t.end();
});

