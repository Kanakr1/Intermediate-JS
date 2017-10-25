/* Notes
- we are using the keyword prototype to add function to the Car object.




*/



function speed(miles ) {
	console.log(miles);
}



function Car (model, year) {
	this.newmodel = model; // creating properties on the fly
	this.year = year;

}

var bmw = new Car('335I', 2015); // 

/* method1

Car.prototype.speed = speed;

bmw.speed(100);


*/ 

// Method2 

Car.prototype.speed = function (miles) {
	console.log(miles);
}