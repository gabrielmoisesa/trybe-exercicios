student = {};

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(student, 'nome', 'Gabriel');
addProperty(student, 'e-mail', 'gabrielmoisesalves18@gmail.com');
addProperty(student, 'telefone', '11 666-666');
addProperty(student, 'GitHub', 'gabrielmoisesa');
addProperty(student, 'LinkedIn', 'Gabriel Moises Alves');

console.log(student);