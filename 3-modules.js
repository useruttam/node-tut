// Modules

// It is very difficult to write the whole code in one file so
// we need to write the code in modules especially in complex apps

//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-Utils')
const data  = require('./6-alternative-flavours')
require('./7-mind-grenade')
// console.log(data)
// // sayHi('susan')
// sayHi(names.peter)
// sayHi(names.john)

// console.log(names)