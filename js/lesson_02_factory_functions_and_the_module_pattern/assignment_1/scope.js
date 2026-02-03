// console.log('It works!');


// GLOBAL VARIABLES
// const first = 'wes';
// let second = 'bos';
// var age = 100;


// Console
// window.first //undefined
// window.second //undefined
// window.third //age

// var variables are attached to the window object and they are globally scoped, and const and let variables when declard like the example above are still globally scope, they are not just attached to the window.


function sayHi() {
    console.log('hi!');
}

// Console
// sayHi()
// window.sayHi()

// Why it is available at window.sayHi()?
// Because anything that is in the global scope is attached to the window object with the exception of const and let variables.



// FUNCTION SCOPING
const age = 100;
function go() {
    const age = 200;
    const hair = 'blonde';
    console.log(age);
    console.log(hair);
}
// go();
// console.log(age);
// console.log(hair); //Uncaught ReferenceError: hair is not defined


// BLOCKING SCOPING

// if (1 === 1) {
//     const cool = true;
//   }
// console.log(cool); //Uncaught ReferenceError: cool is not defined

// if (1 === 1) {
//     var cool = true;
// }
// console.log(cool);


// if (1 === 1) {
//     let cool = true;
// }
// console.log(cool); ////Uncaught ReferenceError: cool is not defined

// let cool;
// if (1 === 1) {
//     cool = true;
// }
// console.log(cool);

// More reliastic example
// function isCool(name) {
//     let cool;
//     if (name === 'wes') {
//         cool = true;
//     }
//     console.log(cool);
//     return cool;
// }


// for (var i = 0; i < 10; i++) {
//     console.log(i);
//  }
//  Console
// i //10

// We have this random variable that is out floating called i, which should have been contained within the for loops but because it's a var, it has leaked outside.

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//  //  Console
// i // VM15809:1 Uncaught ReferenceError: i is not defined



// To go back to our example earlier with isCool(), we could have also solved it by changing the cool variable to a var


function isCool(name) {

    if ("wes" === 'wes') {
        var cool = true;
    }

    console.log(cool);
    return cool;
}


// isCool("wes");
// console.log(cool); //ReferenceError: cool is not defined

// var variables are not block scoped, they are function scoped.

//That means they are available outside of the if statement block, but they are only available inside of the isCool() function.

// Scope look-up
// const dog= 'snikers';
// function logDog(){
//     console.log(dog);
// }

// function go(){
//     const dog= 'sunny';
//     logDog();
// }
// go();


// Lexical and Static Scoping
// JS has lexical scoping
// That means - the way that variable look-up or scope look-up happens, is where the functions are defined, not where they are run.

// So even though the logDog() function is run inside of another function which has locally scoped dog variable, it doesn't care about where it's run, it cares about where it is defined.


// const dog = 'snickers';

// function logDog(dog){
//     console.log(dog);
// }

// function go(){
//     const dog= 'sunny';
//     logDog('Rufus')
// }

// go();


function logDog(dog){
    // dog= 'ABCD'
    this.dog= dog
    console.log(dog);
}

logDog('abc')


