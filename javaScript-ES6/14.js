// switch in js

function switchStment(val){
	var answer = ""
	switch (val) {
		case 1:
			answer = "alpha"
			break;
		case 2:
			answer = "beta"
			break;
		default:
			answer = "answer not find"
			break;
	}
	
	return answer;
}

document.write(switchStment(2) + "<br>")

// multiple indentical option in switch

function multiSol(valTwo){
	
	var answerTwo = ""
	
	switch (valTwo) {
		case 1:
		case 2:
		case 3:
			answerTwo = "low"
			break;
		
		case 4:
		case 5:
		case 6:
			answerTwo = "medium"
			break;
		
		case 7:
		case 8:
		case 9:
			answerTwo = "high"
			break;
		default:
			answerTwo = "not in list"
			break;
	}
	
	return answerTwo;
}

document.write(multiSol(5) + "<br>")
document.write(multiSol(3) + "<br>")
document.write(multiSol(9) + "<br>")



