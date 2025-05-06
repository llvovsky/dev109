var i = 1; // Set counter to 1  
// Message
var msg = '<h2>Multiplication Table</h2>';
// Prompt to enter number from 0 - 10
var input  = prompt("Please enter a number from 0 - 10");
  
//Validation if a number is a null or NaN response as 0
if(isNaN(input) || input === null || input === '')
{
  input = 0;
}

//Loop to calculate the Multiplication table 
while (i < 11) {
  msg += i + ' x ' + input + ' = ' + (i * input) + '<br>';
  i++;
}
// Write the message into the page
document.getElementById('blackboard').innerHTML = msg;

