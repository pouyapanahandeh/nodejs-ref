// Object in JS

// assign value in object immediatley

let user = {
	name : "Bahar",
	age : 25
};

// by following command we see the type of the user
document.write(user);

// by following command we can print the objects

alert(user.name);
alert(user.age);

// we can assign new value to our object which is user 
// we can assign any type to object, following one is boolean
user.isAdmin = true;

alert(user.isAdmin);

// for deleting the property

delete user.age;

// result of the followinf command will be undefined just because 
alert(user.age);

let objectTwo = {
	name : "Hossein",
	age : 54,
	"Hossein is legend" : true
};


