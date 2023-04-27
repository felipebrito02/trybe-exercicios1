const validaNumero = (nota1, nota2, nota3, nota4) => {
  if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number' || typeof nota4 !== 'number') {
    throw new Error('Os valores devem ser numéricos.');
  }
}

const calculaMedia = (nota1, nota2, nota3, nota4) => {
  try {
    validaNumero(nota1, nota2, nota3, nota4);
    let soma = nota1 + nota2 + nota3 + nota4;
    let media = soma / 4;
    return media;
  } catch (error) {
    return error.message;
  }  
}
console.log(calculaMedia(5, 6, 7, '9'))