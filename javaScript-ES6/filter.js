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

document.write(ableToDrink + "<br>")

const companies = [
	{name: "blueweb360", cat: "internet", start: 2013, end: 2014},
	{name: "Himo", cat: "internet", start: 2015, end: 2016},
	{name: "blue", cat: "IOT", start: 2014, end: 2017},
	{name: "waac", cat: "Tech", start: 2016, end: 2019}
	
];

// get the name of company which has a cat as internet

const retail = companies.filter(iterator => iterator.cat == "internet")

document.write(JSON.stringify(retail) + "<br>")

// getting the company row which have start or end year == 2014

const startEnd = companies.filter(indexing => indexing.start == 2014 || indexing.end == 2014)

document.write(JSON.stringify(startEnd) + "<br>")

// getting the information of company which last atleast for one year

const lastOneYear = companies.filter(company => company.end - company.start > 1)

document.write(JSON.stringify(lastOneYear) + "<br>")



