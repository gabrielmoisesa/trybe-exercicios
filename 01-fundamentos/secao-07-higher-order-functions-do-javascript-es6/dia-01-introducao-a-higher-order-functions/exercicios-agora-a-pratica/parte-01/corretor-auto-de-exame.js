const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightA, studentA) => {
    if (rightA === studentA) {
        return 1;
    }
    if (studentA === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightA, studentA, action) => {
    let contador = 0;
    for (let i = 0; i < rightA.length; i += 1) {
        const actionReturn = action(rightA[i], studentA[i])
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};


console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
