// array include user 
// get the name out of array by find and use the function 

let arrOne = [
	{id: 1, name:"pooya"},
	{id: 2, name:"pari"},
	{id: 3, name:"masih"},
	{id: 4, name:"mohammad"}
	];
	
	let user = arrOne.find(item => item.id == 1);
	alert(user.name)
	
