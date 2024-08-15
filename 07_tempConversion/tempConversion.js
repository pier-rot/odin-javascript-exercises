const convertToCelsius = function(tempF) {
  let tempInCelsius = (tempF - 32) * (5/9);
  return Math.round(tempInCelsius * 10)/10;
};

const convertToFahrenheit = function(tempC) {
  let tempInFahr = tempC * (9/5) + 32;
  return Math.round(tempInFahr*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
