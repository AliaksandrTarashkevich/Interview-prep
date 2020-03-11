let a = [1,2,3]
let b = a
b.push(4)

console.log('a', a) // 1,2,3,4
console.log('b', b) // 1,2,3,4

//
let a = [1, 2, 3]
let b = a.concat()
b.push(4)

console.log('a', a) // 1,2,3
console.log('b', b) // 1,2,3,4