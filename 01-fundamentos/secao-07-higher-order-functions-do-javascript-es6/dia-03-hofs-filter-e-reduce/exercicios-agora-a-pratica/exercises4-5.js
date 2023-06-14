// 4.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

//expectedResult = 20;

const countA = () => {
    return names.reduce((acc, name) => {
        const letterCount = [...name].filter((char) => char.toLowerCase() === 'a').length;
        return acc + letterCount;
    }, 0);
};
        
console.log(countA());

// 5.
// O index 0 do array `students` equivale ao index 0 do array `grades`

/* expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
]; */

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
    return students.map((student, index) => {
        const gradeSum = grades[index].reduce((acc, grade) => acc + grade, 0);
        const average = gradeSum / grades[index].length;
        return { name: student, average: average };
    });
}

console.log(studentAverage());