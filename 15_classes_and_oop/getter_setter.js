class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dilraj`
    }

    set password(value){
        this._password = value
    }
}

const dilraj = new User("rasymbol.com", "abcd")
console.log(dilraj.email);
