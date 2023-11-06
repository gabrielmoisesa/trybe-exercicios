const readline = require('readline-sync')

const calculateBMI = (weight, unit, height) => {
  const bmi = unit.toUpperCase() === 'M' 
  ? weight / height ** 2 
  : weight / (height / 100) ** 2;

  return bmi.toFixed(1);
}

const classifyBMI = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else if (bmi >= 30 && bmi < 34.9) {
    return "Obesity class I";
  } else if (bmi >= 35 && bmi < 39.9) {
    return "Obesity class II";
  } else if (bmi >= 40) {
    return "Obesity class III";
  } else {
    return "Error: BMI out of range";
  }
};

const weight = readline.questionInt("What's your weight? In KG ")
const heightUnit = readline.question("Height unit to use: M or CM? ")
const height = readline.question(`What's your height? In ${heightUnit.toUpperCase()} `)

const bmi = calculateBMI(weight, heightUnit, height)

console.log(`\nYour BMI is: ${bmi}`);
console.log(`Your classification is: ${classifyBMI(bmi)}`);