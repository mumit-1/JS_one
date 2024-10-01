function greeting(greetNight,name){
 greetNight(name)
}

function greetNight(name){
    console.log(`greet first ${name}`);
}
function greetNoon(name){
    console.log(`greet second ${name}`);
}
function greetMorning(name){
    console.log(`greet third ${name}`);
}

greeting(greetMorning,'rasel');