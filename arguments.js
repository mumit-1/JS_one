function sum (a,b,c){
     console.log(arguments);
     console.log([...arguments]); // making the object  into an perfect array
     sum = a + b + c;
     return sum;
}

console.log(sum(2,3,4,5,6,7));

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));