// Selecting elements
const welcomeMsg = document.getElementById('welcome-msg');

// Get the local storage value
const username = localStorage.getItem('username');

// Displat welcome message
welcomeMsg.textContent = `Hi ${username}, welcome to your dashboard`;