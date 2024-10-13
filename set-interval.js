// setInterval(() => {
//   console.log("okkk");
// }, 4000);
// it will keep giving value like after every 3000 mili second until i stop it

let num = 4;
const funcX = setInterval(() => {
  num--;
  if (num < 2) {
    clearInterval(funcX);
  } // it will make the code stop after one oparation when it will match the condition
  console.log( num);
}, 1000);


