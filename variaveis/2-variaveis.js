
//variavel escopo global

var test = 'exemple';

(() => {
  console.log(`Valor dentro da função "${test}"`);

  if (true){
    var test = 'exemple';
    console.log(`Valor dentro da if "${test}"`);
  }
  console.log(`Valor após a execução do if "${test}"`);
})();