# phase-1-code-challenge-week-1
Code challenge for creating chaiCalculator, bodaFareCalculator and mobileMoneyEstimator.

# Week 1 Code Challenge

## Prerequisites

1. GitHub Repository: Create a new repository on your GitHub account (e.g., `Code-Challenge-1`).
2. Project Structure: For each challenge below, create a dedicated folder within your main repository (e.g., `chaiCalculator`, `bodaFareCalculator`, `mobileMoneyEstimator`).
3. JavaScript Files: Inside each challenge's folder, create a single JavaScript file to hold your solution for that specific challenge (e.g., `chai.js`, `fare.js`, `fee.js`).
4. Solution Implementation: Use JavaScript to write your solutions.
5. Version Control: Push your solutions to the GitHub repository as you complete them.
6. Documentation: Ensure your repository has a well-written main `README.md `file (like this one!).
7. Submission: Submit the link to your GitHub repository.
 

# Challenge 1: Chai Bora Ingredient Calculator ☕

This challenge involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

### The Standard Recipe for 1 Cup of Chai:

- Water: 200 ml
Milk: 50 ml
- Tea Leaves (Majani): 1 tablespoon
- Sugar (Sukari): 2 teaspoons (optional, but included for this challenge)

### Example Interaction (for an input of 3 cups):

- User is prompted: `Karibu! How many cups of Chai Bora would you like to make?`
- User enters: `3`
- Console Output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!

# Challenge 2: Boda Boda Ride Fare Estimator 🛵

This challenge is to create a simple program to estimate the fare for a boda boda ride.

### Fare Calculation Rules:

- Base Fare: KES 50 (applied to every ride).
- Per Kilometer Charge: KES 15 for every kilometer traveled.

### Example Interaction (for a trip of 5 km):

- User is prompted: `Unafika wapi Mkubwa? Kilometer ngapi?:`
- User enters: `5`
- Console Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!
# Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

This challenge is to create a simplified estimator for transaction fees.

### Simplified Fee Structure:

1. The basic transaction fee is 1.5% of the transaction amount.
2. However, there's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
3. There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.

### Example Interactions & Outputs:

- User is prompted: Unatuma Ngapi? (KES):

- Scenario 1: User enters `500`

- (1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
- Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!
