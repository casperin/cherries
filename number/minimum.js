module.exports = minimum;

function minimum (numbers) {
  if (numbers.length === 0) return null;
  return numbers.reduce((x, y) => x < y ? x : y);
}

