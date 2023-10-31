"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of usernames
const usernames = ['baby', 'toodler', 'teenager', 'adult', 'elder'];
// Remove all usernames from the array
usernames.length = 0; // This clears the array
// Check if the array is empty after removing usernames
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
