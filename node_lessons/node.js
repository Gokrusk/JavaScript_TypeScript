const names = ["a", 2]

const newNames = names.map( name => {
    return `Hello ${name}`
})

console.log(newNames)

//*Global objects
console.log(__dirname)
console.log(__filename)
//console.log(module)
//console.log(require)

//*Timers

//? print message every 2 seconds
// setInterval(()=>{
//     console.log("Hello world")
// }, 2000)

//? print message after 5 seconds
// setTimeout(() =>{
//     console.log("Hello world")
// }, 5000)


//*Modules
//const obj = require('./module/myModule')
const { addressWeb } = require('./module/myModule')

//console.log(obj)
console.log(addressWeb)