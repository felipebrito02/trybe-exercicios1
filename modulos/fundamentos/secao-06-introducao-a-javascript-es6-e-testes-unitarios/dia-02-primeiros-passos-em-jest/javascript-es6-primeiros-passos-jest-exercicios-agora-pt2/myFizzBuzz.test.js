const myFizzBuzz = require('./myFizzBuzz');

describe('Testa funções myFizzBuzz', () => {
  it('Verifica, se as funções retornam um valor esperado', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(22)).toBe(22);
    expect(myFizzBuzz('numero')).toBe(false);
  });
});