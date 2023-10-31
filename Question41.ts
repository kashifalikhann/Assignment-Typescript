function showMagicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn & Teller", "Harry Potter"];

// Call the showMagicians function to print the magician names
showMagicians(magicianNames);

export{};