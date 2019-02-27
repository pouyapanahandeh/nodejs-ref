//filter in js

const ages = [12,54,63,82,24,22,33,34,42,55]

// traditional way to find people whom allowed to drink

let canDrink = []

for (let counter = 0 ; counter < ages.length ; counter++) {
	if(ages[counter] > 21){
		canDrink.push(ages[counter])
	}
}

document.write(canDrink + "<br>")

// instead old method we can use filter + arrow function 

// use filter with old style function
const allowed = ages.filter(function (index) {
	if(index > 21){
		return true
	}
})

document.write(allowed + "<br>")

// now we can make it even shorter with arrow function, here we use age for indexing in our array

const ableToDrink = ages.filter(age => age >= 21)

document.write(ableToDrink)