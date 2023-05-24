import Swal from 'sweetalert2';


import { renderCoins } from './componentes';
import { fetchExchange } from './services/exchange'

import './style.css';
import './reset.style.css'


const buttonElement = document.querySelector('header form button');


buttonElement.addEventListener('click', () => {
  const inputElement = document.querySelector('header form input');
  const inputValor = inputElement.value // Pega o valor do input

  if(!inputValor) {
    Swal.fire({
      title: 'Erro!',
      text: 'Você precisa digitar uma moeda',
      icon: 'error',
      confirmButtonText: 'Ok'
    });

    return; //Interrompe o fluxo de execução
  }

  fetchExchange(inputValor)
  .then(resultado => {  //RESULTADO DAQUELE DATA QUE SAO OS DADOS
    const base = resultado.base;  //propiedade do nome das moedas, moeda padrao 'EUR'

    //Converter { USD: 80 }
    //PARA [{ nome: USD, valor: 80 }]

    const rates = resultado.rates;  //propiedade rates tem os nomes e valores das moedas
    const ratesArray = Object.entries(rates)  //Retorna um array que na primeira[0] posição retorna o nome da moeda e a segunda[1] posição retorna o valor da moeda

  const ratesArrayToObject = ratesArray.map(rateCoin => {  //Rate coin é um elemento do array "USD, 80"
    const nome = rateCoin[0];
    const valor = rateCoin[1];

    //const [nome, valor] = rateCoin //Desestrurar
    return {
      nome: nome,
      valor: valor,
      }
    })
    renderCoins(ratesArrayToObject, base)
  })
  .catch(error => {  //ELE NAO CAI NO THEN POIS È UM ERRO
      Swal.fire({
        title: 'Erro!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 
  }) 
});