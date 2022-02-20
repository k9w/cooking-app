function inchesToCentimeters(inchesInput) {
  return inchesInput * 2.54;
}

function centimetersToInches(centimetersInput) {
  return centimetersInput / 2.54;
}

const inchesInput = parseInt(prompt('1 of 4. Enter inches to convert to centimeters.'));
const centimetersOutput = inchesInput + ' inches is ' + inchesToCentimeters(inchesInput) + ' centimeters.';

const centimetersInput = parseInt(prompt('2 of 4. Enter centimeters to convert to inches.'));
const inchesOutput = centimetersInput + ' centimeters is ' + centimetersToInches(centimetersInput) + ' inches.';

// Converting from centimeters to inches (dividing by 2,54) does not
// return the inverse result of inches to centimeters, (multiply by
// 2.54). This issue does not show up in Google's converter. It's
// likely specific to JavaScript and can be improved by a helper
// method.

function gallonsToLiters(gallonsInput) {
  return gallonsInput * 3.78541;
}

function litersToGallons(litersInput) {
  return litersInput / 3.78541;
}

const gallonsInput = parseInt(prompt('3 of 4. Enter gallons to convert to liters.'));
const litersOutput = gallonsInput + ' gallons is ' + gallonsToLiters(gallonsInput) + ' liters.';

const litersInput = parseInt(prompt('4 of 4. Enter liters to convert to gallons.'));
const gallonsOutput = litersInput + ' liters is ' + litersToGallons(litersInput) + ' gallons.';

alert(centimetersOutput + '\n' + inchesOutput + '\n' + gallonsOutput + '\n' + litersOutput);
