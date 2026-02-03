// OBJECT AND OBJECT CONSTRUCTORS

// object literal syntax
const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
};

// 2 ways to get information out of an object
// dot notation
let a = myObject.property; // 'Value!'
// console.log(a);

// bracket notation
// console.log(myObject["obnoxious property"]);

const variable = 'property';
let b = myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object
console.log(b);
let c = myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'
console.log(c);


// OBJECTS as a design pattern
const playerOneName= "tim";
const playerTwoName= "jenn";
const playerOneMarker= "X";
const playerTwoMarker= "O";

// example two
const playerOne= {
    name: "tim",
    marker: "X"
}
const playerTwo={
    name: "jenn",
    marker: "O"
}

function printName(player){
    console.log(player.name);
}

printName(playerOne);

// console.log(playerOneName);
// console.log(playerTwoName);

function gameOver(winningPlayer){
    console.log("Congratulations");
    console.log(winningPlayer.name +" is the winner!");
}