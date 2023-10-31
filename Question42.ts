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

// Modify the array of magicians by adding "the Great"
const greatMagicians: string[] = makeGreat(magicianNames);

// Call showMagicians to see the modified list
showMagicians(greatMagicians);

export{};