let user = {
  name: 'Jacqueline'
};

// alterando a propriedade de um objetos
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//function getProp(prop){
 // return user[prop];
//}

// criando uma propriedade
user.lastName = 'Silva Ferreira';

// deletando uma propriedade 
delete user.name;