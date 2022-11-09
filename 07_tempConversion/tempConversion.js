const ftoc = function(fahrenheit) {
  return Math.round((fahrenheit-32) / 1.8);
};

const ctof = function(celsius) {
  return Math.round((celsius*1.8)+32);
};
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
