// map works like instead of "for(const value of array)" . it gets an array then it will take every value each and do the work then put every value in a array will give back the result.

const array = [1, 2, 3, 4, 2, 4, 23, 3, 34];

function double(num) {
  return num * 2;
}

const result = array.map(double); //ik the functuion calling style is strange

console.log(result);

// => with arrow function

const double2 = (num) => num * 2;
console.log(array.map(double2));

// now making a function in the map

console.log(array.map((num) => num * 2));

// with string array;

const name = ["tom", "jorge", "steve", "mark", "laura"];
console.log(name.map((value) => value.length));
console.log(name.map((value) => value[0]));
