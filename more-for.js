let sum = 0;

for(i = 10;i <= 20;i++){
    sum += i;
    // console.log(i);
} 
//  console.log('sum:',sum);




// incremental loop******



for(i=1;i <=10;i++){
    // console.log(i);
}

// decremental loop ********




// for(n = 10 ; n >= 0; n--){
//     console.log(n);
// }



let total =0;
for(n = 1 ; n <= 30 ; n++){
    if(n % 5 === 0){
        console.log(n);
        total +=n;
    }
}
// console.log(total);



const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < 7; i++) {
 if (i == 5) {
 continue;
 }
 console.log(array[i]);
}