//else and else if

function checker(a, b){
	if(a > b){
		return "a is greater than b"
	} else{
		return "b is greater than a"
	}
}

document.write(checker(5, 7))

function checkerTwo(c, d) {
	if( c > d){
		return "c is greater than d"
	} else if (d > c) {
		return " d is greater than c"
	} else{
		return "undefined condition"
	}
}

document.write("<br>" + checkerTwo(5, 6))