class Student {
  constructor(
    private enrollment: number,
    private name: string,
    private testGrades: [number, number, number ,number],
    private schoolworkGrades: [number, number],
  ) {
    this.enrollment = enrollment;
    this.name = name;
    this.testGrades = testGrades;
    this.schoolworkGrades = schoolworkGrades;
  }

  totalScore() {
    const testGradesSum = this.testGrades.reduce((acc, curr) => acc + curr);
    const schoolworkGradesSum = this.schoolworkGrades.reduce((acc, curr) => acc + curr);
    return testGradesSum + schoolworkGradesSum;
  }

  averageScore() {return this.totalScore() / 6;}
}