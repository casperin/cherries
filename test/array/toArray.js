const tape = require('tape');
const toArray = require('../../array/toArray');

tape('array - toArray', t => {
  t.deepLooseEqual(toArray('a'), ['a']);

  // Don't do anything if it's already an array
  t.deepLooseEqual(toArray(['a', 'b']), ['a', 'b']);

  t.end();
});
