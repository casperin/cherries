const tape = require('tape');
const pairsToObject = require('../../array/pairsToObject');

tape('array - pairsToObject', t => {
  const result = pairsToObject([['a', 1], ['b', 2]]);
  t.deepLooseEqual(result, {a: 1, b: 2});

  t.end();
});
