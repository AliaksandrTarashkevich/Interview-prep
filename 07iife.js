//Immediate Invoked Function Expression
let result = []
// for (var i = 0; i < 5; i++) {
//   result.push(function() {
//     console.log(i)
//   })
// }

// result[2]() // returns 5

for (let i = 0; i < 5; i++) {
  (function () {
    var j = i
    result.push( function() {console.log(j)})
  })()
}
result[2]()
