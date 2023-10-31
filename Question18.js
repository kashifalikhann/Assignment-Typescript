"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let placesToVisit = ["Paris", "Istanbul", "New York", "Amsterdam", "Sawat"];
// Print the original array
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// Verify that the original array is still in its original order
console.log("Original Order (after sorting):", placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
let reverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Verify that the original array is still in its original order
console.log("Original Order (after reverse sorting):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the original list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (after double reversal):", placesToVisit);
// Sort the array in alphabetical order, modifying the original list
placesToVisit.sort();
console.log("Alphabetical Order (modified original list):", placesToVisit);
// Sort the array in reverse alphabetical order, modifying the original list
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order (modified original list):", placesToVisit);
