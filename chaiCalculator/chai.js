
// calculator to determine the basic ingredients needed
function calculateChaiIngredients ( numberOfCups) {
    const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    numberOfCups = parseInt(userInput);

//condition for checking valid input
// (not part of the test but thought it's important to have)
    if(numberOfCups <=0 ){
        alert("Please enter a valid positive number");
        return;
    }

    const water = 200 * numberOfCups; // ml
    const milk = 50 * numberOfCups; // ml
    const teaLeaves = 1 * numberOfCups //tb spoon
    const sugar = 2 * numberOfCups;// tea spoon 

    alert(`To make ${numberOfCups} cups of Kenyan Chai, you will need:\n` +
          `- Water: ${water} ml\n` +
          `- Milk: ${milk} ml\n` +
          `- Tea Leaves (Majani): ${teaLeaves} tablespoons\n` +
          `- Sugar (Sukari): ${sugar} teaspoons\n\n` +
          `- Enjoy your Chai Bora!`);

}
calculateChaiIngredients(); // invoking the function