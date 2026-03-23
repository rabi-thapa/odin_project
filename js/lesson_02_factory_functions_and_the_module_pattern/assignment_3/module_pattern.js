// Module is created as an IIFE

const SomeModule= (function(){})();

// const Formatter= (function(){
//     console.log("Start");
    
//     const log= (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// })();

// this will log Start
// TypeError: Cannot read properties of undefined (reading 'log')

// Formatter.log("Hello"); 
// Why?
// Because our module doesn't return anything, so it is 
// actually undefined, even though the code inside will execute


const Formatter = (function(){
    const log= (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const makeUpperCase= (text)=>{
        log("Making uppercase")
        return text.toUpperCase();
    };
    
})();