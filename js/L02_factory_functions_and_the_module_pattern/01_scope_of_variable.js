// This is a global variable
let globalAge= 23;

// This is a function - and hey, a curly brace indicating a block

function printAge(age){
    // This is a function scope variable
    var varAge= 34;

    // This is yet another curly brace, and thus a block
    if(age> 0){
        // This is a block-scoped variable that exists
        // within its nearest enclosing block: the if's block
        const constAge= age * 2;
        console.log(constAge);
        
    }
}


printAge(globalAge)

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);
