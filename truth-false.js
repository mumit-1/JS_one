/*
truth =>
    1.true
    2. any string without empty
    3. any number which can be (+ve,-ve)
    4.'0','false'
    5.{} (empty object)
    6.[] (empty array)

false => 
    1.false
    2.0
    3.'' (epmty string)
    4.undefined
    5.null
*/
const x = null;
if(x){
    console.log('value is truthy');
}
else{
    console.log('value is falsey');
}

console.log(true + false);

const value1 = 1;
const value2 = true;
if(1==true){
console.log('value is true') 
}
else{
console.log('value is false')
}