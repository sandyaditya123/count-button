// Get all elements
const countBtn = document.querySelector('.count-btn');
const resetBtn = document.querySelector('.reset-btn');

let count = 0; // Create a counter variable
countBtn.textContent = `Count ${count}`; // Add the value of the counter variable to the Counter Button

// Add an event listener when Counter Button click it
countBtn.addEventListener('click', () => {
    count++; // Increase one value when the button is clicked
    countBtn.textContent = `Count ${count}`; // Display the new value to the Counter Button
});

// Add an event listener when Reset Button click it
resetBtn.addEventListener('click', () => {
    count = 0; // Return value to 0
    countBtn.textContent = `Count ${count}`; // Display the value 0 on the Counter Button
});
