import Person from "./Person";
import Employee from "./interfaces/Employee";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _registration: string;
  private _admissionDate: Date = new Date();

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    public subject: Subject
  ) {
    super(name, birthDate);
    this.validateSalary(_salary);
    this._registration = this.generateRegistration();
  }

  get registration() {
    return this._registration;
  }

  set registration(registration: string) {
    this.validateRegistration(registration);
    this._registration = registration;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    this.validateAdmissionDate(date);
    this._admissionDate = date;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary: number) {
    this.validateSalary(salary);
    this._salary = salary;
  }

  generateRegistration(): string {
    const length = 16;
    const characters = "0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  private validateRegistration(registration: string) {
    if (registration.length < 16)
      throw new Error("registration must have at least 16 characters");
  }

  private validateSalary(salary: number) {
    if (salary < 0) throw new Error("Salary cannot be negative");
  }

  private validateAdmissionDate(admissionDate: Date) {
    const now = new Date();
    if (admissionDate > now)
      throw new Error("Admission Date cannot be a date in the future");
  }
}

const newTeacher = new Teacher(
  "Amanda",
  new Date("1991-11-22"),
  3500,
  new Subject("Portuguese")
);

console.log("====================================");
console.log(newTeacher);
console.log("====================================");
