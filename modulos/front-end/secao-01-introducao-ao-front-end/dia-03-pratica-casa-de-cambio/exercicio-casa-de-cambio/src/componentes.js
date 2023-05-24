

const ulElement = document.querySelector('.container main ul');

const h2Element = document.querySelector('.container main h2');


export function createLiElement (nome, valor) {
  const liElement = document.createElement('li');

  liElement.innerHTML = `
    <b>${nome}</b>
    <span>${valor}</span>
  `
  return liElement; // RETORNA A LI COM O B E O SPAN PREENCHIDOS

   // <li>
  //   <b>USD</b>
  //   <span>80</span>
  // </li>
}

// coins - [{ nome: 'USD', valor: '80' }, { nome: 'USD', valor: '80' }]
// baseCoin - 'BRL'

export function renderCoins (coins, baseCoin) { //Mostra na tela os valores da moedas
  ulElement.innerHTML = '';
  h2Element.innerHTML = `Valores referentes a 1 ${baseCoin}`
  
  coins.forEach(coin => {
    const nome = coin.nome;
    const valor = coin.valor;
    const liElement = createLiElement(nome, valor);

    ulElement.appendChild(liElement);

  });
}