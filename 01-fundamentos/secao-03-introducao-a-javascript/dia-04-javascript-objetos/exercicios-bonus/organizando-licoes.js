let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addNightShift(object, key, value) {
    object[key] = value;
}
addNightShift(lesson2, 'turno', 'noite')
console.log(lesson2);

function listKeys(object) {
    console.log(Object.keys(object));
}
listKeys(lesson3);

function objectSize(object) {
    console.log(Object.keys(object).length);
}
objectSize(lesson3);

function listValues(object) {
    console.log(Object.values(object));
}
listValues(lesson2);

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});
console.log(allLessons);

function totalStudents(object) {
    let total = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
    console.log(total)
}
totalStudents(allLessons)

function getValueByNumber(object, number) {
    console.log(Object.values(object)[number]);
}
getValueByNumber(lesson3, 3);

function verifyPair(object, key, value) {
    let entries = Object.entries(object);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) {
            isEqual = true;
        }
    }
    return isEqual;
}
console.log(verifyPair(lesson3, 'materia', 'Matemática'));
