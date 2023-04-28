const studentRegister = (name, age) => {
  try{
    if (!name || !age ){
      throw new Error('Todas as informações são necessárias')
    }
    if (age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas') 
    }
    if (name === name && age >= 18){
      return `${name}, Seja bem vindo(a) à AuTrybe`
    }
  } catch(error){
    return error.message;
  }
}
console.log(studentRegister("Carlos", 25)); 