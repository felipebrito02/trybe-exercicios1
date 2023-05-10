// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Uva', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Pera', 'Banana'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFrutas = [...fruit, ...additional]
  return saladaDeFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));