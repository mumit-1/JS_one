const numbers = [23, 33, 44, 13, 78, 10, 999]; // it used as string to but use - '  '
console.log(numbers.length); // getting total how many index there are
console.log(numbers);
console.log(numbers[0]);// getting the value of index number 1.

let fourth = numbers[1]; // giving a value to a element by index
console.log(fourth);

 numbers[1] = 1000;  //setting a new value in array  
console.log(numbers);

numbers.push(213); // adding in the array from last
console.log(numbers);

let out1 = numbers.pop() // extracting indexes from last
console.log(out1);
console.log(numbers);
numbers.pop()
console.log(numbers);

let out2 = numbers.shift() // works like ".pop" but from first index
console.log(out2);
console.log(numbers);
numbers.unshift(69) // works like ".push" but from begining 
console.log(numbers);

console.log(numbers.includes(1000)); // ".includes" work as it wiil search the number or value in the array . if it is there then ans is true or false.
console.log(numbers.includes(12));


//  array with if-else

if (numbers.includes(133)){
    numbers[1] +=1
}
else{
    numbers[1] *=2
}
console.log(numbers);


const num1 = [];
const num2 = 15;
const string = 'booom';

console.log(Array.isArray(num1)); // checking that is that array or not cause array have - [] .
console.log(Array.isArray(num2));
console.log(Array.isArray(string));
console.log(Array.isArray(numbers));



console.log(numbers.indexOf(11)); // this tells the index number of the value .-1 means it is not in the array cause in index numbering -1 is impossible. 
console.log(numbers.indexOf(13));

console.log(numbers.join('|')); // this shows the values in different way .the way option i can give is not bad

const numbersTwo = [85, 96, 28];
console.log(numbers.concat(numbersTwo));// that adds two array and make one

console.log(numbers.slice(2,5)); // slice works like it will start from starting index number but it will stop before the index ending number and thus we will see index number 2, 3, 4.


