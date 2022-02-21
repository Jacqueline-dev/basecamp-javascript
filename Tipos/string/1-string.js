// retorna o tamnho d euma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um arry quebrando a string por um delimitado
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitado: ', splittedText);

// busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');

//retorna a "fatia" de uma valor 
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a útima:', secondToEnd);

//retorna N caractere a partir de uma posição 
const twoCharsBeforeFirsPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirsPos)
