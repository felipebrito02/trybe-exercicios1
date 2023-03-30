let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novosNumeros = [];

for (let index = 0; index < numeros.length; index += 1) {
  if (index === numeros.length -1) {
    novosNumeros.push(numeros[index] * 2);
  } else {
    novosNumeros.push(numeros[index] * numeros[index + 1]);
  }
}

console.log( "Valores dos novos números: " +novosNumeros); /*Neste exemplo, o loop for itera sobre cada valor no array numeros, e verifica se o valor atual é o último elemento do array usando a condição if (i === numeros.length - 1). Se o valor atual for o último elemento, a multiplicação é feita por 2, caso contrário, 
a multiplicação é feita pelo valor seguinte usando a expressão numeros[index] * numeros[index + 1]. 
Em ambos os casos, o valor resultante é adicionado no novo array novoNumeros usando o método push(). O 
resultado final é o array novosNumeros com os valores multiplicados correspondentes.*/


numeros.sort(function(a, b) {
  return a - b;
});

console.log( "Ordem crescente: " +numeros);




let numeros2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeros2.sort(function(a, b) {
  return b - a;
});

console.log( "Ordem decrescente: " +numeros2)
  