// array in js

var arrayOne = ["pooya", 26]

document.write(arrayOne)

// nested array

var nestedArray = [["pooya", 26], ["Naz", 27]]

document.write("<br>" + nestedArray)

// access the array Element

var el = document.write("<br>" + nestedArray[0])

var secondArray = [1,2,3,4,5,6,7]

document.write("<br>" + secondArray[0])

document.write("<br>" + secondArray[secondArray.length - 1])

// modify element in array

secondArray[0] = 13

document.write("<br>" + secondArray)

// accessing element in multi dimisional array

var multiArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 13, 14]]

// to access first element in array which is in array we have to use two indexing
// first [0] here get the first array which is inside the another array
var myData = multiArray [0][0] // here we access 1

document.write("<br>" + myData)

myData = multiArray[2][1]

document.write("<br>" + myData)

// add element in array with push

var newArr = [1,2,3,4,5]

newArr.push([6,7,8])

document.write("<br>" + newArr)

// pop function to delete the last element from array

var arrTwo = [2,4,6,8]

arrTwo.pop()

document.write( "<br>" + arrTwo)

// shift function is same as pop but delete from first

var shiftingArray = ["pooya","noway","backup","cardiB"]

shiftingArray.shift();

document.write("<br>" + shiftingArray)

var unshiftArray = ["mamad","young","bro"]

//unshift add element in begining of array

unshiftArray.unshift("mySoul")

document.write( "<br>" + unshiftArray)