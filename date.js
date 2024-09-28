const date = new Date();
console.log(date);
// console.log(date.toLocaleString('en-GB'));
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2025, 0,26);// here middle zero stands for the index of month
console.log(specificDate);
specificDate.setMonth(10)
console.log(specificDate.toLocaleString());