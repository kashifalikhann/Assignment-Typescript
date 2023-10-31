function makeShirt(size: string = "Large", message: string = "I love coding"): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}"`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt("Medium");

// Make a shirt of any size with a different message
makeShirt("Small", "TypeScript is awesome!");

export{};