// antes
var prop1 = 'Digital Innovation One'

var obj = {
  prop1: prop1,
}
console.log(obj)

// moderno
var obj = {
  sum(a, b) {
    return a + b;
  }
}
console.log(obj)

// moderno
var propName = 'test'
var obj = {
  [propName + 'concat']: 'prop value'
}

console.log(obj)