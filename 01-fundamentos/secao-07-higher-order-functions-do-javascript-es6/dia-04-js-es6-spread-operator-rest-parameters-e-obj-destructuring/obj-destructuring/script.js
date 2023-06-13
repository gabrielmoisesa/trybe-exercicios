const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const userInfos = {...user, ...jobInfos};

console.log(userInfos);

const { name, age, nationality, profession, squad } = userInfos;

const userPresentation = `Hi, my name is ${name}, I'm ${age} years old and 
I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`;

console.log(userPresentation);