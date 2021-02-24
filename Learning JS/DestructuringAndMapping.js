const numbers = [1, 2, 3, 4, 5]

//ES5
var point = [3, 5]
var x = point[0]
var y = point[1]
console.log(x, y)

//ES6
const [x2, y2] = [3, 5]
console.log(x2, y2)

const doubleIt = x => 2 * x

//Creates a new array with new data
console.log(numbers.map(doubleIt))

//Creates a new array but filtering the data
console.log(numbers.filter(x => (x % 2) === 0))

//We can merge both the order doesn't matter
console.log(numbers.map(x => x * 3).filter(x => (x % 2) === 0))
