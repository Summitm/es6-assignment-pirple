const grade = "A";
function grading() {

    switch(grade) {
        case "A": case "B": case "C":
            var displayMessage = "Well done!";
            break;
        case "D":
            var displayMessage = "You have a pass";
            return displayMessage;
        default:
            var displayMessage = "Hey, you failed!";
            console.log(displayMessage);
            return; //only when you dont want to execute the statement after the switch block
    }
    
    // nameIterator(grade, displayMessage);
}
function nameIterator(name="", message="") {
    console.log(grade +" means "+ grading());
}
nameIterator();