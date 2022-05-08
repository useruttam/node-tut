
const os = require ('os');

// A way to get the info of the user
const user  = os.userInfo();
console.log(user)

//A way to get the uptime of the system
console.log(`The system is up of ${ os.uptime()/ 60/ 60} hours`);

const obj = {
    name : os.type(),
    release : os.release(),
    Totalmem : os.totalmem(),
    Freemem: os.freemem(),
}
console.log(obj);