const tape = require('tape');
const c0 = require('../../function/c0');

tape('function - c0', t => {
  const add1 = x => x + 1;
  const double =x => x * 2;
  const fn = c0(double, add1);
  t.deepLooseEqual(fn(1), 4);
  t.end();
});
