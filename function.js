function laptop() {
  console.log("boooom2");
  console.log("boooom24");
  console.log("boooom00");
  console.log("boooom12");
}
// laptop();
// console.log("jikijik0");
// console.log("jikijik6");
// console.log("jikijik4");
// console.log("jikijik2");
// laptop();

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

function square(a) {
  console.log(a * a);
}
square(5);

function sumBig(a, b, c, d, e, f) {
  console.log(a + b + c + d + e + f);
}
sumBig(4, 5, 32, 5, 6, 7);

function doubled(number) {
  console.log(number * 2);
}
const age = 12;
const price = 200;
const time2 = 12;
doubled(age);
doubled(price);
doubled(time2);

function difference(a, b) {
  console.log(a - b);
}
let goalX = 3;
let goalY = 5;
difference(goalX, goalY);

///function with string*********************

function stringX(str) {
  console.log(str);
  const wordCount = str.length;
  console.log(wordCount);
  if (wordCount % 2 === 0) {
    console.log("this is fucking even");
  } else {
    console.log("this cant be even");
  }
}
stringX("boom");
stringX("boomd");
stringX("boomtt");

function optionX(a, b) {
  if (b) {
    console.log(a * 2);
  } else {
    console.log(a * 4);
  }
}
optionX(5, true);
optionX(5, false);

//array
function arrayX(a) {
  console.log(a.length);
}
arrayX([555, 24, 86, 135, 367, 32, 3246, 7, 6, 3, 4]);


function sumBig1(numbers){
  let sum = 0;
  for (const num of numbers){
    console.log(num);
    sum = sum + num;
  }
  return sum;
}
const drop = [56,564,6754,5334,3,5,345,56]
const sumY = sumBig1(drop);
console.log('sum of the array',sumY);




// function evnNum(apple){
//   let arrayF = []
//   for(const value of apple){
//     if (value % 2 === 0){
//       console.log(value);
//       arrayF.push(value)
//     }
//   }
//  return arrayF
// }
// const givenArray = [4,42,65,2,5,7,9,3,1]
// const evnArray = evnNum(givenArray);
// console.log('even numbers',evnArray);





function evnNum(apple){

  let sum = 0;
  for(const value of apple){
    if (value % 2 === 0){
      console.log(value);
      sum = sum + value;
    
    }
  }
return sum
 
}
const givenArray2 = [4,42,65,2,5,7,9,3,1]
const evnArray2 = evnNum(givenArray2);
console.log('even numbers sum',evnArray2);