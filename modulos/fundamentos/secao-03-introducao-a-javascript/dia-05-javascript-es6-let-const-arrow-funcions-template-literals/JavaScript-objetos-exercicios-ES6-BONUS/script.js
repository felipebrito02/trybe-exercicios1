function substituaX (nome) {
  const frase = "Tryber x aqui!".replace("x", nome); 
  return frase;
}

let nome = "Felipe"
let frase = substituaX(nome);
//console.log(frase);

function minhasSkills (nome) {
  const skills = ["html", "css", "javascript"];
  let habilidades = `${substituaX(nome)} 
Minhas três principais habilidades são:
`;
  habilidades += skills.join("\n");
  return habilidades;
}

let fraseSkills = minhasSkills(nome);
console.log(fraseSkills);

