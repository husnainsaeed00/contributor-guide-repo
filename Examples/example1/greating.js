// Get the current time
const currentTime = new Date();
const hours = currentTime.getHours();

// Select the greeting element
const greetingElement = document.getElementById('greeting');

// Set the greeting message based on the time of day
if (hours < 12) {
  greetingElement.textContent = 'Good morning!';
} else if (hours < 18) {
  greetingElement.textContent = 'Good afternoon!';
} else {
  greetingElement.textContent = 'Good evening!';
}
