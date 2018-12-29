"use strict"
// arrow function in js 

/*
	var sample = function samples(a){
		return a;
	}
	
	in ES6 
	
	the first a is the a u see in () in es5 and the second a, is the a you see in return part
	
	let sample = a => a;


*/
//ES5

var multpleOne = function mltplOne(x, y){
	return x * y;
}

alert(multpleOne(2, 4));

//ES6

let multpleTwo = (a, b) => { return a * b}

alert(multpleTwo(2, 5))

//ES5 string split to array of words

var spliterOne = function one(words){
	return words.split('');
}

document.write(spliterOne("pooya"));


//ES6 

let spliterTwo = wordsTwo => wordsTwo.split('')

	document.write("<br/>" + spliterTwo("pooya"))
	
// ES5 

var docLogEs5 = function docLog5() {
	console.log(document);
}

docLogEs5();

// ES6

let docLogEs6 = () => {console.log(document)}

	docLogEs6()
	
// ES5 

var setIdforName5 = function setIdName(id, name) {
	return{
		id: id,
		name: name		
	};
};

document.write("<br/>" + setIdforName5(1, "pooya"));

//ES6 in next part 
	
