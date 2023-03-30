let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritimetica = 0;

for (let index = 0; index < numeros.length; index += 1) {
  soma += numeros[index];
  mediaAritimetica = soma / numeros.length; 
  
}

if (mediaAritimetica > 20) {
  console.log("Valor maior que 20")
}
else if (mediaAritimetica <= 20) {
  console.log("Valor menor ou igual a 20");
}

let maiorNumero = numeros[0];

for (let index2 = 1; index2 < numeros.length; index2 += 1) {
  if (numeros[index2] > maiorNumero){
  maiorNumero = numeros[index2];
  }
}

let impar = 0;

for (let index3 = 0; index3 < numeros.length; index3 += 1) {
  if (numeros[index3] % 2 !== 0) {
    impar += 1;
  }
}

if (impar === 0 ) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Existem " + impar + " valores impares no array");
}


let menorNumero = numeros[0];

for (index4 = 1; index4 < numeros.length; index4 +=1) {
  if (numeros[index4] < menorNumero) {
    menorNumero = numeros[index4];
  }
}

let contador = [];
for (let index5 = 1; index5 <= 25; index5 += 1) {
  contador.push(index5);
}

let contador2 = [];
for (let index6 = 0; index6 < contador2.length; index6 += 1) {
  console.log(contador2[index6] / 2);
}



console.log("O maior número é: " + maiorNumero);
console.log( "O menor número é: " +menorNumero);
console.log("O resultado da soma é: " + soma);
console.log("O resultado da média aritimetica é: " + mediaAritimetica);
console.log(contador);