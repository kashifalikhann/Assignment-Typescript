// Store your favorite pizza names in an array
const favoritePizzas: string[] = [
    'Margherita Pizza','Pepperoni Pizza','Hawaiian Pizza',
  ];
  
  // Loop through the array to print the names of each pizza
  console.log('Pizza types:');
  for (const pizza of favoritePizzas) {
    console.log(pizza);
  }
  
  // Modify the loop to print sentences about each pizza
  console.log('\nPizza preferences:');
  for (const pizza of favoritePizzas) {
    console.log(`I love ${pizza.toLowerCase()}!`);
  }
  
  // Add a concluding sentence
  console.log('\nI really love mouth-watering pizza!');

  export{};