/*
    Rest Operator is used to collect multiple element/arguments into an array.
    For instance, it can be used in a function to accept multiple arguments and return an array.
*/

/*
    On the other hand the spread operator is used to unpack elements of an array into single/individual
    elements. It can be used to add elements of one array into another array.
*/

/* Note: The rest operator can only be the last arguments while the spread operator can be used even on the
first index of an array*/

// rest example
function collectArgs(...args) {
    console.log(args); //[ 1, 3, 5, 6, 7, 60 ]
}
collectArgs(1, 3, 5, 6, 7, 60);

// spread example
const someNames = ["Sam", "John", "Alice", "Jack"];
const moreNames = ["Jane", "Bob", "Helsey"];
const allNamesArr = [...someNames, ...moreNames];
console.log(allNamesArr); //['Sam',    'John', 'Alice',  'Jack', 'Jane',   'Bob', 'Helsey']