var bmi = function(weight, height) {
	return (weight)/(height*height);
};
var weight = parseFloat(prompt("Enter your weight"));
var height = parseFloat(prompt("Enter your height"));
var bmiResult = bmi(weight, height);

alert(bmiResult);
