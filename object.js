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
delete device.deviceWeight; // no.1

const {deviceWeight, ...short} = device // no. 2
// console.log(short);

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




//array of array


const arrayOFarray = Object.entries(device);
console.log(arrayOFarray);


//freeze

Object.freeze(device); //it will like stop the array after this line from further any kind of change



// seal

Object.seal(device); // after seal effect you can change the value but you can't delete or add any keys or properties



/// special case of calling property from the object => "." vs "[]"

const boomX = {
    class : 1,
    "roll-number" : 23,
    23 : kuddus,
    "he is a good boy" : true
}
// console.log(boomX.23); this will not work 
console.log(boomX["23"]);  //correct
console.log(boomX["he is a good boy"]);