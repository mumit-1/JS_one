(setTimeout(() => {
    console.log('lazy'); // we had to add function on the first set or it will not work.
},5000))

// it is asyncronous . it is not sequential . like it will give result after all work is done or we can say in last if we dont give time in milisecond.

// to stop this we can use clearTimeout and idk how it works