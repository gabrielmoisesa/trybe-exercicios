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
}