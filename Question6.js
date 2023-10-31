"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nameWithWhitespace = "\t\n   Alex  \t\n"; // Includes tabs and newlines
// Print the name with whitespace
console.log("Name with Whitespace: " + nameWithWhitespace);
// Remove whitespace and print the stripped name
let strippedName = nameWithWhitespace.trim();
console.log("Stripped Name: " + strippedName);
