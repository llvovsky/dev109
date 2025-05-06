var i = 1; // Set counter to 1  
var msg = '<h2>Multiplication Table</h2>';

// Prompt to enter number from 0 - 10
var input = prompt("Please enter a number from 0 - 10");

// Convert input to a number
var number = parseInt(input, 10);

// Validation if input is null, empty, or not a valid number set default to 0
if (isNaN(number) || input === null || input.trim() === '') {
    number = 0;
}

// Loop to calculate the Multiplication table 
while (i < 11) {
    msg += i + ' x ' + number + ' = ' + (i * number) + '<br>';
    i++;
}

// Write the message into the page
document.getElementById('blackboard').innerHTML = msg;
