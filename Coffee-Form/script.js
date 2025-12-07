// Grab all radio buttons in the "grind" group
const radios = document.querySelectorAll('input[name="grind"]');

// Map each radio value to its matching description span
const descriptions = {
  decaf: document.getElementById('decaf-desc'),
  latte: document.getElementById('latte-desc'),
  espresso: document.getElementById('espresso-desc'),
  double: document.getElementById('double-desc')
};

function updateDescriptions() {
  // Hide all descriptions
  Object.values(descriptions).forEach(desc => {
    desc.classList.remove('show');
    desc.style.display = 'none';
  });

  // Find the selected radio
  const checked = document.querySelector('input[name="grind"]:checked');
  if (checked && descriptions[checked.value]) {
    const selected = descriptions[checked.value];
    selected.style.display = 'inline';
    selected.classList.add('show'); // triggers fade-in animation
  }
}

// Add listeners
radios.forEach(radio => {
  radio.addEventListener('change', updateDescriptions);
});

// Run once on page load in case one option is pre-selected
updateDescriptions();