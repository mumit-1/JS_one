function sumOfTwo(a,b){
    return a+b;
}
console.log(sumOfTwo(2,3));

const sumOfTwo2 = (a,b) => a + b; 
console.log(sumOfTwo2(2,3));


// we get array's value by index or objects value


//for single paremeter and it is for array or object
const single = num => num.age;// we can give bracket or not at the parameter 


// an empty paremeter function

const emptyParameter = () => Math.PI;


// for multi line function or more place-ful function we need 2nd bracket and have to add return

const multi = (a,b,c,d) => {
    sum = a + b;
    minus = d - c;
    return sum+minus;
}

console.log(multi(1,2,3,4));


const arrayX = num => {
    let newArray = [];
    for(const value of num){
        if(value.length % 2 === 0){
            newArray.push(value)
        }
    }
    return newArray
}
console.log(arrayX(['akiba','roki','saki','rafi','sajeed','tabik']));

const arrayY = num => {
    let sum = 0;
    for(const value of num){
        newValue = value*value;
        sum = sum + newValue;
    }
    const average = sum / (num.length);
    return average;
}

console.log(arrayY([1,2,3,4,45,5,6]));



const maxArray = (array,array2) =>{
    newArray = [...array,...array2];
    maxValue = Math.max(...newArray);
    return maxValue;
}

console.log(maxArray([2,3,54,6,3,8],[2,344,5,6,1,56,7]));