// Boolean function
function ourTrueOrFalse(isItTrue){
	if(isItTrue){
		return "yes its true"
	}
	
	return "no its false"
}

function trueOrFalse(wasThatTrue){
	if(wasThatTrue){
		return "yes it was"
	}
	
	return "no it was wrong"
}

document.write(trueOrFalse(true))

// numerin boolean function
function testEqual(val){
	if(val == 12){
		return "it's equal"
	}
	
	return "no, its not equal"
}

document.write("<br>" + testEqual(10))

/* 

strict equal sign

3 === 3 => true
3 === '3' => false

normal equal sign 

3 == 3 => true
3 == '3' => true ( because the operator change the type to number)

*/

function testVal(a, b){
	if( a >= 10 && a > b){
		return "a is greater than b and 10"
	}
	
	return "we face to small number"
}

document.write("<br>" + testVal(15, 5))

// logical or operation

function checkVal(a, b) {
	if( a > b || a > 0){
		return "a is greater than b"
	}
	
	return "b is greater than a"
}

document.write("<br>" + checkVal(5, 3))