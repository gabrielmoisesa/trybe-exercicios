export default class Subject {
  constructor(private _name: string) {
    this.validateName(_name);
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  validateName(name: string) {
    if (name.length < 3)
      throw new Error("Name must have at least 3 characters");
  }
}

const mathSubject = new Subject("Math");
console.log(mathSubject.name);
mathSubject.name = "Mathematics";
console.log(mathSubject.name);
