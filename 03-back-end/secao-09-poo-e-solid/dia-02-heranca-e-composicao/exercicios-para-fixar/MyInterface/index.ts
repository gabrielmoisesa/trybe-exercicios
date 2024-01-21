interface MyInterface {
  myNumber: number;
  myFunc: (myParam: number) => string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    this.myNumber = myNumber;
  }

  myFunc(myParam: number) {
    const sum = this.myNumber + myParam;
    return `Result: ${sum}`;
  }
}

const myObject = new MyClass(10);
console.log(myObject.myFunc(20));