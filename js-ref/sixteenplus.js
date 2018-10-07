// Square brackets

let user = {};

// set 

user ["like birds"] = true;

// get

document.write(user["like birds"]);

// delete

delete user["likes bird"];

let userOne = {
	name : "pooya",
	age : 26
};

let key = prompt("what you want to know about user?", "name");

alert(userOne[key]);

// computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple );

// existence check

// true means "no such property"

let userTwo = {};

alert( userTwo.noSuchProperty === undefined );