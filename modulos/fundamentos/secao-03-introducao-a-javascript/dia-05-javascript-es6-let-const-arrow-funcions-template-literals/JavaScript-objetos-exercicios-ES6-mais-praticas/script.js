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
  const tamArray = text.split(" ");
  let tamanho = 0;
  let resultado = "";

  for (const array of tamArray) {
      if (array.length > tamanho) {
          tamanho = array.length;
          resultado = array;
      }
  }

  return resultado;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

