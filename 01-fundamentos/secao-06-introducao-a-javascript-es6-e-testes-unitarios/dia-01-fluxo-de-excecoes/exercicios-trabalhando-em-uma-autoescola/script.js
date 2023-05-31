const infoValidation = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
    if (typeof name !== 'string') {
        throw new Error('Nome inválido!');
    }
}

const legalAgeValidation = (name, age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
}

const studentRegister = (name, age) => {
    try {
        infoValidation(name, age);
        legalAgeValidation(name, age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`;
    } catch (error) {
        return error.message;
    }
}
console.log(studentRegister('Gabriel', 18)); // Return correto
console.log(studentRegister('Fábio', 16)); // Return erro
console.log(studentRegister(1337, 16)); // Return erro