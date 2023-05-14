const names = ["a", 2]

const newNames = names.map( name => {
    return `Hello ${name}`
})

console.log(newNames)

//*Global objects
console.log(__dirname)
console.log(__filename)