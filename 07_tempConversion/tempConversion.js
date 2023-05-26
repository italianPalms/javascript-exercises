

const convertToCelsius = function (fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = Math.round(((fTemp - 32) * 5 / 9) * 10) / 10;

  return fToCel;
  
};

const convertToFahrenheit = function(celsius) {
  let cTemp = celsius;
  let cToFahr = Math.round((cTemp * 9 / 5 + 32) * 10) / 10;

  return cToFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
