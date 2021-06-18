// 'use strict';
// how rest parameters work
function checkIfMortal(name, ...args) {
    const allMen = ["Plato", "Socrates", "Paul"];
    const isMortal = allMen.includes(name);
    return isMortal;
}

console.log(checkIfMortal("Socrates", 4, "Sherry", "Sam", true));

