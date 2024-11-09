// console lo the input getting from search
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


// making only one input from the user either text or select

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







// Card generator
document.addEventListener("DOMContentLoaded", () => {
  const cardData = [
      { title: "Card 1", description: "Noteworthy technology acquisitions 2021 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
      { title: "Card 2", description: "Noteworthy technology acquisitions 2021 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
      { title: "Card 3", description: "Noteworthy technology acquisitions 2021 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." },
      // Add more card objects as needed
  ];

  const cardContainer = document.getElementById("card-container");

  cardData.forEach(card => {
      // Create the card div
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      // Add the card content
      cardDiv.innerHTML =`<div
      class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-slate-100 text-surface shadow-secondary-1  sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          class="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
          alt="Los Angeles Skyscrapers" />
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight">${card.title}</h5>
        <p class="mb-4 text-base">${card.description}
        </p><p class="!text-right"> <button class="bg-teal-500 hover:bg-teal-600 text-white text-base tracking-wide px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-fit"> More like This </button></p>

      </div>
      </div>`
      ;

      // Append the card to the container
      cardContainer.appendChild(cardDiv);
  });
});
