/*

Notes 


*/



/*
var add = function run() {
	console.log('run 5k');
}


add(); // => run 5k
run(); // => throws an error run is not defined
// even though the function has a name run, its being passed
// to a variable as an expression, so we need to use that variable while invoking the function
*/
/*
function() {
	console.log('run 5k');
}(); // => throws an error unexpected token ( , because something is missing, its expecting the function to have a name
*/


/* step1
function add() {
	console.log('run 5k');
}(); // => throws an error because in order to use it in traditional way, it has to be called from outside


//step 2
function add() {
	console.log('run 5k');
}; 
add();

*/


// ** VERY IMP ** IIFE can be called only on function expressions.
var add = function() {
	console.log('run 5k');
}(); // => run 5k


/* VERY IMP concept.
sometimes we need to call the function as is and we dont need a function name
so we wrap the function around the parenthesis

Step 1: 
function() {
	console.log('run 5k');
}();


Step 2 : wrap the function in parenthesis.

1. this is called anonymous closure.
2. We use anonymous closure when we dont need the name of the function and we dont need to reuse the code.


*/
(function() {
	console.log('run 5k');
})();  // => returns run 5k.

















