const checarNumeros = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado;

const resultado = (meuNumero, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(meuNumero, numeroSorteado) ? 'Parabéns você ganhou' : 'Tente Novamente'
};

console.log(resultado(2, checarNumeros,));