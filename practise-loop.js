//p-1

// for (num = 1; num <= 200; num++) {
//   if (num > 100) {
//     break;
//   }
//   console.log(num);
// }
//****************************************************** */
// let n2 = 1;
// let sum2 = 0;
// while (n2 < 20) {

//     sum2 += n2;
//   if (sum2 >= 100) {
//     break;
//   }

//   n2++;
//     console.log(sum2);
// }
// console.log("total sum2:", sum2);
// ************************************************************
// let sum = 0;
// let n = 1;

// while (true) {
//     if (sum + n >= 100) {
//         break;
//     }
//     sum += n;
//     n++;
// }

// console.log("The sum is:", sum);
// *****************************************************************
// for (let num = 2; num <= 100; num++) {
//   if (Math.sqrt(num*num) % 1 === 0) {
//       break;
//   }
//   console.log(num);
// }

// p-2
// for (let num = 1; num < 40; num++) {
//   if (num % 2 === 1) {
//     continue;
//   }
//   console.log(num);
// }

// ******************************************************

// for (let num = 55; num < 85; num++) {
//   if ( num % 2 === 1 ) {
//     continue;
//   }
//   if(num % 5 === 0){
//     continue;
//   }
//   console.log(num);
// }

// p-3
// for (num = 1; num <= 60; num++) {
//   console.log("i will");
// }
// ********************
// for((sum=0),(num = 91); num <= 129 ; num++){
//   if(num % 2 ===1){
//     sum+=num;
//   }
// }
// console.log(sum);
// ****************************
// for((num=9),(num2 = 1);num2<=10;num2++){
//   console.log(num,'*',num2, "=", num * num2);
// }
// *********************************
// for(num = 85; num >= 65; num--){
//   console.log(num);
// }
//********************************* */ 
// p-4
// let num = 5;
// let num2 =1;
// while(num2 <= 10){
//   console.log(num , '*',num2,'=',num2*num);
//   num2++;
// }
// *********************************
let num=1;
while(num <=20){
  if(num % 2 === 1){
    console.log(num);
  }
  num++;
}