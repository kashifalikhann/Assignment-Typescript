let personName: string = "Alex";

// Convert to lowercase
let lowercaseName: string = personName.toLowerCase();

// Convert to uppercase
let uppercaseName: string = personName.toUpperCase();

// Convert to titlecase (capitalize first letter of each word)
function toTitleCase(name: string): string {
  return name.replace(/\w\S*/g, (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

let titlecaseName: string = toTitleCase(personName);

console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);
export{};