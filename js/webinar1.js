

// const objC = {
//     z: 5,
// };
// const objB = Object.create(objC);
// objB.y = 2;

// console.log(objC);
// console.log(objB);

// console.log(objB.y);
// console.log(objB.z);


// const objA = Object.create(objB);
// objA.x = 7;
// objA.z = 4;


// console.log(objA);

// console.log(objA.hasOwnProperty('y'));



// const Car = function (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello:');

// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car('bmw', 'F3', '10 000');
// console.log(myCar);



// const myCar2 = new Car('audi', 'A3', '87 000');
// console.log(myCar2);
// myCar.sayHi();
// myCar.changePrice(4222222);


// const User = ({email, password} = {}) {
//      this.email = email;
//     this.password = password;
// };
// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail
// };

// const mango = new User ({email: 'ma@gmail.com', password: 1111});

// console.log(mango);



class Car1 { 

    static AAA = 'aaa';
        #test = 'test';
    constructor ({brand, model, price} = {}){
        console.log('Constructor is acting');
        console.log(this);

        this.brand = brand;
        this.model = model;
        this._price = price;
}
 get price(){
     return this._price;
 }
  set price(newPrice) {
    this._price = newPrice;
}
  
//     changePrice (newPrice) {
//     this.price = newPrice;
// }
    updateModel(newModel) {
    this.model = newModel;
}
}
 console.dir(Car1);


 const myCar = new Car1({brand:'bmw', model: 'F3', price: '10 000'});

 console.log(Object.getPrototypeOf(myCar) === Car1.prototype);
// console.log(myCar.prototype === Car1.prototype);

console.log(myCar);

console.log(myCar.price);

myCar.price = 30000;
console.log(myCar);


class Hero {
    constructor(name = 'hero', xp = 0) {
        this.name = name;
        this.xp = xp;
    }
    gainXp(amount){
        console.log(`${name} gets ${amount} experience` );
        this.xp +=amount
    }
}


class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);

        this.weapon = weapon;
    }
}

const badGuy = new Warrior('badGuy', 5454, 'idontknow');
console.log(badGuy);

// console.dir(Warrior);
badGuy.gainXp(25555555);
console.log(Object.getPrototypeOf(badGuy)===Warrior.prototype);














