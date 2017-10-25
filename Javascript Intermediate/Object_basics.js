var process = {
	fullname: "Eden Diaz",
	displayName : function() {
		console.log(this.fullname); // inside the function which is value to an obj prop, we refer to the object using 'this'
	}
}


process.displayName();


/*
create a constructor 
-it takes into account inheritance (properties and methods inheritance)
- this is JS effort to mimic OO programming
