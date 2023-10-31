"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Choose a color for the alien
const alien_color = 'green'; // Change this to 'green' or another color
// Write an if-else chain to check the alien's color and provide points accordingly
if (alien_color === 'green') {
    // If the alien's color is green, print a statement that the player just earned 5 points.
    console.log('Congratulations! You just earned 5 points for shooting the green alien.');
}
else {
    // If the alien's color isn't green, print a statement that the player just earned 10 points.
    console.log('Congratulations! You just earned 10 points for shooting an alien of a different color.');
}
