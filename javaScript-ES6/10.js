//function


// simple function 

function firstFunction(){
	document.write("wasup bro" + "<br>")
}

for(var i = 0 ; i <= 3 ; i++){

	firstFunction();

}

document.write("<br>")

// passing element in array

function secondFunction(a,b){
	document.write(a - b + "<br>")
}

secondFunction(5, 2);

// global variable in JS

var myGlobal = 10;

function fun1() {
	// if we do not write var, automaticlly it becomes globally
	secondGlobal = 5
	// if you write like that maybe you get error specially in jetBrains, try it with chrome dev console
}

function fun2(){
	var outPut = ""
	if(typeof myGlobal != "undefined"){
		outPut += "myGlobal is " + myGlobal
		
	}
	if(typeof secondGlobal != "undefined"){
		outPut += " scond global variable " + secondGlobal
		document.write(outPut + "<br>")
	}
	
}

fun1();
fun2();

document.write("<br>" + "---------------" + "<br>")

//local variable 

function myLocalVar(){
	 var localVar = 5
	document.write(5)
}

myLocalVar();

// you will get error becuase you try to access local var outside of the local area which is a myLocalVar function
document.write(localVar)