const tape = require('tape');
const throttle = require('../../function/throttle');

tape('function - throttle', t => {
  var result = 0;
  const fn = n => result += n;
  const throttledFn = throttle(50, fn);
  throttledFn(1);
  throttledFn(1);
  t.equal(result, 1);
  t.end();
});
