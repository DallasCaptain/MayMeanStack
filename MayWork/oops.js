//es5 person class
function personconstructor(name, age){
    // console.log('pc ran')
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old today`)
    }
}

let nick = new personconstructor('Nick',111)
console.log(nick)
// nick.greet()

// console.log(nick.greet)

//es6



class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old today`)
    }
}

let bob = new Person('Bob', 22)
console.log(bob)
bob.greet()


class MailMan extends Person{
    constructor(name,age,pay){
        super(name,age)
        this._pay = pay
    }
    greet(){
        console.log('Hello Speedy Delivery Here')
        super.greet()
    }
    getPaid(){
        console.log(`Here is your pay of ${this._pay}`)
    }

    get pay(){
        return this._pay 
    }
    set pay(pay){
        if (pay > this._pay*10){
            console.log('raise is to large')
        }
        else{
            this._pay = pay +10
        }
        
    }


}

carl = new MailMan('Carl', 78, 1)
console.log(carl)
carl.greet()
carl.pay = 10
carl.getPaid()
console.log(carl.pay)
// bob can't get paid!!!
// bob.getPaid()
carl.constructor.name
console.log(carl.constructor.name)
function dosomething(target){
    
        if (target instanceof MailMan ){
        console.log('we did it') 
    
        }else console.log('no we didnt')
}
try{
    dosomething(zack)
}
catch(err){
        console.log('not init')
    }
