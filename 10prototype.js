// __proto__
// Object.getPrototypeOf()

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// Cat.prototype.voice = function() {
//   console.log(`Cat ${this.name} says meow`)
// }

// const cat = new Cat('Garf', 'red')

// cat.voice()

// console.log(Cat.prototype) //? { voice : [Function] }
// console.log(cat.__proto__ === Cat.prototype)//! эти 2 строчки- одно и то же
// console.log(cat.constructor) //? [Function: Cat]

//============================================================

function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Alex'

console.log('skin' in person)//? true
console.log(person.legs)//? 2
console.log(person.eyes)//? undefined

console.log(person.hasOwnproperty('name'))//? true

//!================== Object.create()
const proto = {year: 2019}
const myYear = Object.create(proto)

console.log(myYear.year)//? 2019

proto.year = 2200

console.log(myYear.year)//? 2200
// console.log(myYear.hasOwnproperty('year'))//? false
// console.log(myYear.__proto__ === proto)//? true