const objectX = {
    name: 'fatakesto',
    style: 'fata',
    age: '30',

}

const {style} = objectX;   // right side i am puuting the value where it came from

console.log(style);


const {style:pupil} = objectX;   // we can put the value to a new word or so called variable

console.log(pupil);