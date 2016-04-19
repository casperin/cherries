const tape = require('tape');
const uniqueBy = require('../../array/uniqueBy');

tape.only('array - uniqueBy', t => {
  const array = [{id: 0}, {id: 1}, {id: 2}, {id: 1}, {id: 3}, {id :0}];
  const result = uniqueBy(item => item.id, array);
  t.deepLooseEqual(result, [{id: 0}, {id: 1}, {id: 2}, {id: 3}]);
  t.end();
});
