const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumbers = (numbers) => numbers.reduce((acc, curr) => acc + curr);

const filterAndSum = (numbers) => {
    const filteredNumbers = numbers.filter((number) => number <= 10)
    return sumNumbers(filteredNumbers);
};

console.log(sumNumbers(numbers));
console.log(filterAndSum(numbers));