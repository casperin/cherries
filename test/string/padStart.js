const tape = require('tape');
const padStart = require('../../string/padStart');

tape('string - padStart', t => {
  t.equal(padStart('x', 5, 'ab'), 'ababx');
  t.equal(padStart('abcd', 2, '#'), 'abcd');
  t.equal(padStart('abc', 10, '0123456789'), '0123456abc');
  t.equal(padStart('x', 3), '  x');
  t.end();
});
