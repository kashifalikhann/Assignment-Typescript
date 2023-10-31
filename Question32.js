"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a list of current usernames (case insensitive)
const current_users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// Create a list of new usernames
const new_users = ['Frank', 'Charlie', 'Grace', 'Ivy', 'alice'];
// Loop through the new_users list
for (const newUsername of new_users) {
    // Check if the new username exists in current_users (case insensitive)
    const isUsernameTaken = current_users.some((currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase());
    // Print messages based on whether the username is taken
    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
