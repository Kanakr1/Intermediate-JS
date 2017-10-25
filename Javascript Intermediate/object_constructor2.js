/*
Another way of constructing an object literal
- bmw is the new instance of the Car object which points to the same Car object.


*/

/*
//code block 1
function Car() {
	var model, year, runs ;
	this.model = '335I'
	this.runs = function() {
		console.log("this runs fast");
	}
}


bmw = new Car; // shoud use var before bmw; although will not throw error without it.
console.log(bmw.model);
console.log(bmw.runs());
*/


/*
another way of creating object is below 
- we can access the object from outside, everytime we instantiate the object(here the constructor function which is an object)
- this.newmodel are the properties that we have created on the fly on the Car object
- this method makes it flexible to pass different values to the Car by creating new instances and passing the values to it.
- refer to prototype in the next slide for extending the functionality of the object
*/


function Car (model, year) {
	this.newmodel = model; // creating properties on the fly
	this.year = year;

}

var bmw = new Car('335I', 2015); // 


console.log(bmw.newmodel); // => '335I'


mercedes = new Car('250', 2017);

console.log(mercedes.year); // => 2017










