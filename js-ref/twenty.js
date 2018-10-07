// constructor in JS
// constructor are regulary is function but with two differents: 1 - start with capital letter, 2 - execute with new (like instance in java.


function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("pooya");

document.write(user.name);
document.write("<br>" + user.isAdmin);


