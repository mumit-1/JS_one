let burgerPrice = 250;

if(burgerPrice > 500){
    burgerPrice
}
else{
   burgerPrice += 30;
}
console.log(burgerPrice);

// BMI
let weight = 200000;
let height = 10;

if(weight > 0 && height > 0){
   bmi = weight  / (height)^2
   if(bmi < 18.5){
    console.log('You are underweight');
   }
   else{
       if(bmi >= 18.5 && bmi <=24.9){
        console.log('you are normal.');
         }
         else{
            if(bmi >=25 && bmi <= 29.9){
            console.log('you are overweight.');
              }
           else{
            console.log('you are obese');
               }
            } 
       }
}

// GRADE

var mark = 80;

if(mark >= 90){
    console.log('A');
}
else if (mark >= 80) {
    console.log('B');
}
else if (mark >= 70) {
    console.log('C');
}
else if (mark >= 60) {
    console.log('D');
}
else {
    console.log('F');
}



// bitch

var myMark = 80;
var friendMark = 90;

if(myMark >= 80 ){
    if(friendMark > 80){
        console.log('go to lunch');
    }
    else if (friendMark >= 60 ){
        console.log('wish him luck');
    }
    else if(friendMark >=40 ){
        console.log('text unseen');
    }
    else{
        console.log('block him');
    }
}
else{
    console.log('go home and sleep');
}
var myMark = 80;
var friendMark = 90;
myMark >= 80 ? friendMark >= 80 ? console.log('eat') : friendMark >= 60 ? console.log('wish luck') :friendMark >= 40 ? console.log('unseen') : console.log('block')  : console.log('go home') ;



// ticket fare

var ticket = 800;
var isKid = false;
var student = true;
var seniorCitizen = false; 

if( isKid === true || student === true || seniorCitizen === true ){
  if(isKid === true){
    console.log('free');
  } 
  else if( student === true ){
    ticket = ticket * 50 / 100;
    console.log(ticket);
  } 
  else{
    ticket = ticket * 15 / 100;
    console.log(ticket);
  }    
}
else{
    console.log(ticket);
}


//  num 

var num1 = 500;
var num2 = 30;
var result = 'result';

if(num1 > num2){
    result = num2 * 2;
}
else{
    result = num2 + num1;
}
console.log(result);
