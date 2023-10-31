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
// Modify the array of magicians by adding "the Great"
const greatMagicians = makeGreat(magicianNames);
// Call showMagicians to see the modified list
showMagicians(greatMagicians);
