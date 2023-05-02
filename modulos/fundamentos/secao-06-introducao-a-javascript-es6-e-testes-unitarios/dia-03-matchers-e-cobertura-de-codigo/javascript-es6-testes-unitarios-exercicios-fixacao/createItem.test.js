const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    const resultadoEsperado = {name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const itens = createItem('banana', 'kg', 1.99, 20);
    expect(itens).toEqual(resultadoEsperado);
  });

  it('utiliza zero como quantidade padrão', () => {
    const qtPadrao = 0;
    const itens = createItem('banana', 'kg', 1.99)
    expect(itens).toHaveProperty('quantity', qtPadrao);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana')).toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -5)).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0)).toThrow('O preço do item deve ser maior que zero');
  });
});