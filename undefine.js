// no. 1 : if we dont set any kind of value in a variable .

let a;
console.log(a);

// no . 2 : if dont put return in a function.

function mess(a,b){
 const sum = a + b;
}
console.log(mess(1,2));

// no . 3 : we dont give that amount of arguments which amount of parameters there are . 

function lessParameter(a,b,c,d){
    console.log(a,b,c,d);
}
lessParameter(2,3) // output : 2 3 undefined undefined
console.log(lessParameter()); // output : undefined undefined undefined undefined

// no . 4 : if we don't define the return on the right side.

function numFour(a,b){
    if(a<0 || b<0){
        return
    }
    return a + b;
}
console.log(numFour(1,-2));

// no . 5 : if we call an non-existing property from object

const aPerson ={
    name : 'boltu',
    age : 23
}
console.log(aPerson.salary);

// no . 6 : if we call an index from array which is beyond it's length.

const arrayX =[2,4,56,7,8,4,5,2]
console.log(arrayX[200]);

// no . 7 : if we delete an index from array then call it

delete arrayX[1];
console.log(arrayX[1]);

// no . 8 : 
const set = undefined;

// no . 9 :
console.log(void 0); 

console.log(typeof undefined);