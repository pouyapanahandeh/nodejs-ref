// conditional operation part 2

let sen = prompt('please enter the your age', '');
// let result = condition ? value1 : value2
// write all condition just in one line
let accessAllowed = (sen > 18) ? true : false;

alert(accessAllowed);

// multiple '?' 

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
	(age < 18) ? 'Hello!' :
	(age < 100) ? 'Greetings!' :
	'What an unusual age!';

alert( message );