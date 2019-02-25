// accessing the nested array

var myPlants = [
	{
	
	types : "flowers",
	list : [
		"rose",
		"tulip",
		"dandelion"
		]	
	},
	{
		type : "trees",
		list : [
			"fir",
			"pine",
			"brich"
		]
	}
];

document.write(myPlants[1].list[1] + "<br>")

// itterate with while loop

var myArray = [];

var counter = 0

while (counter < 5) {
	myArray.push(counter)
	counter++
}

document.write(myArray + "<br>")

// iterarte to an array with for loop

var arrOne = [1,2,3,4,5,6]
var total = 0

for(counter = 0 ; counter < arrOne.length ; counter++){
	total += arrOne[counter]
}

document.write(total + "<br>")