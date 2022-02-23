const console = require("console");

// antes
function multiply (a, b) {
  return a + b;
}
console.log(multiply(5, 5))

// moderno
function multiply (a, b = 1) {
  return a * b;
}
console.log(multiply(5, 5))

//lazy evaluation
function randomNumber () {
  console.log('Generation a random number...')
  return Math.random() * 10;
}

function multiply (a, b = randomNumber()) {
  return a * b;
}
console.log(multiply(5))
console.log(multiply(5))