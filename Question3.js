"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Alex";
// Convert to lowercase
let lowercaseName = personName.toLowerCase();
// Convert to uppercase
let uppercaseName = personName.toUpperCase();
// Convert to titlecase (capitalize first letter of each word)
function toTitleCase(name) {
    return name.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}
let titlecaseName = toTitleCase(personName);
console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);
