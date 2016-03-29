module.exports = pluck;

function pluck (prop, array) {
  return array.reduce(function (result, item) {
    if (item.hasOwnProperty(prop)) result.push(item[prop]);
    return result;
  }, []);
}

