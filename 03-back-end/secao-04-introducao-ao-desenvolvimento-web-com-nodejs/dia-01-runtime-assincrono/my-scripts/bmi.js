const readline = require('readline-sync')

const calculateBMI = (weight, unit, height) => {
  const bmi = unit.toUpperCase() === 'M' 
  ? weight / height ** 2 
  : weight / (height / 100) ** 2;
  return bmi;
}

const weight = readline.question("What's your weight? In KG ")
const heightUnit = readline.question("Height unit to use: M or CM? ")
const height = readline.question(`What's your height? In ${heightUnit} `)