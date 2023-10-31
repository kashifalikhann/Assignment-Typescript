"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "Large", message = "I love coding") {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}"`);
}
// Make a large shirt with the default message
makeShirt();
// Make a medium shirt with the default message
makeShirt("Medium");
// Make a shirt of any size with a different message
makeShirt("Small", "TypeScript is awesome!");
