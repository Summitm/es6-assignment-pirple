'use strict';
const boardArea = document.querySelector("#outline");
// const possibleEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// create the 9 boxes using row col intersections
for(let i = 0; i < 3; i++) {
    // create rows
    const rows = document.createElement("div");
    boardArea.appendChild(rows);
    rows.classList.add("row");

    for(let j = 0; j < 3; j++) {
        const boxes = document.createElement("div");
        rows.appendChild(boxes);
        boxes.classList.add("col");
    }
}

// events
const movesArray = []; //store move values in array
const createdRows = boardArea.querySelector(".row");

function makeMove(event) {
    let selected = event.target;
    if(movesArray.length !== 0){ //if second move onwards
        if(movesArray[movesArray.length - 1] === 'O') {
            selected.innerHTML = "<em class='red'>X</em>";
            let itemPlayed = selected.innerText;
            movesArray.push(itemPlayed);
        }
        else{
            selected.innerHTML = "<em class='black'>O</em>";
            let itemPlayed = selected.innerText;
            movesArray.push(itemPlayed);
        }
    }
    else{//if its the first move
        selected.innerHTML = "<em class='red'>X</em>";
        let itemPlayed = selected.innerText;
        movesArray.push(itemPlayed);
    }
}

boardArea.addEventListener("click", makeMove);
let newTarget = boardArea.querySelectorAll(".row");

// checking the number of moves;
setInterval(()=>{
    // console.log(newTarget);
    for(let i = 0; i < newTarget.length; i++) {
        let eachRow = newTarget[i];
        let newdiv = eachRow.querySelectorAll(".col");
        let colArr = newdiv.values();
        for(let prop of colArr) {
            if(prop.outerText[i] === "X" && prop.outerText[i] === "X" && prop.outerText[i] === "X") {
                alert("X won the game!");
                boardArea.reset();
                break;
            }
            else if(prop.outerText[i] === "O" && prop.outerText[i] === "O" && prop.outerText[i] === "O") {
                alert("O won the game!");
                boardArea.reset();
                break;
            }
            else {
                console.log("Cat Game!");
                boardArea.reset();
                break;
            }
        }
    }
},5000);

