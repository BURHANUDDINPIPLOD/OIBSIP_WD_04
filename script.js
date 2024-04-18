document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'secured.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
});
