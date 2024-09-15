//primitive
const laptop = true;
const laptopName = 'acer'
const laptopPrice = 800;

// njon-primitive
const device = {
    'device Type': 'laptop',
    deviceFeature: ['wifi','bluetooth','camera','nitro'],
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
/// delete function
delete device.deviceWeight;
//changing value of property
device.devicePrice = 1200;
console.log(device);

device['device Type'] = 'pc';
console.log(device);

// device['deviceFeature'] = ['booom','keyboard']
// console.log(device);


// const ghuirraAilam = 'deviceFeture';
// device[ghuirraAilam] = ['gggggggh']
// console.log(device);

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




//keys
const keys = Object.keys(device);
console.log(keys);


//values
const values = Object.values(device);
console.log(values);



device.deviceFeature[2] = 'gaming'
console.log(device.deviceFeature[2]);



