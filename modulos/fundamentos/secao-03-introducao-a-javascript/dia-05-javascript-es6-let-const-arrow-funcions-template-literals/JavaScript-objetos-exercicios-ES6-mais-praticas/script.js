const motor = (ligadoDesligado) => {
  ligadoDesligado = ligadoDesligado === "desligado" ? "ligado" : "desligado";
  console.log(`O motor está ${ligadoDesligado}`);
  return ligadoDesligado;
  
};


const calcularArea = (raio) => {
  const area = Math.PI * raio * raio;
  return area;
};

const raio = 10;
const area = calcularArea(raio);
console.log(`A área do círculo é: ${area}`);

const longestWord = (text) => {
  const tamArray = text.split(" "); // separa palavra por palavra utilizando o split()
  let tamanho = 0;  //contador de comprimento maximo das palavras
  let resultado = ""; // guarda a palavra encontrada

  for (const array of tamArray) {  // percorrer um array de palavras
      if (array.length > tamanho) { // se o comprimento da palavra encontrada for maior que o comprimento maximo
          tamanho = array.length;  // o comprimento maximo será a propria palavra
          resultado = array; // eu reatribuo a ela o valor que sera retornado.
      }
  }

  return resultado;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

