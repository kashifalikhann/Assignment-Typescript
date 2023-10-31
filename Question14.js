"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["John", "Penny", "Eliza"];
let message = "Would you like to join me for dinner on Friday night?";
// Print invitation messages to each guest
for (let i = 0; i < guests.length; i++) {
    console.log(`Hi ${guests[i]}, ${message}`);
}
