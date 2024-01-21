export class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.validatePerson();
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set name(name: string) {
    this.validateName(name);
    this.name = name;
  }

  set birthDate(birthDate: Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3)
      throw new Error("Name must have at least 3 characters");
  }

  private validateBirthDate(birthDate: Date) {
    const now = new Date();

    if (birthDate > now)
      throw new Error("Birth date cannot be a date in the future");

    const age = now.getFullYear() - birthDate.getFullYear();

    if (age < 0 || age > 120)
      throw new Error("Age must be between 0 and 120 years old");
  }

  private validatePerson() {
    this.validateName(this._name);
    this.validateBirthDate(this._birthDate);
  }
}
