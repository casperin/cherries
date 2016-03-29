const tape = require('tape');
const once = require('../../function/once');

tape('function - once', t => {
  var result = 0;
  const fn = n => result += n;
  const oncedFn = once(fn);
  oncedFn(1);
  oncedFn(1);
  t.equal(result, 1);
  t.end();
});
