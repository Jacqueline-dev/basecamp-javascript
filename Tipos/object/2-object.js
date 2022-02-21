const user ={
  name: 'Jacqueline',
  lastName: 'Silva Ferreira'
}

// recuperando as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// recuperando as valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// retorna um array de arrays contando [nome_prop, valor_prop]
console.log('\nLista de propriedade e valores: ', Object.entries(user));

// mergear propriedades de objetos
Object.assign(user, {fullName: 'Jacqueline Silva Ferreira'});

console.log('\nAdicionar a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {AGE: 25}));

// previne todas as alterações em um objeto 
const newObj = { foo: 'bar'};
Object.freeze(newObj);
