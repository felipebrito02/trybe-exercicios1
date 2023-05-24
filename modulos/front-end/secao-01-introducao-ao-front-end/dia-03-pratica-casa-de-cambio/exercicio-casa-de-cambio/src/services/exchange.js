export function fetchExchange (inputValor) {
  return fetch(`https://api.exchangerate.host/latest?base=${inputValor}`)
  .then(response => response.json())
  .then(data => {
    const base = data.base;

    if(base !== inputValor.toUpperCase()) {
      throw new Error('A moeda digitada é inválida!');
    }
    return data;
  }) //Return retorna o ultimo resultado do then (No caso data)
}