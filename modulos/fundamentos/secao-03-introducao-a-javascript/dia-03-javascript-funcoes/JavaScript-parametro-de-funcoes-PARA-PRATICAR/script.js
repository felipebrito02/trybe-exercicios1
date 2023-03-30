/*let clientesTrybeBank = ['Ada', 'John', 'Gus'];

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
console.log(clientesTrybeBank); */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeClientes(cliente) {
  if (typeof cliente === "string") {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        return "Cliente removido do nosso sistema."
      }
      
    }

    if (clienteEncontrado === false) {
      return "Cliente não encontrado"
    }
    
  } else {
    return "O parametro passado não é uma string"
  }
}

console.log(removeClientes("Gus"));
console.log(removeClientes("Fernanda"));
console.log(removeClientes(10));

