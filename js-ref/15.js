// function in javaScript

function showMessage() {
	alert("Hey, you are perfect");
}

// now we need to call function

showMessage();

//Having variable inside function

function errorMessage() {
	let messageOne= "Hello world, it's me pooya";
	alert(messageOne);
}

errorMessage();

// outer variable(global variable)

let userName = "pooya";

function messageHandling() {
	let message = "It's me " + userName;
	alert(message);
}

messageHandling();

// passing parameter in function

function messageTwo(varOne, varTwo){
	alert(from + ' : ' + text);
}

messageTwo('pooya', 'poori');

//function always make copy of data

function messageThree(varThree, varFour) {
	
	varThree = " / " + varThree + " / ";

}

let varThree = 'pooya';

alert(varThree);
messageThree(varThree, 'Hello');