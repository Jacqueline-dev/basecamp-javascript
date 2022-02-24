// rest operator ... spread operator
// strings, arrays, literals objects e objetos interaveis 

function sum (...args) {
  return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5, 2, 3))

////////////////////////////////

const sum = (...rest) => {

}

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum = (...rest) => {
  return multiply(...rest)
}

console.log(sum(5, 5, 5, 2, 3));

////////////////////////////////

const str = 'Digital Innovation One'
function logArgs(...args) {
  console.log(args)
}

logArgs(...args)


////////////////////////////////

const str = 'Digital Innovation One'
const arr = [1, 2, 3, 4]

function logArgs(){
  console.log(argumnets)

}

logArgs(...arr)


///////////////////////////////
const str = 'Digital Innovation One'
const arr = [1, 2, 3, 4]

function logArgs(a, b, c){
  console.log(a, b, c)

}
const arrClone = [...arr]
const obj = { 
  test: 123
}

const obj2 ={
  ...obj,
  teste2: 'hello'
}

console,log(obj2,)