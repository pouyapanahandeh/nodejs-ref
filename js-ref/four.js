//To create a variable in JavaScript, we need to use the let keyword.

let message = 'Hello pooya';

document.write(message);

// first method
let user = 'John', age = 25, message = 'Hello';

// second method
let user = 'John';
let age = 25;
let message = 'Hello';

// third method
let user = 'John'
	, age = 25
	, message = 'Hello';
	
// we can copy from variables 
	
	let hello = 'Hello world!';

	let message;

	// copy 'Hello world' from hello into message
	message = hello;

	// now two variables hold the same data
	alert(hello); // Hello world!
	alert(message); // Hello world!