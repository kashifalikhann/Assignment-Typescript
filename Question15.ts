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

// Print a second set of invitation messages
for (let i = 0; i < guests.length; i++) {
  console.log(`Hi ${guests[i]}, ${message}`);
}
export{};