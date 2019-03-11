let map = new Map() // create the map
//.     key.  object
map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')

// also we can chain the set method and have it like this
/*


map.set('1', 'str1')
	.set(1, 'num1')
	.set(true, 'bool1')


*/


// key are not convert to String, but in object key are convert to string
// map keeps the types so these these two are different

alert(map.get('1'))
alert(map.get(1))

// check the size of map 

document.write("The size of map: " + map.size + "<br>")

// map can use object as key
//. object
let John = {name: "John"}

let visitCounterMap = new Map()

visitCounterMap.set(John, 123)

document.write(visitCounterMap.get(John) + "<br>")

// we can pass array in map

let map = new Map([
	['1', 'str1'],
	[1,   'num1'],
	[true, 'boo']
])

