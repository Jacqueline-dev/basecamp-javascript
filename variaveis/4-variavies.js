let test = 'exemple';

(() => {
  console.log(`Valor dentro da função "${test}"`);

  if (true){
    let test = 'exemple';
    console.log(`Valor dentro da if "${test}"`);
  }
  console.log(`Valor após a execução do if "${test}"`);
})();