const pai = document.getElementById('pai');
const elementoIrmao = document.createElement('section');
elementoIrmao.id = 'elementoIrmao';
pai.appendChild(elementoIrmao);

const elementoFilho = document.getElementById('elementoOndeVoceEsta');
const elementoFilhoOndeEsta = document.createElement('section');
elementoFilhoOndeEsta.id = 'elementoFilhoOndeEsta';
elementoFilho.appendChild('elementoFilhoOndeEsta');

const elementoPrimeiroFilho = document.getElementById('primeiroFilhoDoFilho');
const elementoPrimeiroF = document.createElement('section');
elementoPrimeiroF.id = 'elementoPrimeiroF';
elementoPrimeiroF.appendChild('elementoPrimeiroF');

const terceiroFilho = elementoPrimeiroF
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);