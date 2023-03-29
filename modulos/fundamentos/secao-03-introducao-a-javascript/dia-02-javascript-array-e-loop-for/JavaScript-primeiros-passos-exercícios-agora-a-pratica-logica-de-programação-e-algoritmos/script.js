//EXERCÍCIO 1
/*let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log( "O fatorial de 10 é" +fatorial);*/

//EXERCÍCIO 2
/*let palavra = "tryber";
let palavraInvertida = palavra.split("").reverse().join(""); //split converte a string em um array de caracteres, reverse inverte o array, join junta tudo dnv
console.log(palavraInvertida);*/


let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = ""
let menorPalavra = array[0]

for (let index = 0; index < array.length; index +=1) {
  let palavra = array[index];
  if (palavra.length > maiorPalavra.length) {
    maiorPalavra = palavra;
  }

  if (palavra.length < menorPalavra.length ) {
    menorPalavra = palavra;
  }
}

console.log("A maior palavra é: " +maiorPalavra);
console.log("A menor palavra é: " + menorPalavra);