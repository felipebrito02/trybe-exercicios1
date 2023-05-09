//1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

//MEU METODO USANDO APENAS REDUCE
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const soma = numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) {  
    return acc + curr;
  }
  return acc;
}, 0);

console.log(soma);

// OUTRO METODO USANDO REDUCE E FILTER

const par = (numero) => numero % 2 === 0;
const soma2 = (acc, curr) => acc + curr;

const somaNumeros = (elemento) => elemento.filter(par).reduce(soma2);
//console.log(somaNumeros(numbers));

// Outro metodo usando apenas o reduce

const soma3 = ((acc, curr) => (number % 2 === 0) ? acc + curr : acc);

const somaNumeros3 = (elemento) => elemento.reduce(soma3, 0);

//console.log(somaNumeros3(numbers));