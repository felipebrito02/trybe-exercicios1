let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function newKey (object, key, value) {
  object[key] = value;
}

newKey(lesson2, "turno", "noite");
console.log(lesson2);

function listKeys(object) {
  return Object.keys(object)
}
console.log(listKeys(lesson2));

function size(object) {
  return Object.keys(object).length
}
console.log(size(lesson3));

function listValues(object) {
  return Object.values(object);
}
console.log(listValues(lesson2));

let allLessons = ( {}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

console.log(allLessons);

function totalStudents (object) {
  let total = 0;
  let keys = Object.keys(object);
  for(let index in keys) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total
}
console.log(totalStudents(allLessons))

function objectNumber(object, number) {
  return Object.values(object)[number];
}
console.log(objectNumber(lesson1, 2));

function verify(object, key, value) {
  let entries = Object.entries(object);
  let equal = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries [index][1]=== value) equal = true;
  }
  return equal;
}

console.log(verify(lesson1, "Professor", "Maria Clara"));