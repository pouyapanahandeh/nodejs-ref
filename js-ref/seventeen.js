// javaScript tutorial

// Garbage Collection

// creating object
let user = {
	name : "pooya",
	age : 26	
};

// result will be [object Object], here will see the type of user
document.write(user);

document.write("<br>"+user.name);

user = null;

delete user.name;
delete user.age;

document.write(user);

