// it works like an kinda object . like i put the value from outside to a property or key .

class Pop { //the name starts with capital letter
  country = "bangladesh";
  size = 'small'
  constructor(name, subject) {  // constructure needed and this is the rule
    this.name = name; // this is needed and it is the fix rule
    this.subject = subject; 
  }
  lecture(ok) { // it is a function and we can add more function in a class and we can call them by one to another
    console.log(`very confusing ${ok} ${this.name} `); // we call a value from constructure by adding "this."
  }
  lecture22() { 
    this.lecture; // to call an function we need to add "this." infront of them.
  }
}

console.log(new Pop("tom", "chem")); // by adding  "new" we are getting the object value from the class

new Pop().lecture('tuki');



//example and more

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  method(){
    console.log(`sleeping ${this.name}`);
  }
}
const storing = new Person('kodom',34)
storing.method(); 