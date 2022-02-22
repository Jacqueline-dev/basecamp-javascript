// in
something in somethingItems

// arrays
var arvores = new Array('pau-brasil', 'loureiro', 'credro', 'carvalho', 'sicomoro');
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false

"cedro" in arvores[2]; // retorna false

"length" in arvore; // retorna true

// objetos predefinidos
"PI" in Math; // retorna true
var minhaString = new String("Coral");
"length" in minhaString; // retorna true

// objetos perosonalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro; // retorna true
"modelo" in meuCarro; // retorna true

// instaceof
objeto instanceof tipoObjeto 

var dia = new Date(2022, 02,22);

if(dia instanceof Date){
  //code here
}