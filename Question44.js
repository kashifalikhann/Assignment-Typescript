"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("You've ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich();
