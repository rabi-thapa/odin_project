// The object shorthand notation


function User(name) {
    this.name = name;
    this.discordName = "@" + name;
}
  

function createUser(name) {
    const discordName = "@" + name;
    return { name, discordName };
}
  


// THE OBJECT SHORTHAND NOTATION
const name = "Bob";
const age = 28;
const color = "red";

// const thatObject = { name: name, age: age, color: color };
// const nowFancyObject = { name, age, color };


console.log(name, age, color);


// shorthand for console.log({ name: name, age: age, color: color })
console.log({ name, age, color });


// DESTRUCTURING

const obj= {a: 1, b: 2}

// equivalent of doing
// const a= obj.a;
// const b= obj.b;

const {a,b}= obj;




const array = [1, 2, 3, 4, 5];

// equivalent of doing
// const zerothEle = array[0];
// const firstEle = array[1];
const [zerothEle, firstEle] = array;

console.log(array);
console.log(zerothEle);
console.log(firstEle);
