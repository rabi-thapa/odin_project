// let x = {};
let x = new Object();

// Console
Object.getPrototypeOf(x);
x.__proto__;


// Prototype Inheritance
/*
When you attempt to access property of an object, JS will first search on the object itself, and if it is not found, it will search the object's [[Prototype]]. If after consulting both the object and its [[Prototype]] still no match is found, JS will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.

At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results is null.

In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().
*/

// Console
x.toString();

let y= [];

// Console
y.__proto__;
y.__proto__.__proto__;

// Console
y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true

// Console
Array.prototype.isPrototypeOf(y);      // true
Object.prototype.isPrototypeOf(Array); // true

// Console 
y instanceof Array; // true


// Initialize a constructor function for a new Hero
function Hero(name, level){
    this.name= name;
    this.level= level;
}

/*
The this keyword refer to the new instance that is created, so setting this.name to the name parameter ensures that new object will have a name property set.
*/

// let hero1 = new Hero('Rabi', 1);
// console.log(hero1);

// Console
// Object.getPrototypeOf(hero1);

// Add greet method to the Hero prototype
Hero.prototype.greet= function(){
    return `${this.name} says hello.`
}

// Console
// hero1.greet();

// Initialize Warrior constructor
function Warrior(name, level, weapon){
    Hero.call(this, name, level);

    // Add a new property
    this.weapon= weapon;
}

// Initialize Healer constructor
function Healer (name, level, spell){
    // Chain constructor with call
    Hero.call(this, name, level);

    // Add a new property
    this.spell = spell;
}

Warrior.prototype.attack = function(){
    return `${this.name} attacks with the ${this.weapon}`
}

Healer.prototype.heal= function(){
    return `${this.name} casts ${this.spell}`
}

const hero1 = new Warrior('Bjorn', 1, 'axe')
const hero2 = new Healer('Kanin', 1, 'cure') 


// Console
hero1
hero2
hero1.attack(); // "Bjorn attacks with the axe."
// hero1.greet(); //Uncaught TypeError: hero1.greet is not a function


/*
Prototype properties and methods are not automatically linked when you use call () to chain constructors. We will use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer constructors, making sure to put it before any additional methods.
*/


Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Console
// hero1.greet(); //"Bjorn says hello."