function Player(name, marker){

    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.name= name;
    this.marker= marker;
    this.sayName= function(){
        console.log(this.name);
    }
}

const player1= new Player('steve', 'X')
const player2= new Player('also steve', 'O');

let a = Object.getPrototypeOf(player1) === Player.prototype; // returns true
let b = Object.getPrototypeOf(player2) === Player.prototype; // returns true
console.log(a);
console.log(b);


Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 
player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
 

let c= Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
console.log(c);



// Output may slightly differ based on the browser
let d = player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
console.log(d);