
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length < 1) {
    return 0;
  }
  let less = array[0];
  for (let i = 1; i < array.length; i += 1) {
    less = (array[i] < less) ? array[i] : less;
  }
  return less;
};

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length < 1) {
    return 0;
  }
  let big = array[0];
  for (let i = 1; i < array.length; i += 1) {
    big = (array[i] > big) ? array[i] : big;
  }
  return big;
};

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length < 1) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum/array.length;
};
