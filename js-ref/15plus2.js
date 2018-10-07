// function expressions and arrows

//simple function

function sayHello(){
	alert('Hello ;-) ');
}

sayHello();

let sayHi = function() {
	alert('Hi againe ;=)');
}

sayHi();

// by this methon you can see the function codes
alert(sayHi);

function sayHiTwo() {
	alert("Hi Users");
}

let func = sayHiTwo();

// func do the exact same as function because we asign it to the function

func;       
sayHiTwo();

// callback function 
/*
function ask(question, yes, no) {
	if(confirm(question)) yes()
	else no();
}

function showOk(){
	alert("you agreed!");
}

function showCancel(){
	alert("you canceled the execution!");
}

ask("Do you agree?", showOk(),showCancel());
*/

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
);

