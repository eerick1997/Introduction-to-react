const info = {date: "today", day: 23}
console.log(info)
//I don't know what's the attribute something 
console.log(info.something)

const info2 = {date: "today", day: null}
//Expected day attribute but doesn't exits
console.log(info2.day)