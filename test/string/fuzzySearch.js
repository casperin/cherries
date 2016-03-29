const tape = require('tape');
const fuzzySearch = require('../../string/fuzzySearch');

tape('string - fuzzySearch', t => {
  const needle1 = 'foo';
  const hay1 = 'fabcodefoghi';
  t.equal(fuzzySearch(needle1, hay1), true);

  const needle2 = 'ofo';
  const hay2 = 'fabcodefoghi';
  t.equal(fuzzySearch(needle2, hay2), true);

  const needle3 = 'bar';
  const hay3 = 'fabcodefoghi';
  t.equal(fuzzySearch(needle3, hay3), false);

  t.end();
});
