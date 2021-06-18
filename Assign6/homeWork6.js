'use strict'

// Fizz-Buzz Assignment
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log("FizzBuzz")
        }
        else  if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
        else if((i > 1) && (i % 1 === 0) && (i % 2 === 1) && (i % i === 0)) {
            console.log("Prime");
        }
        else {
            console.log(i);
        }
    }
}

// fizzBuzz();


let num = 37;

function isPrime(n) {
  if(n <= 1) {
    return false;
  }
  else if(n === 2){
      return 2;
  }
  else{
    for(let i = 2; i <= n; i += 1){
        if(n % i === 0){
          return false;
        }
        else{
            return "num is Prime";
        }
      }
  }
}
function getAllPrimes() {

}
console.log(getAllPrimes());