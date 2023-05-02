const techList = (array, nome) => {
  if(array.length === 0) {
    return 'Vazio!'
  }

  const arrayOrdenado = array.sort();
  const listaOrdenada = [];

  for (let i = 0; i < arrayOrdenado.length; i +=1 ) {
    listaOrdenada.push({
      tech: arrayOrdenado[i],
      name: nome,
    });
  }
  return listaOrdenada;
};

module.exports = techList