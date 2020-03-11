// function sayHelloTo(name) {
//   const message = 'Whazaaaa ' + name
  
//   return function() {
//     console.log(message)
//   }
// } //! Замыкание - когда ф-ция имеет доступ до вышестоящего скоупа(переменных)

// const helloToElena = sayHelloTo('Elena')
// helloToElena()

//==========================================================
// function createFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function() {
//       console.log(fw.join(' '))
//     },
//     add: function(framework) {
//       fw.push(framework)
//     }
//   }
// }

// const manager = createFrameworkManager()
// manager.print();
// manager.add('VueJS');
// manager.print();
//===========================================================

//setTimeOut

// const fib = [1, 2, 3, 5, 8, 13]
// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function() {
//     console.log(`fib[${i}] = ${fib[i]}`)
//   },1500)
// } //! Good one

const fib = [1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
  })(i)
}

