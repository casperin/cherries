const tape = require('tape');
const startsWith = require('../../string/startsWith');

tape('string - startsWith', t => {
  t.ok(startsWith('abc', 'abcdef'));
  t.ok(startsWith('h', 'hello'));
  t.ok(startsWith('', 'foo'));
  t.notOk(startsWith('o', 'foo'));
  t.end();
});
