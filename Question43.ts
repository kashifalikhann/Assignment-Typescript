function showMagicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn & Teller", "Harry Potter"];

// Make a copy of the array of magicians' names
const originalMagicians: string[] = magicianNames.slice();

// Modify the copy of the array by adding "the Great"
const greatMagicians: string[] = makeGreat(originalMagicians);

// Call showMagicians to show the original list
console.log("\nOriginal Magicians:");
showMagicians(originalMagicians);

// Call showMagicians to show the modified list
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

export{};