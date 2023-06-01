function sumNumbersFromString(str) {
  const regex = /\d+/g;
  const matches = str.match(regex);
  let sum = 0;

  if (matches) {
    for (let i = 0; i < matches.length; i += 1) {
      sum += parseInt(matches[i], 10);
    }
  }

  return sum;
}

function hydrate(numeroBebida) {
    const sum = sumNumbersFromString(numeroBebida);
    if (sum <= 1) {
        return `${sum} copo de água`;
    }
    return `${sum} copos de água`;
}

module.exports = hydrate;