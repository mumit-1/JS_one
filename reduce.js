const array = [1, 2, 3, 4, 56, 7, 7, 4];

const result = array.reduce((p, c) => p + c, 0); //  it gives the sum of numbers in the array . "c" stands for new value and "p" stands for the storing the sum.
console.log(result);
