let saldo = 100;

function addSaldo(valor) {
  return saldo +  valor;
}

function subSaldo(valor) {
  return saldo - valor;
}

function multSaldo(valor) {
  return saldo * valor;
}

function divSaldo(valor) {
  return saldo / valor;
}

console.log(addSaldo(150));
console.log(subSaldo(50));
console.log(multSaldo(3));
console.log(divSaldo(5));