// local var VS Global Var

// define a global variable
var outWear = "T-shirt"

function myOutfit(){
	// use global var and change the value
	var outWear = "sweater"
	return outWear;
}

// here in first print we call the function and we get sweater
document.write(myOutfit())

// here we access variable, and we will see the result of the global var
document.write(outWear)