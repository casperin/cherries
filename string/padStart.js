module.exports = padEnd;

function padEnd (str, maxLength, fillString) {
  fillString = fillString || ' ';
  if (str.length >= maxLength) return str;

  var fillLen = maxLength - str.length;
  var timesToRepeat = Math.ceil(fillLen / fillString.length);
  var truncatedStringFiller = fillString
    .repeat(timesToRepeat)
    .slice(0, fillLen);
  return truncatedStringFiller + str;
}
