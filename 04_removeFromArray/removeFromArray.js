const removeFromArray = function (array, ...elements) {
  let arr = array;
  for (let i = 0; i < elements.length; i++) {
    arr = arr.filter(
      function (elem) {
        return elem !== elements[i];
      }
    )
  }
  console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
