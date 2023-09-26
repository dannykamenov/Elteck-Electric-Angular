const reviewDiv = document.querySelector('.review-container');

fetch('https://elteck-server.onrender.com/api/reviews', 
{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    data.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        reviewCard.innerHTML = `
            <h3>${review.title}</h3>
            <p>${review.content}</p>
            <p>Rating: ${review.rating}</p>
            <p>By: ${review.username}</p>
            <p>Edited: ${review.isEdited}</p>
            <button class="delete-btn" data-id="${review._id}">Delete</button>
        `;
        reviewDiv.appendChild(reviewCard);
    });
})

