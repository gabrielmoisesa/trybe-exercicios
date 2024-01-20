class Student {
  constructor(
    private _enrollment: string,
    readonly name: string,
    private _testGrades: [number, number, number ,number] = [0, 0, 0, 0],
    private _schoolworkGrades: [number, number] = [0, 0],
  ) {
    this._enrollment = _enrollment;
    this.name = name;
    this._testGrades = _testGrades;
    this._schoolworkGrades = _schoolworkGrades;
  }

  get enrollment() {return this._enrollment;}
  get testGrades() {return this._testGrades;}
  get schoolworkGrades() {return this._schoolworkGrades;}

  set enrollment(value: string) {this._enrollment = value;}

  set testGrades(grades: [number, number, number ,number]) {
    this.validateGrades(grades);
    this._testGrades = grades;
  }

  set schoolworkGrades(grades: [number, number]) {
    this.validateGrades(grades);
    this._schoolworkGrades = grades;
  }

  validateGrades(grades: number[]) {
    grades.forEach(grade => {
      if (grade < 0 || grade > 10) throw new Error('Invalid grades!');
    });
  }

  totalScore() {
    const testGradesSum = this.testGrades.reduce((acc, curr) => acc + curr);
    const schoolworkGradesSum = this.schoolworkGrades.reduce((acc, curr) => acc + curr);
    return testGradesSum + schoolworkGradesSum;
  }

  averageScore() {return this.totalScore() / 6;}
}

const firstStudent = new Student(
  '123456',
  'Markus Persson',
)

firstStudent.testGrades = [99, 99, 99, 99];