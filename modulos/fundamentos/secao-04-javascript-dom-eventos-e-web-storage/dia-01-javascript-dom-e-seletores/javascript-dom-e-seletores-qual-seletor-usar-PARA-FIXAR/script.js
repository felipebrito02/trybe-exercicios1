const styleHeader = document.getElementById('header-container');
styleHeader.style.backgroundColor = 'green'

const urgenteImportante = document.getElementsByClassName('emergency-tasks');
urgenteImportante[0].style.backgroundColor = 'salmon';

const styleUrgenteImportante = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < styleUrgenteImportante.length; i += 1) {
  styleUrgenteImportante[i].style.backgroundColor = 'hotpink'
}

const naoUrgenteImportante = document.getElementsByClassName('no-emergency-tasks');
naoUrgenteImportante[0].style.backgroundColor = 'yellow'

const styleNaoUrgenteImpornte = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < naoUrgenteImportante.length; i += 1) {
  styleNaoUrgenteImpornte[i].style.backgroundColor = 'black'
}

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'darkgreen'