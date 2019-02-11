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

// 
