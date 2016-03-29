const tape = require('tape');
const replicate = require('../../array/replicate');

tape('array - replicate', t => {
  t.deepLooseEqual(replicate(3, 'a'), ['a', 'a', 'a']);
  t.end();
});

