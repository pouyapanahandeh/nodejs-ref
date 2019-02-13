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
	document.write(a - b)
}

secondFunction(5, 2);