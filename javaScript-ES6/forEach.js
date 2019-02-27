// map in javaScript

const companies = [
	{name: "blueweb360", cat: "internet", start: 2014, end: 2015},
	{name: "Himo", cat: "internet", start: 2015, end: 2016},
	{name: "blue", cat: "IOT", start: 2014, end: 2017},
	{name: "waac", cat: "Tech", start: 2016, end: 2019}
	
];

const age = [20,23,25,26]

// for loop 

for (let i = 0 ; i < companies.length ; i++) {
	document.write(JSON.stringify( companies[i]) + "<br>")
}

document.write("----------------------------------------")

// forEach

companies.forEach(function (company) {
	document.write(JSON.stringify(company) + "<br>")
})

document.write("----------------------------------------" + "<br>")

// just print out the special variable

companies.forEach(function (company) {								// here instead writing company you can write index or anything else
	document.write(JSON.stringify(company.name) + "<br>")
})
