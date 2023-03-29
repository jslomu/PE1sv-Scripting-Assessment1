// Retrieve the list of pizzas in order of sales descending.
// Store the list of pizzas in an array named "pizzaArray"
const pizzaArray = ["Mozarella", "Pepperoni", "Cheese","Garlic","BBQ","Supreme","Lamb","Veggie","Margherita","Hawaiian","Chicken","MeatLover","Vegan","Pork","Nutella"];

// Declare an array named "correctAnswers" and store the 3 most popular pizzas from pizzaArray.
const correctAnswers = pizzaArray.slice(0,3);

// Declare a new array, containing 4 blank arrays, named "answersArray".
//Each sub-array is for the questions being asked to the user, respectively.
const answersArray = [[],[],[],[]];

// Populate the answer subarrays.
// Loop through each sub-array until all are fully populated.
answersArray.forEach(element => {
    // Add the most popular pizza in the list to the current sub-array.
    element.push(pizzaArray[0]);
    
    // Also add the most popular pizza in the list to the final sub-array.
    if (answersArray[3].length < 4) {
        answersArray[3].push(pizzaArray[0]);
    }
    
    // Remove the most popular pizza from the original list, "pizzaArray".
    pizzaArray.shift();

    // Using a loop function, add pizzas to the sub-arrays at random until the sub-arrays contain 4 items.
    while (element.length < 4) {
        let num = Math.floor(Math.random() * pizzaArray.length);
        if (num < 2) {
            num += 2;
        }
        element.push(pizzaArray[num]);

        // After a pizza is added to a sub-array, remove it from the original "pizzaArray".
        pizzaArray.splice(num,1);
    }

    // Once the sub-array is filled, shuffle the order of the array.
    shuffle(element);
});

// Loop through each item in each sub-array of the "answersArray".
// For each item, update the corresponding HTML input and label elements.
let id;
for (let q = 0; q < 4; q++) {
    id = q * 20;
    for (let a = 0; a < 4; a++) {
        inputId = id + a;
        answerId = id + 10 + a;
        document.getElementById(answerId).innerHTML = answersArray[q][a];
        document.getElementById(inputId).value = answersArray[q][a];
    };
};

// Set a function to run when the HTML form is submitted.
onsubmit = (event) => {
    
    // Declare new variables to track the user's score, named "userScore".
    let userScore = 0;
    
    try {
        // Retrieve the user input for question 1.
        let answer1 = document.querySelector('input[name="1"]:checked').value;

        // Using an if statement, check if the answer matches the value of the first item in correctAnswers array.
        // If correct, increment the "userScore" variable by 1.
        if (answer1 == correctAnswers[0]) {
            userScore ++;
        }

        // Retrieve the user input for question 2.
        let answer2 = document.querySelector('input[name="2"]:checked').value;
        
        // Using an if statement, check if the answer matches the value of the first item in correctAnswers array.
        // If correct, increment the "userScore" variable by 2.
        if (answer2 == correctAnswers[1]) {
            userScore ++;
        }    
        
        // Retrieve the user input for question 3.
        let answer3 = document.querySelector('input[name="3"]:checked').value;
        
        // Using an if statement, check if the answer matches the value of the first item in correctAnswers array.
        // If correct, increment the "userScore" variable by 3.
        if (answer3 == correctAnswers[2]) {
            userScore ++;
        }

        // Retrieve the user input for question 4.
        let answer4 = document.querySelector('input[name="4"]:checked').value;
        
        // Using an if statement, check if the answer matches the value of the first item in correctAnswers array.
        // If correct, increment the "userScore" variable by 3.
        if (correctAnswers.includes(answer4)) {
            userScore ++;
        }
    }
    catch {
        alert("All questions must be answered. Quiz will restart.")
        location.reload()
    }

    // Present the user their score - multiply the "userScore" variable.
    // Present the user's score as a percentage - divide the "userScore" variable by 4 and multiply by 100.
    document.getElementById("score").innerHTML = "User Score: " + userScore * 10 + " points";
    document.getElementById("count").innerHTML = "Correct answers: " + userScore + " (" + userScore / 4 * 100 + "%)";

    event.preventDefault()
};

// Declare a function for randomising the order of an array, named "shuffle".
// The following function was copied from https://stackoverflow.com/a/2450976
// All credit goes to the original author of the function.
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

