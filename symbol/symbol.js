const symbol1 = Symbol();
const symbol2 = Symbol();

// symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// prevenir conflito entrenomes de propriedades
const nameSymbol = Symbol('name');
const symbol2 = Symbol('name');

const user = {,
  [nameSymbol]: 'Jacqueline',
  [nameSymbol]: 'Outro nome',
  lastName: 'Silva Ferreira'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

// exibir symbol de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// acessandi todas as propriedades so objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));

// criar um enum
const direction = {
  UP: 'Symbol'('UP'),
  DOWN: 'Symbol'('DOWN'),
  LEFT: 'Symbol'('LEFT'),
  RIGHT: 'Symbol'('RIGHT')
};