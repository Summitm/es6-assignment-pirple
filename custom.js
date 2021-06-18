"use strict";
function sayMyName() {
  var myName = "Sam";
  function echoMyName() {
    console.log("I repeat your name is "+ myName);
  }
  return echoMyName;
}

var round1 = sayMyName("John");
// round1();

//closures
// function waitFunc(arg1) {
// 	setTimeout(function(){
// 	  console.log(arg1);
//   }, 1000)
// }

for(let i = 0; i < 10; i += 1) {
	// waitFunc(i);
  setTimeout(function(){
	  // console.log(i);
  }, 1000)
}
//logs all possible values of i
let chessPieces = ["King", "Queen", "Bishop", "Rook", "Knight", "Pawn"]
chessPieces.forEach((i) => {
  // console.log(i);
})

// console.log("hello");

for(const piece of chessPieces) {
  if(piece === "Rook") {
    continue;
  }
  // console.log(d);
}
// use set()
const chessBoardPieces = ["King", "Rook", "Queen", "Bishop", "Bishop", "Rook", "Knight", "Pawn"];
const uniquePieces = new Set(chessBoardPieces);
for(const piece of uniquePieces) {
  // console.log(i);
}
const mapped = uniquePieces.map(mapper);
function mapper(i){
  return "Key1: "+ i;
}
console.log(mapped);

/*pubky 297593886088e3c46744994b4915b571 */

/*secrt c4c434ce3891c225 */