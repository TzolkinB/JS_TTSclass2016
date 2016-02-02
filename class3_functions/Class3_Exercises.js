// Tip Calculator  
// var billAmount = 100.40;

//  function gratuity() {
//  	return (billAmount*0.2);
//  }

// function totalWithGrat(amount) {
// 	return gratuity() + amount;
// }

//  console.log("Your total with gratuity is: $" + totalWithGrat(billAmount).toFixed(2));

//Example of Anonymous function (no name)
// var arrayOfMystery = [
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ]

// console.log(arrayOfMystery[0][1]) // array
// console.log(arrayOfMystery[1].name) // anonymous object
// console.log(arrayOfMystery[2]()) // anonymous function!

//Example of nested scope, closure
// function outer() {
//     var x = 'x';
//     function inner() {
//         var y = 'y';
//         console.log(x); //'x'
//     }
//     console.log(x); // 'x'
//     console.log(y); // ReferenceError: y is not defined
// }

//Nested scope Landscape Example
// var landscape = function() {
//     var result = "";

//     var flat = function(size) {
//         for (var count = 0; count < size; count++)
//             result += " _ ";
//     };

//     var mountain = function(size) {
//         result += "/";
//         for (var count = 0; count < size; count++)
//             result += " '";
//         result += "\\";
//     };

//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());  -> landscape is outer function which is why flat & mountain(size) 
// 								  has to be defined within 







