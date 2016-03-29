const tape = require('tape');
const curry = require('../../function/curry');

tape('function - curry', t => {
  const add = curry((x, y, z) => x + y + z)
  t.equal(add(1, 2, 3), 6);
  t.equal(add(1)(2, 3), 6);
  t.equal(add(1)()(2, 3), 6);
  t.equal(add(1)(2)(3), 6);
  t.equal(add()()(1)(2)(3), 6);
  t.end();
});
