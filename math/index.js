function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x * y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

console.log(add(10, 20))
console.log(sub(10,20))
console.log(mult(10,20))
console.log(div(10,20))

module.exports = {
    add,
    sub,
    mult,
    div
}