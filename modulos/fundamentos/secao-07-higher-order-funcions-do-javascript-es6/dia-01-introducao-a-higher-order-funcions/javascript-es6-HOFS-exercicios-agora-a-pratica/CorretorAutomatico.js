const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaQuestoes = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
    return 1;
  } 
  if (STUDENT_ANSWERS === 'N.A') {
    return 0;
  }
  return -0.5;
};

const resultado = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
  let contador = 0;

  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    const actionReturn = action(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
}

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaQuestoes));