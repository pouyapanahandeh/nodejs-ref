const numbers = [1, -1, 2, 3]

const positiveArray = numbers.filter(function (value) {
	return value >= 0
})

console.log(positiveArray)