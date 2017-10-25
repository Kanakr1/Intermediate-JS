
/*
Notes : 
arguments object : similar to array; has .length, index and can loop thrpough it. Doesnt have other array methods on it.


*/

/* block 1
var add = function() {
	return arguments;
}

console.log(add()); // => [] will return an array with length prop on it.
console.log(add('hello')); // => ['hello']

*/

// arguments object can be looped like an array.

var add = function() {

	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(add(2,3,4,)); // => 9





