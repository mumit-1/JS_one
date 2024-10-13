const date = new Date();
console.log(date);
// console.log(date.toLocaleString('en-GB'));
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2025, 0,26);// here middle zero stands for the index of month
console.log(specificDate);
specificDate.setMonth(10)
console.log(specificDate.toLocaleString());


const getTime = (value) =>{
 const hour = parseInt(value / 3600 );
 const remainingSecHour = value % 3600;
 const min = parseInt(remainingSecHour / 60);
 const remainingSecMin = remainingSecHour % 60 ;
 
 return `${hour} hour ${min} min ${remainingSecMin} second ago`
}

console.log(getTime(256732));