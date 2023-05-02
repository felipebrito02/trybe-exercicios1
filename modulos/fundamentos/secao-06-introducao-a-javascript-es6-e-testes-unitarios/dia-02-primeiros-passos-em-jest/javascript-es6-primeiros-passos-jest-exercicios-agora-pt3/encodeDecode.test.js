const {encode, decode} = require('./encodeDecode');

describe('Testes encode e decode', () => {
  it('Testa se encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('Teste na função encode se a vogal "a" é convertida em número', () => {
    expect(encode('a')).toEqual('1');
  });
  it('Teste na função encode se a vogal "e" é convertida em número', () => {
    expect(encode('e')).toEqual('2');
  });
  it('Teste na função encode se a vogal "i" é convertida em número', () => {
    expect(encode('i')).toEqual('3');
  });
  it('Teste na função encode se a vogal "o" é convertida em número', () => {
    expect(encode('o')).toEqual('4');
  });
  it('Teste na função encode se a vogal "u" é convertida em número', () => {
    expect(encode('u')).toEqual('5');
  });
  it('Testa se o retorno da função tem o mesmo numero de caracteres', () => {
    expect(encode('felipe').length).toEqual(6);
  });

  it('Testa se decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Teste na função decode se o número "1" é convertido em vogal', () => {
    expect(decode('1')).toEqual('a');
  });
  it('Teste na função decode se o número "2" é convertido em vogal', () => {
    expect(decode('2')).toEqual('e');
  });
  it('Teste na função decode se o número "3" é convertido em vogal', () => {
    expect(decode('3')).toEqual('i');
  });
  it('Teste na função decode se o número "4" é convertido em vogal', () => {
    expect(decode('4')).toEqual('o');
  });
  it('Teste na função decode se o número "5" é convertido em vogal', () => {
    expect(decode('5')).toEqual('u');
  });
  it('Testa se o retorno da função tem o mesmo numero de caracteres', () => {
    expect(decode('teste').length).toEqual(5);
  });
});