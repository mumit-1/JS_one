//p-1
function multiFour(a, b, c, d) {
  multi = a * b * c * d;
  return multi;
}
console.log(multiFour(2, 4, 5, 8));

//p-2
function oddeven(a) {
  if (a % 2 === 0) {
    result = a * 2;
  } else {
    result = a / 2;
  }
  return result;
}

console.log(oddeven(6));

//p-3
function make_avg(array1) {
  let sum = 0;
  for (const num of array1) {
    sum = sum + num;
  }
  totalNum = array1.length;
  result = sum / totalNum;
  return result;
}
const input1 = [3, 4, 57, 42, 5, 4565, 35, 3, 3, 3, 3, 1, 7];
console.log(make_avg(input1));

//p-4
function count_zero(string1) {
  let arrayX = string1.split('');
  let arrayM = [];
  for (const value of arrayX) {
    if (value === '0') {
    
      arrayM.push(value);
    }
  }
  result = arrayM.length;
  return result;
}
const binary = "10100101";
console.log(count_zero(binary));



  
