const person = {day : "today", weight: 80, money: 20.50}
//Getting data in the old way
//const weight = person.weight
//const money = person.money
//Getting data in the new way
const {weight, money} = person
console.log(weight, money)
