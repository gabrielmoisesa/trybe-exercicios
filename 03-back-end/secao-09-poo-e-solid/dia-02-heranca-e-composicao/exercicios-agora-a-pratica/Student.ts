import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [0];
  private _assignmentsGrades: number[] = [0];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
    this._enrollment = enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    this.validateExamsGrades(grades);
    this._examsGrades = grades;
  }

  get assignmentsGrades() {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(grades: number[]) {
    this.validateAssignmentsGrades(grades);
    this._assignmentsGrades = grades;
  }

  sumGrades() {
    return (
      this._examsGrades.reduce((acc, curr) => acc + curr) +
      this._assignmentsGrades.reduce((acc, curr) => acc + curr)
    );
  }

  sumAverageGrade() {
    return this.sumGrades() / 6;
  }

  generateEnrollment() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const yearStr = year.toString().slice(2, 4);
    const monthStr = month < 10 ? `0${month}` : month.toString();
    const dayStr = day < 10 ? `0${day}` : day.toString();

    const randomStr = Math.random().toString().slice(2, 12);
    const enrollment = `${yearStr}${monthStr}${dayStr}${randomStr}`;
    this.validateEnrollment(enrollment);
    return enrollment;
  }

  validateEnrollment(enrollment: string) {
    if (enrollment.length < 16)
      throw new Error("Enrollment must have 16 characters");
  }

  validateExamsGrades(grades: number[]) {
    if (grades.length > 4)
      throw new Error("Exams grades must have at most 4 grades");
  }

  validateAssignmentsGrades(grades: number[]) {
    if (grades.length > 2)
      throw new Error("Assignments grades must have at most 2 grades");
  }
}
