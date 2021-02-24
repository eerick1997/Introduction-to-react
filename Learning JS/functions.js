function sayHiOldStyle(name) {
    return "Hello " + name;
}

var sayHiAnonimousFunction = function(name) {
    return "Hello " + name
}

const sayHiModernJS = (name) => {
    return "Hello " + name
}

console.log(sayHiOldStyle(`Erick`))
console.log(sayHiAnonimousFunction(`Erick`))
console.log(sayHiModernJS(`Erick`))

//If we want to use POO avoid to use the third form of functions

//This doesn't work
const person = {
    age: 23,
    sayData: () => {
        return "Hello my age is: " + this.age
    }
}

const person2 = {
    age: 23,
    sayData: function() {
        return "Hello my age is: " + this.age
    }
}

console.log(person.sayData())
console.log(person2.sayData())

//Some advantages of the third form:
//If you only have one parameter
const sayHi = name => "Hello my name is " + name
console.log(sayHi(`Erick`))

//You can use arrays of functions
const maths = [null, null]
maths[0] = (x, y) => x + y
maths[1] = (x, y) => x * y

console.log(maths[0](2, 5))
console.log(maths[1](2, 5))