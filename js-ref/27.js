// delete Element() from an Array()

let arrOne = ["I","go","home"];

// delete means delete the value not the key
delete arrOne[0];

document.write(arrOne);

document.write("<br>" + arrOne.length);

// new arreay and delete the Element() by splice

let arrTwo = ["hey","you","look","so","cute"];

document.write("size of array before deleting the element of array" + "<br>" + arrTwo.length)

// it means start from index 1 and just delete one element
arrTwo.splice(1, 1)

document.write("size of array after deleting an element from array" + "<br>" + arrTwo.length)

let arrThree = ["i","can","do","everything"]

document.write("<br>" + arrThree.slice(0,3))

