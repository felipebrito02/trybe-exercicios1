let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (vector) {
  let resultado = [];
  for (let index = 0; index < vector.length; index += 1) {
    let numeros = vector[index];

    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      let auxiliar = numeros[index2];

      if ((auxiliar % 2) === 0) {
        resultado.push(auxiliar);
      }
    }
  }
  return resultado;
}

console.log(arrayOfNumbers(vector));

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let resultado = {};

for (index = 0; index < basket.length; index += 1) {
  let fruta = basket[index];

  if (!resultado[fruta]) resultado[fruta] = 0;
  resultado[fruta] += 1; 
}
  let arr = [];

  for (fruta in resultado){
   let mensagem = `${resultado[fruta]} ${fruta}`;
   if (resultado[fruta] > 1) mensagem += "s";
  arr.push(mensagem);
}

console.log(`Sua cesta possui:  ${arr.join(', ')}.`)


let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
console.log(`O morador do bloco 2 de nome ${ultimoMoradorBlocoDois.nome} ${ultimoMoradorBlocoDois.sobrenome} mora no ${ultimoMoradorBlocoDois.andar}°, apartamento ${ultimoMoradorBlocoDois.apartamento}.`);

