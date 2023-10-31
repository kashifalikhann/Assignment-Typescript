const age: number = 25; // Change the age to test different scenarios

if (age < 3) {
  console.log('The person is a baby.');
} else if (age >= 3 && age < 5) {
  console.log('The person is a toddler.');
} else if (age >= 5 && age < 14) {
  console.log('The person is a kid.');
} else if (age >= 14 && age < 20) {
  console.log('The person is a teenager.');
} else if (age >= 21 && age < 50) {
  console.log('The person is an adult.');
} else if (age >= 60) {
  console.log('The person is an elder.');
} else {
  console.log('The person is in an unspecified stage of life.');
}

export{};