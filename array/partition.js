module.exports = partition;

function partition (fn, array) {
  const passed = [];
  const failed = [];
  array.forEach(item => {
    if (fn(item))
      passed.push(item);
    else
      failed.push(item);
  });
  return [passed, failed];
}
