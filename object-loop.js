const mobile = {
 brand: 'samsung',
 model: 'm52',
 ram: 8,
 rom: 128,
}



// for in = object
// for of = array
// for(const keys in mobile){
//     console.log(keys);
//     console.log(mobile[keys]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key,'-',mobile[key]);
}

