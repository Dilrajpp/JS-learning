const User = {
    _email: 'rajhai@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const saino = Object.create(User)
console.log(saino.email);