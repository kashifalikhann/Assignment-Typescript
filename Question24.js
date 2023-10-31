"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
console.log("String Equality Test: I predict True.");
console.log("apple" === "apple"); // True
console.log("String Inequality Test: I predict True.");
console.log("apple" !== "apple"); // False
// Tests using the lower case function
console.log("Lowercase Test: I predict True.");
console.log("HELLO".toLowerCase() === "hello"); // True
// Numerical tests
console.log("Numerical Equality Test: I predict True.");
console.log(5 === 5); // True
console.log("Numerical Inequality Test: I predict false.");
console.log(10 !== 10); // False
console.log("Greater Than Test: I predict True.");
console.log(15 > 10); // True
console.log("Less Than Test: I predict True.");
console.log(3 < 8); // True
console.log("Greater Than or Equal To Test: I predict True.");
console.log(10 >= 5); // True
console.log("Less Than or Equal To Test: I predict True.");
console.log(7 <= 7); // True
// Tests using "and" and "or" operators
console.log("Logical AND Test: I predict True.");
console.log(true && true); // True
console.log("Logical OR Test: I predict True.");
console.log(true || false); // True
// Test whether an item is in an array
let fruits = ["apple", "banana", "cherry", "date"];
console.log("Item in Array Test: I predict True.");
console.log(fruits.includes("cherry")); // True
// Test whether an item is not in an array
console.log("Item Not in Array Test: I predict True.");
console.log(!fruits.includes("grape")); // True
