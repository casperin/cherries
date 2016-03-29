const tape = require('tape');
const padEnd = require('../../string/padEnd');

tape('string - padEnd', t => {
  t.equal(padEnd('x', 5, 'ab'), 'xabab');
  t.equal(padEnd('abcd', 2, '#'), 'abcd');
  t.equal(padEnd('abc', 10, '0123456789'), 'abc0123456');
  t.equal(padEnd('x', 3), 'x  ');
  t.end();
});
