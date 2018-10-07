// Conditional operators: if, '?'

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

// the else condition 

let sal = prompt('what years we are in?','');
if(sal == 2015){
	alert('it\'s wrong.');
} else {
	alert('How can you be so wrong');
}

// else if in js

let emsal = prompt('what is the year we are in', '');

if (emsal < 2017){
	alert('change your mind!!!');
} else if (emsal < 2015) {
	alert('come on!!!');
} else{
	alert(' :( ');
}

// Ternary operator ‘?’

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
	alert('you can enter the website.');
	accessAllowed = true;
} else {
	alert('you can not enter the website.');
	accessAllowed = false;
}

alert(accessAllowed);