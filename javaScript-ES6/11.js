// local var VS Global Var

// define a global variable
var outWear = "T-shirt"

function myOutfit(){
	// use global var and change the value
	var outWear = "sweater"
	return outWear;
}

// here in first print we call the function and we get sweater
document.write(myOutfit() + "<br>")

// here we access variable, and we will see the result of the global var
document.write(outWear + "<br>")


// return statement in JS

document.write("<br>" + "-----------------" + "<br>")

function minusSeven(num){
	return num - 7
}

document.write(minusSeven(14))

document.write("<br>" + "-----------------" + "<br>")

// stand in line

function nextInLine(arr, item) {
	
	arr.push(item)
	return arr.shift()

}

var testArr = [1,2,3,4,5]

// by JSON.stringify we print our array as a string
document.write("Before anything happen " + JSON.stringify(testArr) + "<br>")
// according the function we have, here by the push function we add 6 to our array
document.write(nextInLine(testArr, 6) + "<br>")
// now we print whole array after all function operation
document.write("After the function operation" + JSON.stringify(testArr) + "<br>")

document.write("<br>" + "-----------------" + "<br>")

// boolean function in js
function booleanfunc(){
	
	
	return false;

}

