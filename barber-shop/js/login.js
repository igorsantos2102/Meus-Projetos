function entrar() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Recuperar as credenciais armazenadas
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login bem-sucedido!");

        // Limpar o localStorage após o login bem-sucedido
        localStorage.removeItem("email");
        localStorage.removeItem("password");

        // Redirecionar para a página principal
        window.location.href = "index.html";
    } else {
        alert("Credenciais inválidas. Verifique seu e-mail e senha.");
    }
}