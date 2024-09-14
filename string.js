const thana = `dhaka`;
const district = 'sadpur'
const bivag = new String('demra');
console.log(thana);

console.log(bivag);

console.log(district.length);
console.log(district[1]);


// string kinda works like array but not like fully array . in array we can change the value by calling his index but in array we can't do that but we can do like calling index and see the value or its lenght like array 


const text = 'TIKbo';
const text2 = 'tikbo';

console.log(text);
console.log(text2.toLowerCase());

if(text.toLowerCase() === text2.toLowerCase()){
    console.log('dhon banaiso');
}
else{
    console.log('ken banaiso');
}
// toLowercase makes the every word in lowercase 

const drink = "MOJO    ";
const drink2 = " MOJO";

if (drink.trim() === drink2.trim()){
    console.log("chikikiki");
}
else{
    console.log("yikyiyki");
}
//trim works like it will cut all the space from it's begining or at it's ending BUT not in the middle of thw word 



const test = 'abcdegfhijklmn';
const sliced = text.slice(2,4);
// console.log(sliced);
// console.log(text.slice(2,4));
// slice works like it sound and the way it work you know

const test1 = 'ABCD EFG';
const splited = test1.split('B');
console.log(splited);
console.log(test.split(' '));
// split works like it split the string when he found that value we put


const test2 = 'rohim,korim,norim,borim,lorim';
const splited2 = test2.split(',');
console.log(splited2);

const test3 = ['rohim', 'korim', 'norim', 'borim', 'lorim'];
// const joined = test3.join();
// const joined = test3.join('-');
// const joined = test3.join('|');
// console.log(joined);
//join works in array and made it look like a string 

const testname1 = 'messi';
const testname2 = 'neymar';
const madeAttached1 = testname1 +(' ')+ testname2;
const madeAttached = testname1.concat(' ').concat(testname2);
console.log(madeAttached1);
//concat made two strinf attached

console.log(testname1.includes('m')); // it cheks like the value is there or not like array