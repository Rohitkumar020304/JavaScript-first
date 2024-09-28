//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const myObjects = {
    name: "Rohit",
    "full name" : "Rohit kumar",
    age : 20,
    location : 'Bangalore',
    email : 'kumar@google.com',
    isLoggedIn : false,
    lastloginDay : ["Monday","friday"],
    [mySym] : "mykey1"

}

// console.log(myObjects.name)
// console.log(myObjects['age']) //use this [] method
// console.log(myObjects['full name'])
// console.log(myObjects['email'])
// console.log(myObjects['location'])
// console.log(myObjects['isLoggedIn'])
// console.log(myObjects['lastloginDay'])
// console.log(myObjects[mySym])

myObjects.email = "kumarrohit.google.com"
// Object.freeze(myObjects) // no further change can happen in objects. 
myObjects.email = "kumarrohit020304.google.com"
// console.log(myObjects)

myObjects.greeting = function(){
    console.log('Hello js user');
}
myObjects.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(myObjects.greeting())
console.log(myObjects.greeting2())



