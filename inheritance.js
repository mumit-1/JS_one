// inheritance works with class . it's like using the class again and again from calling it by addidng something . so base class works like a prototype or blue print . and JS is a prototypical language.


class Vehichle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    method(){
        console.log('run');
    }
}

//inheritence
class Car extends Vehichle{ // we had to type "extends" to connect the main class
    constructor(name,price,condition,seat){
        super(name,price); // by super we are suring that we are taking those from main class
        this.condition = condition;
        this.seat = seat;
    }
    // it had to be an indiffrent condition everytime
    methodX(){

    }
} 

//example - 2

class Rickshaw extends Vehichle{
    constructor(name,price,feature,tire){
        super(name,price);
        this.feature = feature;
        this.tire = tire;
    }
    methodY(){
        
    }
}