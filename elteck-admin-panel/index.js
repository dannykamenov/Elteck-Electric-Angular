const form = document.getElementById('login-form');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Send the data to the server using the fetch API
    fetch('https://elteck-server.onrender.com/api/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json()) // If you expect JSON response from the server
    .then(data => {
        // Handle the server's response here (e.g., display a message)
        if (data.message === 'Success') {
            localStorage.setItem('admin', 'true');
            location.reload();
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });
});

const admin = localStorage.getItem('admin');
const loginContainer = document.querySelector('.login-container');
const dashboard = document.querySelector('.dashboard');
if (admin === 'true') {
    loginContainer.style.display = 'none';
    dashboard.style.display = 'block';
} else {
    loginContainer.style.display = 'block';
    dashboard.style.display = 'none';
}

