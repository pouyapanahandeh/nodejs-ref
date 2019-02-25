// profile lookup

var contacts = [
	{
		"firstName" : "pooya",
		"lastName" : "panahi",
		"id" : "212112"
	},
	{
		"firstName" : "parham",
		"lastName" : "panahijat",
		"id" : "212156"
	},
	{
		"firstName" : "pashmak",
		"lastName" : "panahim",
		"id" : "217812"
	},
	{
		"firstName" : "pashmam",
		"lastName" : "panahesh",
		"id" : "212092"
	}
];

function lookUpProfile(name, prob) {
	for (var counter = 0 ; counter < contacts.length ; counter++ ){
		if (contacts[counter].firstName === name) {
			return contacts[counter][prob]
		}
	}
	
	return "no such a contact"
}

var data = lookUpProfile("pooya", "id")

document.write(data)