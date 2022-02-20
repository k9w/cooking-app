/*

// formula: (0°C × 9/5) + 32 = 32°F
function celsiusToFahrenheit(celsiusInput) {
  return celsiusInput * 9 / 5 + 32;
}

// formula: (32°F − 32) × 5/9 = 0°C
function fahrenheitToCelsius(fahrenheitInput) {
  return (fahrenheitInput - 32) * 5 / 9;
}

const celsiusInput = parseInt(prompt("Enter a temperature in Celsius:"));
const fahrenheitOutput = celsiusInput + ' degrees C is ' + celsiusToFahrenheit(celsiusInput) + ' degrees F.';

const fahrenheitInput = parseInt(prompt("Enter a temperature in Fahrenheit:"));
const celsiusOutput = fahrenheitInput + ' degrees F is ' + fahrenheitToCelsius(fahrenheitInput) + ' degrees C.';

alert(fahrenheitOutput + '\n' + celsiusOutput);

*/

function inchesToCentimeters(inchesInput) {
  return inchesInput * 2.54;
}

function centimetersToInches(centimetersInput) {
  return centimetersInput / 2.54;
}

const inchesInput = parseInt(prompt('Enter inches to convert to centimeters.'));
const centimetersOutput = inchesInput + ' inches is ' + inchesToCentimeters(inchesInput) + ' centimeters.';

alert(centimetersOutput);

const centimetersInput = parseInt(prompt('Enter centimeters to convert to inches.'));
const inchesOutput = centimetersInput + ' centimeters is ' + centimetersToInches(centimetersInput) + ' inches.';

alert(inchesOutput);

// Converting from centimeters to inches (dividing by 2,54) does not
// return the inverse result of inches to centimeters, (multiply by
// 2.54). This issue does not show up in Google's converter. It's
// likely specific to JavaScript and can be improved by a helper
// method.

