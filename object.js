//primitive
const laptop = true;
const laptopName = 'acer'
const laptopPrice = 800;

// njon-primitive
const device = {
    'device Type': 'laptop',
    deviceWeight: 2,
    devicePrice:800,
    deviceHardware:{
        processor: 'intel',
        gpu:{
            brand:'RTX',
            model:3050,
        },
    },
    // boom: function() {
    //     console.log('ran');
        
    // }

};
// device.boom();
// console.log(device.deviceType);

const income = device.devicePrice;
console.log(income);


console.log(device['deviceHardware']);

const good = device['deviceHardware']
console.log(good);


console.log(device['device Type']);
console.log();


//if i want to give space in the value's name i gave i had make them in ---> '' that . and to declare or use them we must use third bracket . we can't use full stop . and for fulstop declaring property i can't give space to my value'e name.
