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