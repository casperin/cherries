const tape = require('tape');
const reverse = require('../../string/reverse');

tape('string - reverse', t => {
  t.equal(reverse('def'), 'fed');
  t.equal(reverse(''), '');
  t.equal(reverse('aada'), 'adaa');
  t.end();
});
