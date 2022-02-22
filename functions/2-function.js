global.name = 'Nome no ocntexto de criação';

const getNameArrow = () => this.name;
function getName(){
  return this.name
}

const user = {
  name: 'Nome do objeto de execução',
  getNameArrowFn,
  getName

}

console.log(user.getNameArrowFn());
console.log(user.getName());

