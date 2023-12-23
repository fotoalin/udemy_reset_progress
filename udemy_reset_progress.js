// Custom Udemy Progress Reset Script
// Created by Alin Morosanu. https://github.com/fotoalin/udemy_reset_progress
// This script adds a "Reset Progress" button on Udemy
// Note: All sections must be open for the button to work.

// Try to get the dynamic element
const dynamicElement = document.querySelector('[id*="dropdown-trigger--"]');

if (dynamicElement) {
  // Get the dynamic element's class
  const dynamicClass = dynamicElement.className;

  // Create a new button element
  const newButton = document.createElement('button');
  newButton.textContent = 'Reset Progress';
  newButton.className = dynamicClass;
  newButton.style.width = "initial"

  newButton.addEventListener('click', () => {
    // on Button Click, uncheck all checkboxes for the opened sections
    document.querySelectorAll('li input[type=checkbox]:checked').forEach((box, i) => setTimeout(() => box.click(), i * 50));
  });

  // Get the element with the specified class
  const targetElement = document.querySelector('[class^="resource-context-menu--resource-context-menu-options--"]');

  // Insert the new button after the target element
  targetElement.insertAdjacentElement('afterend', newButton);
} else {
  console.error("Dynamic element not found.");
}
