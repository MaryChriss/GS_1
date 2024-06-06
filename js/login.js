function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function signup(event) {
    event.preventDefault();
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Cadastro realizado com sucesso!');
    showLogin();
}

function login(event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    let storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login realizado com sucesso!');
        window.location.href = 'pages/home.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}
