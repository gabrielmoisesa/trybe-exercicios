class Superclass {
  constructor(readonly isSuper: boolean = true) {}

  sayHello() {
    console.log("Olá mundo!");
  }
}

class Subclass extends Superclass {
  constructor(isSuper: boolean = false) {
    super(isSuper);
  }
}

const myFunc = (instance: Superclass) => {
  instance.sayHello();
  if (instance.isSuper) return console.log("Super!")
  console.log("Sub!");
};

const superInstance = new Superclass();
const subInstance = new Subclass();

myFunc(superInstance);
myFunc(subInstance);