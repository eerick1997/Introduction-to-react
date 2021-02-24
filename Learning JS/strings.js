const str1 = "hello world"
//str2 is the same as str3
const str2 = 'hello world'
const str3 = `hello world`
console.log(str1)
console.log(str2)
console.log(str3)

console.log(str2 === str3)
console.log(str1 === str3)

const days = 12 * 30
//Ypu can append other variables    
const str4 = `Number of days in quarantine ${days}`

console.log(str4)