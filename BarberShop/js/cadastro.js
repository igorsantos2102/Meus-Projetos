function cadastrar() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    //Verificar as informacoes
    if(email === ""){
        alert("Informe um Email")
        return
    }else{
        if(password === "" || confirmPassword === ""){
            alert("Informe uma senha")
            return
        }
        else if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }
    }
        
    // Armazenar as credenciais
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Cadastro realizado com sucesso.");

    // Redirecionar para a página de login
    window.location.href = "login.html";

}