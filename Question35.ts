// Define an array of animal names
const animals: string[] = ["cat", "goat", "rhino"];

// Use a for loop to print the names of each animal
console.log("Animal Names:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Use a for loop to print statements about each animal
console.log("\nStatements about Animals:");
for (let i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "cat":
            console.log("A cat would make a great pet.");
            break;
        case "goat":
            console.log("A goat is a useful farm animal.");
            break;
        case "rhino":
            console.log("A rhino is a majestic wild creature.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}

// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");

export{};