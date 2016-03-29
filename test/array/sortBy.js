const tape = require('tape');
const sortBy = require('../../array/sortBy');

tape('array - sortBy', t => {
  const array = ['c', 'b', 'd', 'a'];
  const result = sortBy(s => s.charCodeAt(0), array);
  t.deepLooseEqual(result, ['a', 'b', 'c', 'd']);
  t.end();
});


