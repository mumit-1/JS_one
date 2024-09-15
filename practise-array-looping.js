//p-1
const colors = ["red", "blue", "green", "yellow", "orange"];

let rev = [];
for (i = 0; i < colors.length; i++) {
  rev.unshift(colors[i]);
}
console.log(rev);

//p-2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const arrayX = [];
for (const num of numbers) {
  for (i = num; i % 2 === 0; i++) {
    arrayX.push(i);
  }
}
console.log(arrayX);


//p-3
var names = ['Tom', 'Tim', 'Tin', 'Tik']
console.log(names.join(''));


//p-4
const statement = 'I am a hard working person'
let splited = statement.split(' ')
// console.log(splited);
let rev2=[]
for(i = 0; i < splited.length; i++){
     rev2.unshift(splited[i])
}
console.log("'"+rev2.join(' ')+"'");