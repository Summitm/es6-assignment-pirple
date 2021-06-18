'use strict';
//Error linting
//Easy debugging
//Helps avoid unnecessary globals - variables

function* makeRangeIterator(start, end, step) {
    let iteratorCount = 0;

    for(let i = start; i <= end; i += step) {
        iteratorCount++;
        yield i;
    }

    return iteratorCount;
}

let counter = makeRangeIterator(1, 5, 2);
console.log(counter); //returns the Generator object
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
/*{ value: 1, done: false }
{ value: 3, done: false }
{ value: 5, done: false }
{ value: 3, done: true }*/


// let obj = JSON.stringify({name: "John Doe", age: 32, address: "123 Fake Street"}, ',','\t');
// console.log(obj);