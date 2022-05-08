
const path = require ('path')

console.log(path.sep)

const filepath = path.join('/contents','subfolder','test.txt')
console.log(filepath)
//   contents\subfolder\test.txt   -->relative path

const base = path.basename(filepath)

console.log(base)

const absolute = path.join(__dirname,'contents','subfolder','test.txt')
console.log(absolute);