// Chapter 1: Scope Quiz
// function foo(a) {
//     var b = a;
//     return a + b;
// }

// var c = foo( 2 );
// 1. LHS lookups: 
// b =, c =, a = 2
// 2. RHS lookups:
// foo(2), = a;, a + b -- breaks into 2: a +, + b

// function foo(a) {
//     console.log( a + b );
//     b = a;
// }

// foo( 2 );

// Chapter 3: Function vs. Block Scope
// IIFE- Immediately Invoked Function Expression.
//Ex: (function foo(){

//     var a = 3;
//     console.log( a ); // 3

// })();  -() around function make it an expression and adding "();" to the end invokes the function 
// immediately after it is defined

// Chapter 5: Scope Closure
// Closures happen as a result of writing code that relies on lexical scope. They just happen. You do not even 
// really have to intentionally create closures to take advantage of them. Closures are created and used for you 
// all over your code. What you are missing is the proper mental context to recognize, embrace, and leverage 
// closures for your own will.

// The enlightenment moment should be: oh, closures are already occurring all over my code, I can finally see them now. 
// Understanding closures is like when Neo sees the Matrix for the first time.


