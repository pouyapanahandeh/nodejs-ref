// Defualt Values in JS

function showMessage(varOne, msg = "hey buddy") {
	alert(varOne + ' : ' + msg);
}

showMessage("pooya");

// returning value

function sum(a, b) {
	return a + b;
}	

let result = sum(5,1);
alert(result);

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm("please provide parents permission");
	}
	
	let age = prompt("How old are you?", 18);
	if(checkAge(age)){
		alert("Access Granted");
	} else{
		alert("Access Denied");
	}
}

checkAge();