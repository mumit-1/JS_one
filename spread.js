// from an array we can't get the value of numbers so we use spread oparators

const arrayX = [2, 4, 5, 23, 12, 24, 34, 3];
console.log(Math.max(...arrayX));

// in line 7 and 8 both are some
console.log([...arrayX]); // first i get the value from the array then made it an array
console.log(arrayX);

// coping the array :

// false copy
const friends = [1, 32, 4, 5, 4, 2, 4];
const bondu = friends;
// bondu.push(45, 100000);
console.log(bondu);
console.log(friends); // i added in bondu but not in the friends though it is adding in the friends array

// correct copy : we have to do it before the push extra value

const correctX = [...bondu];
console.log(correctX);
bondu.push(45, 100000);
console.log(correctX);

// if i want to add in that correct form we just have to give coma then a number or a string . even we can connect two different arrays like concat.

const correctY = [...friends, "ok"];
console.log(correctY);
