function storeCarInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
    const carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Process the keyword arguments and add them to the carInfo object
    for (const option of options) {
        const key = Object.keys(option)[0];
        const value = option[key];
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with required and optional information
const car = storeCarInfo("Ferrari", "Testarossa", { color: "Red", engine: "V12", topSpeed: "220 mph" });

// Print the car object to verify the information
console.log(car);

export{};