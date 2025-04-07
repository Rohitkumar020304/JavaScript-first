const user = {
    username: "rohit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databse");
        // console.log(`Username: ${this.username}`)
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this    -----> implicit
}

const userOne = new User("rohit", 12, true);
const userTwo = new User("Chai or code", 12, true)
console.log(userOne.constructor);
// console.log(userTwo);