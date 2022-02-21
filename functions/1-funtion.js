function fn(){
  return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  // mais uma expressão
  return 'Code here';
}

// funções também são objetos
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn(fn.prop));

// receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

console.log(fn);


// receber e retorna funções
const controlFnExec = fnParam => allowd => {
  if (allowd) {
    fnParam
  }
}

const handleFnExecution = controlFnExec(fn)
handleFnExecution(true); // executar a função fn
handleFnExecution(); // não executara a função fn

// controlFnExec como função 

function controlFnExec(fnParam){
  return function(allowd){
    if(allowd){
      fnParam();
    }

  }
}