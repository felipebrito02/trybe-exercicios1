const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomes) => nomes === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));