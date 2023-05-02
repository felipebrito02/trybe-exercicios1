const myRemove = require('./myRemove');


test('Verifica se o array retorna o esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  
});

test('Verifica se a chamada não retorna o array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test(`Verifica se a chamada retorna o array esperado`, () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4,]);
})