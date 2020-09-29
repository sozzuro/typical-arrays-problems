
exports.min = function min (array) {
  let minNumber = 0
  
  if (!Array.isArray(array) || array.length <= 0) {
    return 0;
  }
  
  array.map(item => item < minNumber ? minNumber = item : minNumber) 
  return minNumber;
}

exports.max = function max (array) {
  let maxNumber = 0
  
  if (!Array.isArray(array) || array.length <= 0) {
    return 0;
  }
  
  array.map(item => item > maxNumber ? maxNumber = item : maxNumber) 
  return maxNumber;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length <= 0) {
    return 0;
  }

  return array.reduce((prevValue, item) => item + prevValue) / array.length;
}
