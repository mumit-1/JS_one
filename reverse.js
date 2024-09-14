const sentence = "i am a racer";
let reverse = '';
for (const letter of sentence) {
  // console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

// giving clg outside of the loop will give one answer or it will give so many results gradually

// this "" rev = letter + reverse "" made the sentence reverse 
let rev = ''
for (let i = 0; i<sentence.length ; i++){
//    console.log(i);
// console.log(sentence[i]);
const letter = sentence[i];
rev = letter + rev;

}
console.log(rev);


// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);



// '' <---- this thing call empty string. in join it can be used as no coma . in split it can be used as showing result without giving each of them array.
