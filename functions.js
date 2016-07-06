/* #1 Create a function that can be used with `sort`. 
This function should take two strings, 
and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted 
using your new function. */


var arrayOfStrings = ["string", "stringstring", "stringstringstring"];

// console.log(arrayOfStrings.sort(function(a,b) {
//   if (a.length < b.length){
//     return 1
//     };
//   if (a.length > b.length){
//     return -1;
//   }
//   else {
//   return 0;
//   }
// }));


/* #2 Create an array of objects 
(don’t need to use `new` here, just regular object literals). 
These objects will contain a `name` and `email` property. 
 */

var nameEmail = [

{
    name: "donkeyKong",
    email: "donkeyKong@email.com"
},

{
    name: "mario",
    email: "mario@email.com"
},


{
    name: "luigi",
    email: "luigi@email.com"
},
];

// Then, run some code that will sort your array by the longest name.

var nameSorted = (nameEmail.sort(function(a, b) {
    if (a.name.length < b.name.length) {
        return 1;
    }
    if (a.name.length > b.name.length) {
        return -1;
    }
    else {
        return 0;
    }
}));

console.log(nameSorted);



// Then, run some code that will sort your array by e-mail address 
// in alphabetical order.

var emailSorted = (nameEmail.sort(function(a, b) {
    if (a.email < b.email) {
        return -1;
    }
    if (a.email > b.email) {
        return 1;
    }
    else {
        return 0;
    }
}));

// console.log(emailSorted);


/* #3 Create a function that can be used with [`Array.prototype.map`].
This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result. */

function squareNum(num) {
    return num * num;
}

var arrayOfNumbers = [1,4,6,3];
var results = arrayOfNumbers.map(squareNum);
// console.log(results);


/* #4 Create a function that can be used with `Array.prototype.map`. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects 
each containing a “num” property. */

var arrayOfObjects = [{num: 12}, {num: 13}, {num: 2}];



var squaredArray = arrayOfObjects.map(function(obj) {
    return obj.num * obj.num;
}
);

// console.log(squaredArray);


/* In a previous workshop, you had to create a function that took two numbers 
and an operation (add, sub, mult, …) and returned 
the result of the operation on the two numbers. 
Here we are going to do the same but at a higher order. */

/* #6 Create a function called `operationMaker` 
that takes only a string called `operation` as argument. 
This string could be `“add”`, `“subtract”`, `“mult”` or `“div”`. 
Your function will **return a function** that will take two numbers 
and return the result of running operation on these numbers. */


function operationMaker(operation) {
    switch (operation) {
        
        case 'add':
            return function add(num1,num2) {
                return num1 + num2;
            };
            
        case 'subtract':
            return function subtract(num1,num2) {
                return num1 - num2;
            };
            
        case 'mult': 
            return function mult(num1, num2) {
                return num1 * num2;
            };
            
        case 'div':
            return function div(num1, num2) {
                return num2 / num2;
            };
            
        default:
            break;
    }
}




//console.log(operationMaker('add')(1,2));
