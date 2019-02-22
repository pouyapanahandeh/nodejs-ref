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
document.write(acsTwo)