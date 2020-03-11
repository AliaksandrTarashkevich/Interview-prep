//?================== LET
// let a = 'Variable a'
// let b = 'Variable b'

// //!Ниже Block Scope
// {
//   a = 'New Variable A'
//   let b = 'Local Variable B'//доступна только в рамках локал скоупа
//   console.log('Scope A ', a)
//   console.log('Scope B ', b)
// }

//?================= CONST
const PORT = 8080
// PORT = 2000 //!err
const array = ['JavaScript', 'is', 'awesome']
array.push('lul')
array[0] = 'JS'
console.log(array) // returns 4 elements, JS replaces JavaScript

const obj = {}
obj.name = 'Alex';
obj.age = 22;

console.log(obj) // Alex 22
obj.age = 23; // Alex 23