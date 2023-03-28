//EXERCÍCIO 1

/*let num1 = 5;
let num2 = 10;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(restoDivisao);*/                      


//EXERCÍCIO 2

/*let num1 = 22;
let num2 = 54;

if (num1 > num2) {
    console.log("num1 é maior");
}

else {
    console.log("num2 é maior")
} */                                          


//EXERCÍCIO 3

/*let num1 = 10;
let num2 = 33;
let num3 = 42;

if (num1 > num2 && num1 > 3) {
    console.log("O maior número é: " +num1 );
}
else if (num2 > num1 && num2 > num3) {
    console.log("O maior número é: " + num2 );
}
else {
    console.log("O maior número é: " +num3);
}*/



//EXERCÍCIO 4

/*let num1 = -6;

if (num1 > 0) {
    console.log("positive");
}
else if (num1 < 0) {
    console.log("negative");
}
else {
    console.log("zero")
} */


//EXERCÍCIO 5

/*let lado1 = 60;
let lado2 = 70;
let lado3 = 50;
let somaDosLados = lado1 + lado2 + lado3;
let validandoLados = lado1 > 0 && lado2 > 0 && lado3 >0;

if (somaDosLados === 180) {
    console.log(true);
}
else{
    console.log(false);
    console.log("Ângulo Inválido")
} */ 



//EXERCÍCIO 6

/*let xadrez = "rainha";

switch (xadrez) {
    case "rei":
        console.log("Rei anda uma casa apenas para qualquer direção");
        break;
    case "bispo":
        console.log("Bispo anda na diagonal");
        break;
    case "rainha":
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case "cavalo":
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case "torre":
        console.log('Torre -> Horizontal e vertical.');
        break;
    case "peão":
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
    console.log('Erro, peça inválida!');

} */ 


//EXERCÍCIO 7

/*let nota = 76;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}*/ 



//EXERCÍCIO 8

/*let num1 = 5;
let num2 = 8;
let num3 = 45;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}*/ 


//EXERCÍCIO 9

/*let num1 = 5;
let num2 = 10;
let num3 = 44;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
} */



//EXERCÍCIO 10

/*let custoProduto = 2;
let valorProduto = 4;
let quantidade = 1000;
let lucro;

if (valorProduto > custoProduto) {
    lucro = (valorProduto - custoProduto) * quantidade;
    console.log(lucro)
}
else {
    console.log("Error")
} */


//EXERCÍCIO 11

let salarioBruto = 2450;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
}
else {
    aliquotaInss = 570.88;
}

let salarioLiquido = salarioBruto - aliquotaInss;

if (salarioLiquido <= 1903.98) {
    aliquotaIr = 0;
}
else if (salarioLiquido <= 2826.65) {
    aliquotaIr = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido <= 3751.05) {
    aliquotaIr = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido <= 4664.68) {
    aliquotaIr = (salarioLiquido * 0.225) - 636.13;
}
else{
    aliquotaIr = (salarioLiquido * 0.275) - 869.36;
}

console.log("Salário: " + (salarioLiquido - aliquotaIr));







