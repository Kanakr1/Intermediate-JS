/*
Lets create a object literal called Car
- this is a constructor as this is constructing an object
- the way this works is ; with the keyword new we can create a new instance of the object.
- what JS is doing is, its creating an object using a function, here its the constructor function.
- so the function literal/constructor becomes an object
- just as we add prop to an object, we can add properties here to the bmw object
- inside the Car object we refer to the object with keyword 'this'.
- if we console.log(this) inside of an object literal, it will refer to the global object which is the window



*/

var Car = function() {
	var model, year;
	return console.log(this); // will return Car{} which will have the prop model: 335I as we added it to the new instance 
}


var bmw = new Car
bmw.model = '335I';
//console.log(bmw.model);