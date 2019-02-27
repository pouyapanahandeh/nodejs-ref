//arrow function in js

var magic = function () {
	return new Date()
}

document.write(magic() + "<br>")

// now we change it to arrow function

var magic2 =  () => new Date()

document.write(magic2() + "<br>")


// normal function with parameters function 

var concatOne = function(arrOne, arrTwo){
	return arrOne.concat(arrTwo)
}

document.write([1,2,3], [,4,5,6] + "<br>")

// now we change it to arrow function 

var concatTwo = (arOne, arTwo) => arOne.concat(arTwo)

document.write([10,11,12], [,13,14,15] + "<br>")

document.write(concatTwo([10,11,12], [13,14,15] + "<br>")) 

// as you can see both method is work, but with second method we do not need to do any modification