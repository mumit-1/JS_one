function sumOfTwo(a,b){
    return a+b;
}
console.log(sumOfTwo(2,3));

const sumOfTwo2 = (a,b) => a + b; 
console.log(sumOfTwo2(2,3));


// we get array's value by index or objects value


//for single paremeter and it is for array or object
const single = num => num.age;// we can give bracket or not 


// an empty paremeter function

const emptyParameter = () => Math.PI;


// for multi line function or more place-ful function we need 2nd bracket and have to add return

const multi = (a,b,c,d) => {
    sum = a + b
    minus = d - c
    return sum+minus;
}

console.log(multi(1,2,3,4));