// filter in js 

let user = [
	{id:1 , name: "pooya"},
	{id:2 , name: "pooba"},
	{id:3 , name: "poora"}
];

let someUser = user.filter(item => item.id < 3)
	alert(someUser.length)