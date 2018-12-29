//ES6 The only caveat is that the body needs to be wrapped in parentheses, in order to distinguish between a block and an object
let setIdforName6 = (id, name) => ({id: id, name: name})

		console.log(setIdforName6(5, "panahandeh"))

// Object Literal Syntax

//ES5 

var newArray = [
	{name: 'pooya', price: 123456789},
	{name: 'Bahar', price: 987654321},
	{name: 'bozorgmehr', price: 678345129}
];

var prices = newArray.map(function(peoplePrice) {
	return peoplePrice.price;
});

document.write(prices);

