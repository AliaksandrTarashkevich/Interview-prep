// const person = {
//   surname : 'Stark',
//   knows: function (what,name) {
//     console.log(`You know ${what}, ${name} ${this.surname}`)
//   }
// }

// const john = { surname : 'Snow' }

// person.knows('everything' ,'Bran')
// person.knows.call(john, 'nothing', 'John')
// person.knows.apply(john, ['nothing', 'John'])
// person.knows.call(john, ...['nothing', 'John']) // ES6 feature
// person.knows.bind(john, 'nothing', 'John')() //! не вызывает ф-цию а возвращает новую

//=======================================================

// function Person(name, age) {
//   this.name = name
//   this.age = age 

//   console.log(this)
// }

// const elena = new Person('Elena', 20)

//=======================================================
//? EXPLICIT явный
// function logThis() {
//   console.log(this)
// }

// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
 //=======================================================
 //? IMPLICIT неявный
const animal = {
  legs: 4,
  logThis : function() {
    console.log(this)
  }
}
animal.logThis()
//=============================================
//? Arrow functions
//! Стрелочные ф-ции не создают собственный контекст

function Cat(color) {
  this.color = color
  console.log("This", this)
  ;( () => console.log('Arrow this', this) )()
}

new Cat('red')