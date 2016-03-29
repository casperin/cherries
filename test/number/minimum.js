const tape = require('tape');
const minimum = require('../../number/minimum');

tape('number - minimum', t => {
  const result1 = minimum([1, 2, 3, 11, 3]);
  t.deepLooseEqual(result1, 1);

  const result = minimum([]);
  t.deepLooseEqual(result, undefined);

  t.end();
});

