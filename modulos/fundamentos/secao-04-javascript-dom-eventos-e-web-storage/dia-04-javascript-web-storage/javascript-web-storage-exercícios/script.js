


window.onload = () => {
  
  //Cor de Fundo
  const definirCorBg = (cor) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = cor;
    localStorage.setItem('corDeFundo', cor);
  }

  let corBtn = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < corBtn.length; i += 1) {
    corBtn[i].addEventListener('click', (evento) => {
      definirCorBg(evento.target.innerHTML);
    });
  }
  

  //Cor da Fonte
  const definirFonteCor = (cor) => {
    let paragrafo = document.querySelector('.paragraph');
    paragrafo.style.color = cor ;
    localStorage.setItem('corDaFonte', cor);
  }
  
  let corFonteBtn = document.querySelectorAll('#font-color>button');
  for (let i = 0; i < corFonteBtn.length; i += 1) {
    corFonteBtn[i].addEventListener('click', (evento) => {
      definirFonteCor(evento.target.innerHTML);
    });
  }


  //Tamanho da Fonte
  const definirTamanhoFonte = (tamanho) => {
    let paragrafo = document.querySelector('.paragraph');
    paragrafo.style.fontSize = tamanho;
    localStorage.setItem('tamanhoFonte', tamanho);
  }

  let tamanhoFonteBtn = document.querySelectorAll('#font-size>button');
  for (let i = 0; i < tamanhoFonteBtn.length; i += 1) {
    tamanhoFonteBtn[i].addEventListener('click', (evento) => {
      definirTamanhoFonte(evento.target.innerHTML);
    });
  }


  //Espaçamento entre Linhas
  const definirEspacamento = (espaco) => {
    let paragrafo = document.querySelector('.paragraph');
    paragrafo.style.lineHeight = espaco;
    localStorage.setItem('espacoLinha', espaco);
  }
  
  let espacamentoBtn = document.querySelectorAll('#line-height>button');
  for (let i = 0; i < espacamentoBtn.length; i += 1) {
    espacamentoBtn[i].addEventListener('click', (evento) => {
      definirEspacamento(evento.target.innerHTML);
    });
  }


  //Estilo da Fonte
  const definirFonte = (fonte) => {
    let paragrafo = document.querySelector('.paragraph');
    paragrafo.style.fontFamily = fonte
    localStorage.setItem('fonte', fonte);
  }

  let fonteBtn = document.querySelectorAll('#font-family>button');
  for (let i = 0; i < fonteBtn.length; i += 1) {
    fonteBtn[i].addEventListener('click', (evento) => {
      definirFonte(evento.target.innerHTML);
    });
  }


  const inicializacao = () => {
    let recuperarCordeFundo = localStorage.getItem('corDeFundo');
    definirCorBg(recuperarCordeFundo);

    let recuperarCordaFonte = localStorage.getItem('corDaFonte');
    definirFonteCor(recuperarCordaFonte);

    let recuperarTamanhoFonte = localStorage.getItem('tamanhoFonte');
    definirTamanhoFonte(recuperarTamanhoFonte);

    let recuperarEspacamento = localStorage.getItem('espacoLinha');
    definirEspacamento(recuperarEspacamento);

    let recuperarEstiloFonte = localStorage.getItem('fonte');
    definirFonte(recuperarEstiloFonte);
  }
  
  inicializacao();

//console.log(definirCorBg('red'))
//console.log(definirFonteCor('white'))
//console.log(definirTamanhoFonte('14pt'));
//console.log(definirEspacamento('3'))
//console.log(definirFonte('Arial'))

}

