"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
// Create an array of magician's names
const magicianNames = ["David Copperfield", "Houdini", "Penn & Teller", "Harry Potter"];
// Make a copy of the array of magicians' names
const originalMagicians = magicianNames.slice();
// Modify the copy of the array by adding "the Great"
const greatMagicians = makeGreat(originalMagicians);
// Call showMagicians to show the original list
console.log("\nOriginal Magicians:");
showMagicians(originalMagicians);
// Call showMagicians to show the modified list
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
