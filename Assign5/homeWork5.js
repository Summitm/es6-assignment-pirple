'use strict';

const timeArray = [];
const validLabels = ["seconds", "second", "minutes", "minute", "hours", "hour", "days", "day"];

// convert value1 to hours
function timeFormatter(arg1, label1, ...args) {
    switch(label1) {
        case "minutes": case "minute":
            var result =  arg1 / 60;
            timeArray.push(result);
            return result;
        case "hours": case "hour":
            var result =  arg1;
            timeArray.push(result);
            return result;
        case "seconds": case "second":
            var result =  arg1 / 3600;
            timeArray.push(result);
            return result;
        case "days": case "day":
            var result =  arg1 * 24;
            timeArray.push(result);
            return result;
        default:
            console.log("Invalid value");
    }

    return timeArray;
}

// convert value2 to hours
function timeFormatter2(arg2, label2, ...args) {
    switch(label2) {
        case "minutes": case "minute":
            var result1 =  arg2 / 60;
            timeArray.push(result1);
            return result1;
        case "hours": case "hour":
            var result1 =  arg2;
            timeArray.push(result1);
            return result1;
        case "seconds": case "second":
            var result1 =  arg2 / 3600;
            timeArray.push(result1);
            return result1;
        case "days": case "day":
            var result1 =  arg2 * 24;
            timeArray.push(result1);
            console.log(result1)
        default:
            console.log("Invalid value");
    }

    return timeArray;
}

// adder function with validit checks
function timeAdder(value1, label1, value2, label2) {

    if(typeof(value1) !== "number" || typeof(value2) !== "number") {
        return false;
    }
    else if (typeof(value1) === "number" && typeof(value2) === "number") {
        if((label1 === "days" || label1 === "hours" || label1 === "minutes" || label1 === "seconds") && (label2 === "day" || label2 === "hour" || label2 === "minute" || label2 === "second")) {
            return false;
        }
        else if((label1 === "day" || label1 === "hour" || label1 === "minute" || label1 === "second") && (label2 === "days" || label2 === "hours" || label2 === "minutes" || label2 === "seconds")) {
            return false;
        }
        else if(validLabels.includes(label1) && validLabels.includes(label2)) {
            timeFormatter(value1, label1);
            timeFormatter2(value2, label2);
            // console.log(timeArray);
            return timeArray.reduce(function(previous, current){
                const sumOfvalues = previous += current;
                // check the largest label to return
                if(sumOfvalues % 24 === 0){
                    let result = sumOfvalues / 24;
                    const formattedTime = result +" day";
                    return formattedTime.split(" ");

                }
                else{

                    const formattedTime = sumOfvalues +" hours";
                    return formattedTime.split(" ");

                }
            });
        }
        else{
            return false;
        }
    }
    else{
        return "false!";
    }
}

console.log(timeAdder(1, "sec", 240, "seconds"));