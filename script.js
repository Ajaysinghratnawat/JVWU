// Function to show login modal
document.querySelector('.login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').style.display = 'block';
});

// Function to close the login modal
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
});

// Function to redirect to the appropriate portal
function redirectToPortal(type) {
    alert(`Redirecting to ${type} portal.`);
}