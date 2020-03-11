// ТИПЫ ДАННЫХ

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'JS')
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol())
// //!!!! typeof null  is object

//=================================================================
// ПРИВЕДЕНИЕ ТИПОВ

// let language = 'JS';
// if (language) {
//   console.log('The best language is ' + language);
// }

//! falsy - '', null, undefinded, NaN, 0, false

//=======================================================================
//СТРОКИ И ЧИСЛА

// console.log(1 + '2') //12
// console.log('' + 1 + 0) //10
// console.log('' - 1 + 0)  // -2
// console.log('3' * '8') //24
// console.log(4 + 10 + 'px') // 14px - потому что сначала стоит математич. выраженеие
// console.log('px' + 5 + 10) // px 510
// console.log('42' - 40) // 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // 2
// console.log(undefined + 2)// Nan

//======================================================
// == vs ===
// console.log(2 == '2') //true
// console.log(2 === '2') //false
// console.log('2' === 2) // false

// let x = '5';
// let y = 5;
// console.log(x==y)//true
// console.log(x===y)//false
// console.log(y==x)//true
// console.log(y===x)//false

// console.log(undefined == null)// true
// console.log(undefined === null)// false

// console.log('0' == false) // true

//!!====
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false
