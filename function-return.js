function olk(number){
 const result = number *2 ;
 return result;
}
olk(5);// it will not show because there is return
const output = olk(10);
console.log(output);

function boom(a,b){
    const bsum = a + b;
    return bsum;
}
boom (6,20);
const outputX = boom(289,19);
console.log(outputX);



function doMath(a){
    if(a%2===0){
        return true;
    }
    
        return false;
    
}
//both are same
// function doMath(a){
//     if(a%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
const outX = doMath(32874);
console.log(outX);
console.log(doMath(4));
console.log(doMath(7));
console.log(doMath(5));


function bigMath(a,b){
    const sum = a + b;
    const diff = b - a;
    const multi = sum * diff;
    const divide = multi / 2;
    return divide;

}
// bigMath(4,5);
console.log(bigMath(29,3));