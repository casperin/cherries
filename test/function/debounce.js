const tape = require('tape');
const debounce = require('../../function/debounce');

tape('function - debounce', t => {
  var result = 0;
  const fn = n => result += n;
  const debouncedFn = debounce(50, fn);
  debouncedFn(1);
  debouncedFn(1);
  t.equal(result, 0);
  t.end();
});
