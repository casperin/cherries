module.exports = mean;

function mean (numbers) {
  return numbers.reduce((x, y) => x + y) / numbers.length;
}
