document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    });
  });
  

  
 // Select both input fields
const search1 = document.getElementById('headder_search');
const search2 = document.getElementById('name');

// Set a limit for when to move the focus (e.g., after typing 1 character in the first input)
const limit = 1;

// Add an event listener to the first search field
search1.addEventListener('input', function() {
  // Check if the length of the input exceeds the limit
  if (search1.value.length >= limit) {
    // Move focus to the second input field
    search2.focus();

    // Set the value of the second input to the value of the first input
    search2.value = search1.value;

    // Clear the first input field
    search1.value = "";
  }
});



const inputText = document.getElementById('name');
const selectInput = document.getElementById('category');

// Function to check the input values and disable the other input accordingly
function checkInputs() {
  // If the text input has a value, disable the select input
  if (inputText.value) {
    selectInput.disabled = true;
  } else {
    selectInput.disabled = false;
  }

  // If the select input has a selected value (other than default), disable the text input
  if (selectInput.value!="Select by category") {
    inputText.disabled = true;
  } else {
    inputText.disabled = false;
  }
}

// Add event listeners for both the text input and the select input
inputText.addEventListener('input', checkInputs);
selectInput.addEventListener('change', checkInputs);

// Initial check to ensure the inputs are correctly disabled/enabled based on their current values
checkInputs();
