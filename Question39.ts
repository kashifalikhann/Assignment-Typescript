function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs and print the returned values
const city1 = cityCountry("Lightwater", "England");
const city2 = cityCountry("Paris", "France");
const city3 = cityCountry("New York", "United States");

console.log(city1);
console.log(city2);
console.log(city3);

export{};