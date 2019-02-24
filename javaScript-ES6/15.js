// object in js 

var objTest = {
	"name": "pooya",
	"lastName": "panahandeh",
	"age": 26,
	"friends": ["mahdi","amir","mohammad"]
};

var acsOne = objTest.name;
document.write(acsOne + "<br>")

// or

document.write(objTest.lastName + "<br>")

var objTestTwo = {
	"the list": "list of people",
	"a guy": "get the list"
};

var acsTwo = objTestTwo["the list"]
document.write(acsTwo + "<br>")

// change the value of object 

var objectThree = {
	"firstName" : "pooya",
	"lastName" : "amirzadeh",
	"age" : 26	
};

document.write(objectThree.firstName + "<br>")

objectThree.firstName = "Hassan"

document.write(objectThree.firstName + "<br>")

// print the key of object 

var objectFour = {
	
	objectName : "obije",
	objectId : 2662,
	objectString : "Gstring"	
};

// by using the keys keyword you can print out the keys of object

const keys = Object.keys(objectFour)

document.write(keys + "<br>")

// add new properties to the object
// using dot notation method

var objFive = {
	key1: "name",
	key2: "primaryKey",
	key3: "id"
};

objFive.key4 = "image"

document.write(JSON.stringify(objFive) + "<br>")

// using the bracket notation

objFive["key5"] = "date"

document.write(JSON.stringify(objFive) + "<br>")

// assign method by using Object keyword 2017

Object.assign(objFive, {key6: "true"})

document.write(JSON.stringify(objFive) + "<br>")

// adding object by make another one and merge it

var pair = {key7: "male"}
objFive = {...objFive, ...pair}

document.write(JSON.stringify(objFive) + "<br>")

// delete Element from object

delete objFive.key1

document.write(JSON.stringify(objFive) + "<br>")
