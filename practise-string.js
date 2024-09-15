///p-1
const test1 = 'Count how many times a string has the letter'
const splited = test1.split('a').length -1
console.log(splited);

/// split made the string into array which have four index . cause three split made it four index . after giving '.length' after ".split('a')" , we are counting the splited array not the count of how many time we splited.

///p-2
let test2 = "Count how many times  string hs the letter  or "

const splited2 = test2.split('a')
const splited3 = splited2.splice('A')
// console.log(splited3);

//p-3
// console.log(test2.includes('a','i','o','u','e'));




//p-4
if(test2.includes('w')){
    let newX = test2.replace('w','x') // it replce with first letter to 2nd letter
    console.log(newX);
}


//p-5
// console.log(test2.toUpperCase());



console.log(test2.indexOf('w'));
