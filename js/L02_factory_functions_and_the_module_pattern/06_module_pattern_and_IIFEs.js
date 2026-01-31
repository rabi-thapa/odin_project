// This is an IIFE! Though not particularly useful, of course.
(() => console.log('foo'))();

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
  
    return { add, sub, mul, div };
  })();
  
let a=  calculator.add(3,5); // 8
let b=  calculator.sub(6,2); // 4
let c=  calculator.mul(14,5534); // 77476

console.log(a);
console.log(b);
console.log(c);
