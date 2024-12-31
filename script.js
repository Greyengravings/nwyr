// Get the user name from the URL
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

// Display the user's name on the back of the card if available
if (userName) {
    document.getElementById('userMessage').textContent = userName;
    document.getElementById('card').style.display = 'block'; // Show the card
} else {
    alert('No name found');
}

// Add event listener for opening the card
document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('open');
});
