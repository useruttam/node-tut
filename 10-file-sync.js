const {readFileSync , writeFileSync, read, readFile} = require('fs')

console.log('start');
const first  = readFileSync('./contents/first.txt')
const second  = readFileSync('./contents/second.txt')

console.log(first + " " + second);

writeFileSync('./contents/result-sync.txt' , `This message will be written in result ${first} + ${second}`)
// If the target file (result) is already there then the it will be overwritten 
// To append to the existing text we need to add {flag:a}

writeFileSync('./contents/result.txt' , `This message will be written in result ${first} + ${second}`,{flag:'a'})
console.log('done with this task');
console.log('starting the next task');
