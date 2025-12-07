// Get reference to input box
let input = document.getElementById('inputBox');

// Initialize empty string to store input
let string = "";

// Unified handler
function handleInput(value) {
  if (value === '=') {
    string = eval(string); // ⚠️ Use with caution
    input.value = string;

  } else if (value === 'AC') {
    string = "";
    input.value = string;

  } else if (value === 'DEL') {
    string = string.slice(0, -1);
    input.value = string;

  } else {
    string += value;
    input.value = string;
  }
}

// Button clicks
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // prevent form submission if inside a form
    handleInput(e.target.innerText);
  });
});

// Keyboard input
document.addEventListener("keydown", function (e) {
  e.preventDefault(); // stop browser from typing into <input>

  const key = e.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    handleInput(key);

  } else if (key === "Enter") {
    handleInput('=');

  } else if (key === "Backspace") {
    handleInput('DEL');

  } else if (key === "Escape") {
    handleInput('AC');
  }
});