
// класс
// Напиши класс Car с указанными свойствами и методами.


// class Car {
//     static getSpecs(car) {
//         return `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`;
//     };


// getSpecs(){}
//      constructor(){}
//      get price() {}
//      set price(value) {}
//      turnOn() {}
//      turnOff() {}
//      accelerate(value) {}
//      decelerate(value) {}
//      drive(hours) {}
//    }
    
//    const mustang = new Car({ maxSpeed: 200, price: 2000 });
//    mustang.turnOn();
//    mustang.accelerate(50);
//    mustang.drive(2);
   
//    // console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
//    mustang.decelerate(20);
//    mustang.drive(1);
//    mustang.turnOff();
   
//    // console.log(Car.getSpecs(mustang));
//    // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
//    // console.log(mustang.price); // 2000
//    mustang.price = 4000;
   // console.log(mustang.price); // 4000

// class Car {
  
//   static getSpecs({maxSpeed = 0, speed = 0, isOn = false, distance = 0, price = 0,} = car) {
//     return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
//   }

  
//   constructor({speed = 0, price, maxSpeed,isOn = false, distance = 0,} = {}){
//     console.log("this is constructor");
//     console.log(this);
//     this._price = price;
//     this.speed = speed;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;

//   }

//     get price() {
//     return this._price;
//   }

//  set price(value) {
//     this._price = value;
//   }
  
//   turnOn() {
//     if (!this.isOn) {
//       this.isOn = true;
//     }
//     console.log(this.isOn);

//   }

//   /*
//    * Метод, чтобы заглушить автомобиль
//    * Этот метод должен записывать 
//    * в свойство isOn значение false,
//    * и сбрасывать текущую скорость до 0
//    */
//   turnOff() {
//     if (this.isOn) {
//       this.speed = 0;
//     }
//     console.log(this.speed);
//   }

//   /*
//    * Этот метод должен добавлять 
//    * к свойству `speed` полученное
//    * значение, при условии, 
//    * что результирующая скорость
//    * не больше чем значение свойства `maxSpeed`
//    */

   
//   // Статический метод 'static getSpecs' должен возвращать строку со свойствами и значениями объекта согласно спецификации.
//   // Метод 'accelerate' должен добавлять к свойству 'speed' значение 'value'
//   // Метод 'accelerate' должен оставлять свойству 'speed' значение 'maxSpeed', если значение 'value' в сумме со значением 'speed' превышают значение 'maxSpeed'.



//   accelerate(value) {
//     if (this.speed < this.maxSpeed) {
//       this.speed += value;
//     } this.speed = this.maxSpeed;

//     console.log(this.speed);
//   }

//   // accelerate(value) {
//   //   if (this.speed + value >= this.maxSpeed) {
//   //     this.speed = this.maxSpeed;
//   //   }
//   //   console.log(this.speed);
//   // }

//   /*
//    * Этот метод должен отнимать 
//    * от свойства `speed` 
//    * полученное значение, при условии, 
//    * что результирующая скорость не меньше 0
//    */
//   decelerate(value) {
//     if ((this.speed - value) >= 0) {
//       this.speed -= value;
//     } else {this.speed = 0}
//   }
// //   decelerate(value) {
// //     if (this.speed > 0) {
// //     this.speed -= this.value;
// //   }
// //   console.log(this.speed);
// // }

// // decelerate(value) {
// //   if (this.speed + value >= 0) {
// //     this.speed = 0;
// //   }
// // console.log(this.speed);
// // }
// // Метод 'decelerate' должен оставлять свойству 'speed' значение '0', если значение 'value' в сумме со значением 'speed' превышают значение '0'.
//   /*
//    * Этот метод должен добавлять к свойству 
//    * `distance` пробег в километрах, 
//    * т.е. hours * speed,
//    * но только в том случае, 
//    * если машина заведена!
//    * Метод 'decelerate' должен уменьшать свойство 'speed' на значение 'value'
//    */
//   drive(hours) {
//     if (!this.isOn) {
//       this.distance += hours * this.speed;    }
//     console.log(hours)
//   }
// }

// // #### Пример 1.

// // ```js
// // class Guest {
// //   // Собственные свойства класса размещаем в конструкторе
// //   constructor(name, roomNumber) {
// //     /* параметр name не должен 
// //      *   совпадать с названием свойства
// //      *   но должен быть похож.
// //      *   Поэтому используют прием смены
// //      *   названия добавляя символ '_'.
// //      *   Хотя это может любой другой символ
// //      */
// //     this._name = name;
// //   }

// //   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
// //   get name() {
// //     return this._name;
// //   }

// //   set name(value) {
// //     this._name = value;
// //   }
// // }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));



class Car {
  static getSpecs(car) {
      return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    } // Write code under this line
  
  constructor({speed = 0, price, maxSpeed,isOn = false, distance = 0,} = {}){
    console.log("this is constructor");
    console.log(this);
    this._price = price;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
   get price() {
    return this._price;
  }
set price(value) {
    this._price = value;
  }
 turnOn() {
    if (!this.isOn) {
      this.isOn = true;
    }
  }  
  
turnOff() {
    if (this.isOn) {
      this.speed = 0;
    }
    console.log(this.speed);
  }
  
accelerate(value) {
  this.speed += value;
    
  if (this.speed > this.maxSpeed) {
	this.speed = this.maxSpeed    
  }
}
  
  
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    } else {
      this.speed = 0};
  }
 drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;   
    }
    console.log(hours)
  }}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000

























