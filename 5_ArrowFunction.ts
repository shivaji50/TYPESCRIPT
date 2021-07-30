/*
Application which demonstrates conncept of Arrow functions.

Arrow Functions / Lambda Functions :
Lambda refers to anonymous functions in programming. 
Lambda functions are a concise mechanism to represent anonymous functions. 
These functions are also called as Arrow functions.
*/

// Lamda Expression
// It is an anonymous function expression that points to a single line of code.
var sd = (x:number)=> 10 + x 
console.log(sd(101));

// Lamda Statement / Arrow Function
// Lambda statement is an anonymous function declaration that 
// points to a block of code.

var sd1 = (x:number)=> {    
    console.log("Shivaji das");
    console.log(x)  
 } 
 sd1(100);


