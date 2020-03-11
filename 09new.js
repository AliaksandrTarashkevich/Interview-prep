function Cat(color, name) {
  this.color = color
  this.name = name
}



//! Ниже создание new через ES5
// function myNew(constructor, ...args) {
  //   const obj = {}
  //   Object.setPrototypeOf(obj, constructor.prototype)
  //   return constructor.apply(obj, args) || obj
  // }
  
  // const cat = myNew(Cat, 'black' , 'Garf')
  
  //=============================
  // const cat = new Cat('black', 'garf')