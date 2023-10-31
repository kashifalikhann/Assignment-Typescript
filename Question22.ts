let myArray = [1, 2, 3, 4, 5];

// Intentional error: Access an index that doesn't exist
let index = 10;
console.log(myArray[index]); // This will produce an "index out of range" error

// Correct the error by checking if the index is within bounds
if (index >= 0 && index < myArray.length) {
  console.log("Value at index", index, "is", myArray[index]);
} else {
  console.log("Index is out of range.");
}

export{};