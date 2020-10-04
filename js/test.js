



const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);






const employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage() {
      return this.baseSalary + this.overtime * this.rate;
    },
  };
  
  employee.getWage();
  



  
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}


// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//   };
  
//   const hotel = new Hotel('Resort Hotel', 5, 100);
//   console.log(hotel);
//   // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
  
//   const motel = new Hotel('Sunlight Motel', 4, 300);
//   console.log(motel);
  // Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}
  
//   const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;
  
//     this.greet = function(guestName) {
//       console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//     };
  
//     this.addGuests = function(amount) {
//       this.guestCount += amount;
//     };
  
//     this.removeGuests = function(amount) {
//       this.guestCount -= amount;
//     };
//   };
  
//   const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
//   console.log(hotel);
//   // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
//   hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
//   hotel.addGuests(50);
//   hotel.removeGuests(50);
  



  const mango = {
    name: 'Mango',
    sales: 5,
    sell(product) {
      this.sales += 1;
      return `Manager ${this.name} sold ${product}.`;
    },
  };
  
  console.log(mango.sales); // 5
  console.log(mango.sell('TV')); // Manager Mango sold TV
  console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
  console.log(mango.sales); // 7
  
  const poly = {
    name: 'Poly',
    sales: 10,
    sell(product) {
      this.sales += 1;
      return `Manager ${this.name} sold ${product}.`;
    },
  };
  
  console.log(poly.sales); // 10
  console.log(poly.sell('TV')); // Manager Poly sold TV
  console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
  console.log(poly.sales); // 12
  



//   const animal = { eats: true };
//   const dog = { barks: true };
  
//   dog.__proto__ = animal;
  
//   // В dog можно найти оба свойства
//   console.log(dog.barks); // true
//   console.log(dog.eats); // true

  

  const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key); // barks
}





















