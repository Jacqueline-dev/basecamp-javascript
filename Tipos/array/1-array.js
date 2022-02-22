const users = ['Guilherme', 'Pedro', 'Jennifer']

const gender = {
  MAN: symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
]

// retorna a quantidade de itens de um array
console.log('Items:', persons.length)

// verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons))

// alterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} ${index}, arr`)
})

// filtar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

//retorna um novo array 
const personsWithCourse = persons.map(person =>{
  person.course = 'Introdução ao Javascript';
  return person;
})

console.log('\nPessoas coma a adiçaõ do course:', personsWithCourse);

// transformar um array em outro tipo 
const totalAge = persons.reduce((age, person) =>{
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge)

// jutando operações
const totalEvenAges = persons
            .filter(person => person.age % 2 === 0)
            .reduce((age, person) => {
              age += person.age;
              return age;
            }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);