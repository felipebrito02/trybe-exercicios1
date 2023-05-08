const newEmployees = (chamaFuncao) => {
  const employees = {
    id1: chamaFuncao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: chamaFuncao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: chamaFuncao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const novaPessoaContrada = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');
  return {nomeCompleto, email: `${email}@betrybe.com`};
};

console.log(newEmployees(novaPessoaContrada));