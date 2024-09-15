///p-1
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
// console.log(colors["golden rod"])

///p-2
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.passenger = 5; //adding new property in the object
// console.log(car);

//p-3
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
// console.log(student.physics.marks);

///p-4
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
const keys = Object.keys(student2);
// console.log(keys.length);

///p-5
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
const key = Object.keys(myObject);
console.log(key);
const valueX = Object.values(myObject);
console.log(valueX);




for (let i = 0; i < valueX.length; i++) {
  console.log("key: " + key[i] + " | type: " + typeof valueX[i]);
}

// for (const i of key) {
//   firstValue = "key:" + i;
//   console.log(firstValue);
//   for (const i2 of valueX) {
//     secondValue = "type:" + typeof i2;
//     console.log(secondValue);
// }
// }
// for (const i2 of valueX) {
//     secondValue = "type:" + typeof i2;
//     console.log(secondValue);
// }
