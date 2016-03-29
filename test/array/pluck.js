const tape = require('tape');
const pluck = require('../../array/pluck');

tape('array - pluck', t => {
  const result = pluck('foo', [{foo: 0}, {foo: 1}, {bar: 3}]);
  t.deepLooseEqual(result, [0, 1]);
  t.end();
});

