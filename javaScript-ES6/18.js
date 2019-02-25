// parsing in JS

// parse to integer

function convertToInteger(str){
	return parseInt(str)
}

document.write(convertToInteger("52") + "<br>")

// parseInt function with base 

function converter(str) {
	return parseInt(str, 2)
}

document.write(converter("10011"))