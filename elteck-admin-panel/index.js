const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');

loginBtn.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('login');
});