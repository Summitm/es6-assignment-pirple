function reverseJsonArray(json_arr) {
    try{
        let makeArray = JSON.parse(json_arr);
        if(makeArray !== undefined){
            let isanArray = Array.isArray(makeArray) ? true : false;
            if(isanArray) {
                let reversed_arr = makeArray.reverse();
                return JSON.stringify(reversed_arr);
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    catch(e){
        if(e instanceof SyntaxError) {
            return false;
        }
        else{
            //
        }
    }
}

console.log(reverseJsonArray('["a","b","c"]'));
console.log(reverseJsonArray(123));


//1. Without any arguments
console.log(reverseJsonArray());
//2. With a boolean as the argument
console.log(reverseJsonArray(true));
// 3. With an Array (non-stringified) as the argument
console.log(reverseJsonArray(["a","b","c"]));
// 4. With a string argument that is not properly formatted JSON
console.log(reverseJsonArray("['a','b', 'c']"));
// 5. With a stringified-array that only has one value
console.log(reverseJsonArray('["a"]'));
// 6. With a stringified-array that is empty
console.log(reverseJsonArray('[]'));
// 7. With a stringified-array that has an even-number of values
console.log(reverseJsonArray('["1","2","c", "d"]'));
// 8. With a stringified-array that has an odd-number of values
console.log(reverseJsonArray('["a","b","c"]'));

