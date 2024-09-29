// filter works like map but just for condition

const array = [1, 23, 3, 56, 67, 8, 3, 4, 5, 76];

console.log(array.filter((num) => num > 50));

//find : it work like filter but it will just give the first value which will make the conditon then it will stop and it gives a number not an array

console.log(array.find((num) => num > 50));
