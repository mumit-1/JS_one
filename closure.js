//closure is a function in a function .

function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const watch = stopWatch(); //every const will have there own different value which depends on how many time we called them
const watch2 = stopWatch();
const watch3 = stopWatch();

console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());

console.log(watch2());
console.log(watch2());
console.log(watch2());


console.log(watch3());
console.log(watch3());


