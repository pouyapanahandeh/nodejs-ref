// symbol in javaScript
// symbol built to be unique, even we make many symbol with the same description it wont be equal.


let idOne = Symbol("ID");

// the "ID" is a description for the symbol variable which is id

let idTwo = Symbol("ID");

alert(idOne == idTwo); // will return false, because as we said symbols are unique

