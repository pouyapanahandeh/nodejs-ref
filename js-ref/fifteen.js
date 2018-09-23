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