var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number3, number4) {
  return number3 - number4;
};

var number3 = parseInt(prompt("Enter a number:"));
var number4 = parseInt(prompt("Enter another number:"));
var result2 = subtract(number3, number4);
alert(result2);

var multiply = function(number5, number6) {
  return number5 * number6;
};

var number5 = parseInt(prompt("Enter a number:"));
var number6 = parseInt(prompt("Enter another number:"));
var result3 = multiply(number5, number6);
alert(result3);

var divide = function(number7, number8) {
  return number7 / number8;
};

var number7 = parseInt(prompt("Enter a number:"));
var number8 = parseInt(prompt("Enter another number:"));
var result4 = divide(number7, number8);
alert(result4);

function cToF(celsius) 
{
  var cTemp = parseInt(prompt("Enter a whole celsius temperature:"));
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} // From an online resource - change to calculator way from before

var convertToF = function(celsius) {
	return cTemp * 9 / 5 + 32;
};

var cTemp = parseInt(prompt("Enter a whole celsius temperature:"));
var result = "That is " + (cTemp * 9 / 5 + 32) + " degrees Fahrenheit.";
alert(result);

var convertToC = function(fahrenheit) {
	return (fTemp - 32) * 5/9;
};

var fTemp = parseInt(prompt("Enter a whole fahrenheit temperature:"));
var result2 = "That is " + (fTemp - 32) * 5/9 + " degrees Celsius.";
alert(result2);