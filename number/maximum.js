module.exports = maximum;

function maximum (numbers) {
  if (numbers.length === 0) return null;
  return numbers.reduce((x, y) => x > y ? x : y);
}
