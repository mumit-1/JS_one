const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers.reverse());
const rev = [];
for (const num of numbers) {
  // console.log(num);
  rev.unshift(num);
}
// console.log(rev);
const rev2= []
for (let i = numbers.length - 1; i >= 0; i--) {
    rev2.push(numbers[i])
}
console.log(rev2);

const rev3=[]
for(i=0;i<numbers.length;i++){
    const numXX = numbers[i]
    console.log(numXX);
    rev3.unshift(numXX)
    //rev3.unshift(numbers[i]) // shortcut
    // console.log(rev3);  // unshift is used for putting number front gradually
}
console.log(rev3);

// so we are pushing value to a array or be like adding value in arrray by ".push"