let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClientes(nome) {
  if (typeof nome === "string") {
   clientesTrybeBank.push(nome);
   return "Cliente adicionada(o) com sucesso"
  }else {
    return "O parametro apresentado não é uma string"
  }
}

console.log(addClientes("Marcio "));
console.log(addClientes (5));
console.log(clientesTrybeBank);