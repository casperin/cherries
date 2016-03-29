module.exports = unique;

function unique (array) {
  return array.filter((item, i) => array.indexOf(item) === i);
}
