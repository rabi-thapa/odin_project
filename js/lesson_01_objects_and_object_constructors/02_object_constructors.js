
// When you have object that you need to duplicate like our player or inventory items
// Create them using object constructor
function Player(name, marker){
    this.name= name;
    this.marker= marker;
}

// call function with new keyword
const player= new Player('steve', 'X');
console.log(player);


// As constructors are just regular functions, they could be called without using new by mistake, which would cause hard-to-track error. To prevent that, you can use the new.target meta-property
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

// const player1= new Player('steve', 'X')
// const player2= new Player('also steve', 'O');
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'

