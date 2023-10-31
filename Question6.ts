let nameWithWhitespace: string = "\t\n   Alex  \t\n"; // Includes tabs and newlines

// Print the name with whitespace
console.log("Name with Whitespace: " + nameWithWhitespace);

// Remove whitespace and print the stripped name
let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped Name: " + strippedName);

export{};