const hydrate = (string) => {
  const separaString = string.split(''); //Sem o espaço dentro ele separa todos os caracteres 1 por 1 
  let copoDeAgua = 0;

  for (let i = 0; i < separaString.length; i +=1) {
    const transformarNumero = parseInt(separaString[i]);

    if (transformarNumero) {
      copoDeAgua += transformarNumero;
    }
  }

  let copo = 'copo'
  if(copoDeAgua > 1) {
    copo = 'copos';
  }

  return `${copoDeAgua} ${copo} de água`;
}

module.exports = hydrate;