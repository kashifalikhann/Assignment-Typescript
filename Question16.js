"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["John", "Penny", "Eliza"];
let message = "Would you like to join me for dinner on Friday night?";
let guestCantMakeIt = "Penny";
let newGuest = "Elizabeth";
// Print a message about the guest who can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with the new guest
let indexToRemove = guests.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guests.splice(indexToRemove, 1, newGuest);
}
// Inform that you found a bigger dinner table
console.log("Good news! I found a bigger dinner table.");
// Add new guests to the list
guests.unshift("Julie"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Matthew"); // Add to the middle
guests.push("Alex"); // Add to the end
// Print a new set of invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log(`Hi ${guests[i]}, ${message}`);
}
