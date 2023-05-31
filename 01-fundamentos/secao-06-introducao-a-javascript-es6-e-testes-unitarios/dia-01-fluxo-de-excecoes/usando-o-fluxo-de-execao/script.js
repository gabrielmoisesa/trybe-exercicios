const checkNumber = (n1, n2, n3, n4) => {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        throw new Error('É necessário digitar um número!');
    }
}

const arithmeticAverage = (s1, s2, s3, s4) => {
    try {
        checkNumber(parseInt(s1, s2, s3, s4));
        return (s1 + s2 + s3 + s4) / 4;
    } catch (error) {
        return error.message;
    }
}

console.log(arithmeticAverage(1, '7', 3, 4));