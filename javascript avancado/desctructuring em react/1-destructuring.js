var arr =['Apple', 'Banana', 'Orange', ['Tomato']]

var applle = arr[0]
var banana = arr[1]
var orange = arr[2]
var orange = arr[3][0]

// destructuring assigment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange' ['Tomato']]

console.log(tomato2)


////////////////////////////////////////
var obj = {
  name: 'Celso'
}
// destructuring assigment
var name = obj.name
var {name} = obj
console.log(name)


////////////////////////////////////////
var arr = ["Apple", 'Orange']
var obj = {
  name: 'Celso',
  props: {
    age: 26,
    favoritesColors: ["black", 'blue']
  }
}

var age = obj.props.age

// destructuring assigment
var [apple2] = arr
var {
 props: {
  age: age2,
  favoritesColors: [color1, clor2]
}
} = obj

console.log(color1)