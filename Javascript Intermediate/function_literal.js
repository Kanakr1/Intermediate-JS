// var add =function (number1 , number2) {
// 	var sum = number1+ number2;
// 	return sum;
// }

// console.log(add(3,5));

//** converting to IIFE***
/*
var add =function (number1 , number2) {
	var sum = number1+ number2;
	console.log(sum);
}(); // return NaN as no parameters are passed
*/

var add =function (number1 , number2) {
	var sum = number1+ number2;
	console.log(sum);
}(3,4);