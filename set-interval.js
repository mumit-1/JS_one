setInterval(() => {
  console.log("okkk");
}, 4000);
// it will keep giving value like after every 3000 mili second until i stop it

let num = 0;
const funcX = setInterval(() => {
  num++;
  if (num > 5) {
    clearInterval(funcX);
  } // it will make the code stop after one oparation when it will match the condition
  console.log(funcX, num);
}, 1000);
