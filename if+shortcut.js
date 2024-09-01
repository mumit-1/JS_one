var messiWC = 1;

if(messiWC <= 0){
    console.log('he is not goat')
}
else{
    console.log('HE IS GOAT')
}

messiWC <= 0 ? 'he is not goat' : 'he is goat';


//  complex 

const salary = 20000;
const isBCS = true;
const height = 65;
const hasCar = false;

if(((salary > 25000) || (isBCS == true)) && ((hasCar == true) || (height > 70))){
    console.log('raji')
}
else(
    console.log('vaaag')
)




//  multi level (  else-if  )



const price = 6000;

// if(price >=5000){
//    const discount = price * 10 / 100;
//    const payAmount = price - discount;
//    console.log(payAmount)
// }
// else if (price >= 2000){
//     const discount = price * 5 / 100;
//    const payAmount = price - discount;
//    console.log(payAmount)
// }
// else {
//     console.log(price);
// }

// price >= 5000 ? console.log(price - ( price * 10 / 100)) : console.log(price);
price >= 5000 ?  price * 10  : 0;


// nested if


const money = 420;

if(money > 300){
    console.log('movie dekhte hobe')
}
else {
    if (money >200){
        console.log('biriyani khabo')
    }
    else{
        if(money > 100){
            console.log('Burger khabo')
        }
        else{
            if(money > 50){
                console.log('shingara khabo')
            }
            else{
                if(money > 10){
                    console.log('kola kha')
                }
                else{
                    if(money >0){
                        console.log('Chocolate kha')
                    }
                    else{
                        if(money < 0){
                            console.log('gorib')
                        }
                    }
                }
            }
        }
    }
}


money > 300 ? console.log('movie') : money > 200 ? console.log('biriyani') : console.log('gorib'); // short cut





let taka = 1200;
const leader = false;
if(leader === true){
    if(taka > 1000){
        discount = taka - 500;
        console.log(discount);
    }
    else{
        console.log(taka);
        
    }
}
else {
    taka += 100;
    console.log(taka)
}


