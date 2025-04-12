class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}rohit`
    }
    set password(value){
        this._password = value
    }
}

const rohit = new User("r@rohit.ai", "123")
console.log(rohit.password);
console.log(rohit.email);