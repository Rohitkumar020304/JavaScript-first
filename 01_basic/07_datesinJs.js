let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

let newDate = new Date(2024, 8, 26, 23,38)
// console.log(newDate.toDateString())
// console.log(newDate.toLocaleString())

let myCreatedDate = new Date("09-26-2024")
// console.log(myCreatedDate)

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let currentDate = new Date
console.log(currentDate)
console.log(currentDate.getDate())
console.log(currentDate.getDay())
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{
    dayPeriod :"long",
    weekday : "long"
}))

