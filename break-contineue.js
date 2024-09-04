for (let i = 5; i <= 15; i++) {
  if (i > 10) {
    //it will stop  when it will match with it's result.10 isn't bigger then 10.so the resilt will be 10 also. and this only applies for break as far as i has seen.
    break;
  }
  //  console.log(i);
}

for (let i = 5; i <= 15; i++) {
  if (i >= 10) {
    // it didn't showed 10 because 10 is equal to 10 that's why it followed the condition.
    break;
  }
  //  console.log(i);
}

// let i = 1;

// while(i <= 10){
//     if(i >= 5){
//         continue;
//     }
//     console.log(i);
//     i++;
// }

for (let num = 9; num >= 0; num--) {
  if (num % 2 === 1) {
    //when the condition will fill the code for that particular value will be skipped but the rest part
    continue; //which is"num--" will continue
  }
  // console.log(num);
}

let n = 0;
while (n < 50){
    n++;
    if(n%3!==0){// this is a fucking condition. when (n%3===0) the value like 6,9,12 will skipp . and its opposite is 
        continue;//(n%3!==0). the value like 1,2,4 will not show because their vaag-sesh isn't qual to 0. 
    }
    console.log(n);
    
}