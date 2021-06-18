const mainDiv = document.querySelector(".container");

// create and style the wrapper
const newDivWrapper = document.createElement("div");
newDivWrapper.id = "rectangleWrapper";

newDivWrapper.style.width = "100%";
newDivWrapper.style.height = "inherit";

mainDiv.appendChild(newDivWrapper);

// all Ids
const idListArray = ["rectangle1", "rectangle2", "rectangle3", "rectangle4", "rectangle5", "rectangle6", "rectangle7", "rectangle8", "rectangle9", "rectangle10"];

for(let i = 0; i < idListArray.length;i += 1) {
    
    const rectangleDivs = document.createElement("div");
    // assign same class
    rectangleDivs.classList.add("rectangle");
    // create each rectangle and add IDs
    newDivWrapper.appendChild(rectangleDivs);
    rectangleDivs.id = idListArray[i];

    // list color code after each rectangle
    const getCreatedElement = document.getElementById(idListArray[i]);
    const style = getComputedStyle(getCreatedElement, "");
    newDivWrapper.append(style.backgroundColor);

}


// 6 - log message and list all Ids
function logMessage() {
    
    console.log("Here are the rectangle IDs: ");
    let element = document.getElementsByClassName("rectangle");
    for(let el of element){
        console.log(el.id);
    }
    
}


// ===============================Events handling======================
const element = document.getElementById("rectangle1");
// event add/remove
function backgroundChange() {
    document.body.style.backgroundColor = "#FF00A6";
}
// using removeEventListener()
setTimeout((event) => {
    element.removeEventListener('click', backgroundChange);
},4000); 
// using abort() to removeEvent
// const controller = new AbortController(); //an instance of the abortController
// element.addEventListener('click', () => {
//     document.body.style.backgroundColor = "black";
// }, {signal: controller.signal});

// controller.abort(); //calling abort on the controller that owns the signal

// another event
const element1 = document.getElementById("rectangle10");

function bgChange(e) {
    document.body.style.backgroundColor = "green";
    console.log(e.target);
}

element1.addEventListener('click', bgChange);

// setTimeout(() => {
//     element1.removeEventListener('click', bgChange);
// }, 2000)

// keyevents
const myForm = document.querySelector("#form-outline");
const status = myForm.querySelector("p");
const myInput = myForm.querySelector("#myInput");

myInput.addEventListener('keydown', addStatus);
myInput.addEventListener('keyup', removeText);

function addStatus(e) {
    status.innerText = "User typing...";
    console.log(e.keyCode);
}

let timer;
function removeText(e) {
    clearTimeout(timer);
    timer = setTimeout(()=>{
        status.innerText = "";
    }, 1000)
}