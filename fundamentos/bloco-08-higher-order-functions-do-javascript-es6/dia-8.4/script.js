const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const even = (number) => number % 2 === 0;
const sumsEven = (currentValue, even) => currentValue + even;

 const sumNumber = (number) => numbers.filter(even).reduce(sumsEven);

 console.log(sumNumber(numbers));