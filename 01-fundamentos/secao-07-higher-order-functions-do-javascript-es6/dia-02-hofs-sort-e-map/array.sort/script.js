const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.name > b.name ? 1 : -1);

people.sort((a, b) => a.age > b.age ? 1 : -1)

console.log(people);