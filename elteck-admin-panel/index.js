const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(form);

    // Send the data to the server using the fetch API
    fetch('your-server-url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // If you expect JSON response from the server
    .then(data => {
        // Handle the server's response here (e.g., display a message)
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
    });
});