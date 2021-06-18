/*var - is used to define variables that have global or function scope.
variables declared with keyword var can be modified or reasigned. Possible use case is when you want
to keep track of changes in values e.g counters, time, date etc.

const and let are used to declare block scoped variables. For instance const can be used to declare
variables that are not expected to be reassigned or redeclared. Let on the other hand, can be used to declare 
local/block scoped variable that can be reassigned within the block
*/

/*Hoisting - is a mechanism in which all declaration of variables are moved to the top of the block or page.
Meaning you can declare a variable without having to assign a value immediately. 
Assignment to these variables can be done later inside the block or function where they are accessible.
.*/

// var example
var count = 0;
function counter() {
    count += 1
    if(count === 1) {
        var newCounter = count;
    }
    // outside if block still works as var newCounter is func scoped
    console.log(newCounter);
}
counter();
console.log(count);


//const example
const PI = 3.1472;
PI = 22/7;
console.log(PI);//TypeError: Assignment to a constant variable.
const PI = 22/7;
console.log(PI); //PI already declared


//let example
function doSomething() {
    let isChecked = true;
    if(isChecked) {
        let isAlsoChecked = false;
    }
    // outside if block
    console.log(isChecked);
    console.log(isAlsoChecked);//isAlsoChecked is not defined
}

doSomething();
