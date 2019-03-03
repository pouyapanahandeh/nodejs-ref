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

document.write("<br>" + "----------------" + "<br>")

// map in js

// make array of company names

const companyNameArray = companies.map(function(j){
	return j.name
})

document.write(companyNameArray)

document.write("<br>" + "----------------" + "<br>")

// array of company with start date and end date

const companyInfo = companies.map(function(index){
	return `${index.name} [${index.end} - ${index.start}]`;
});

document.write(companyInfo)

document.write("<br>" + "----------------" + "<br>")

// gets the name and category of companies

const companyInforArrow = companies.map((indexArrow) => `${indexArrow.name} - ${indexArrow.cat}`)

document.write(companyInforArrow)

document.write("<br>" + "----------------" + "<br>")

