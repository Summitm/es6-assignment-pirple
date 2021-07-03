/* MetaData of my favourite song. 
Put into different data types */

var songTitle = "Afterglow";
var artist = "Ed Sheeran";
var album = "Afterglow";

var dateReleased = "21-12-2020";
var age = 5 //Age in months

var isOnYoutube = true;
function DirectorListing(name, role) {
    this.name = name;
    this.role = role;
    this.result = function(){ 
        console.log(this.role +" is "+ this.name);
    }; 
}
let licensedBy = ["WMG", "LatinAutor - UMPG", "BMI - Broadcast Music Inc.", "6 Music Rights Societies"]; 

// console.log(songTitle);
// console.log("Available on youtube: "+ isOnYoutube);
// console.log(licensedBy[3]);

// var director1 = new DirectorListing("Nic Minns", "Main Director");
// director1.result();

function mapLicensors(arr) {
    const names = arr.map((names) => {
        return "director: "+ names;
    })
    return names;
}

let results = mapLicensors(licensedBy);
// console.log(results);

var multiplier = (x, y) => x * y;

console.log(multiplier(5, 4));