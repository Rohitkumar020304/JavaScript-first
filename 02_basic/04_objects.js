const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2} //*** 
console.log(obj3)

const tinderUser = {
    id : "123xyz",
    name : "suraj", 
    isLoggedIn : false
}

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLogged"))



const course = {
    name : 'javascript',
    fee : 999,
    courseInstructor : 'Hitesh'
}

const   {courseInstructor : Instuctor} = course
console.log(Instuctor)

[
    {},
    {},
    {}
]

