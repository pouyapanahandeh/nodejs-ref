//Function Expression vs Function Declaration

//Function Declaration

function sum(a, b) {
	return a + b;
}

alert(sum(9, 3));

//Function Expression

let sumUp = function(a, b){
	return a + b;
}

alert(sumUp(2, 2));

/* why function declaration, because it's useable in whole code */

// Arrow function is shorter way of expression function

let sumUping = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
	return a + b;
};
*/

alert( sumUping(1, 2) );

let double = n => n * 2;
alert(double(3));

// Define function by arrow method

let sayHi = () => alert("Hello!");

sayHi();

// Arrow functions can be used in the same way as Function Expressions

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
	() => alert('Hello') :
	() => alert("Greetings!");

welcome(); 

