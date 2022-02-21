const name = 'Jacqueline';

// nao podemos alterar o valor 
name = 'Jacqueline';

const user ={
  name: 'Jacqueline'
}

// mas se for um objeto, podemos trocar suas propriedades
user.name ='outro nome';

const user ={
  name: 'Jacqueline'
}
const person = ['Guilherme', 'Pedro', 'Jacqueline', 'Maria']

//podemos adicionar novos itens 
person.push('João');

//podemos remover algum item
person.shift();

//podemos alterar diretamente 
person[1] ='James';

console.log('\nArray após as alterações: ', person)