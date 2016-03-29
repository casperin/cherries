const tape = require('tape');
const endsWith = require('../../string/endsWith');

tape('string - endsWith', t => {
  t.ok(endsWith('def', 'abcdef'));
  t.ok(endsWith('o', 'hello'));
  t.ok(endsWith('', 'foo'));
  t.notOk(endsWith('f', 'foo'));
  t.end();
});
