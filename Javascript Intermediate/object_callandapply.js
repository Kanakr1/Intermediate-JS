/*

Call and apply gives us more control of this argument. We can control the value of this as
 we dont want it to point to the global object when we are working with a specific object
- IMP : we will be able to invoke functions in a slightly different way
- call method passes one value
- apply method passes an array
- we can define the value of this argument



*/

/*
var run = function() {
	console.log(this);
}

run(); // => Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

// here we get window object, with the call and apply we can solve this issue.
*/


var run = function(speed) {
	console.log(this);
	console.log(speed);
	console.log(this.firstSpeed); // => 100 miles/hr
}


var speedUpgrade = {
	firstSpeed : '100 miles/hr',
	secondSpeed : '50 miles/hr'
};

// invoking the run function in a different way using call.
run.call(speedUpgrade); // => the global object is changed ; it becomes {firstSpeed: "100 miles/hr", secondSpeed: "50 miles/hr"}
						// => speed is undefined as we are not passing any value to it.
run.call(speedUpgrade, speedUpgrade.secondSpeed); 
// this is the syntax of .call (thisScope, arg1, arg2, ...), so we are passing a value to speed as the second parameter.


// we can also do apply and see what happens

//run.apply(speedUpgrade, speedUpgrade.secondSpeed); 
 // throws an error => Createlistfrom array like object on non-object
 // its because apply takes array as the second parameter 

run.apply(speedUpgrade, ['500 miles/hr'])  // => speed = 500miles/hr in line 26.
// apply(thisScope, args)-> object. Call the function/method, optionally settting a new scope 
// for this and passing in parameters via an array.









