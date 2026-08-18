// Função para apresentar o nome
function apresentacao() {
    let nome = document.getElementById("nome").value;
    let local = document.getElementById("local");

    if (nome === "") {
        local.textContent = "Digite seu nome.";
    } else {
        local.textContent = "Bem-vindo, " + nome + "!";
    }
}


// Função para verificar o e-mail
function verificaemail() {
    let email = document.getElementById("email").value;
    let localemail = document.getElementById("localemail");

    if (email === "") {
        localemail.textContent = "Digite seu e-mail.";
    } else {
        localemail.textContent = "E-mail informado: " + email;
    }
}


// Função para verificar quantidade e calcular o total
function verificaraquantidade(id, produto, preco) {
    let quantidade = document.getElementById(id).value;

    if (quantidade === "" || quantidade <= 0) {
        alert("Digite uma quantidade válida.");
    } else {
        let total = quantidade * preco;

        alert(
            "Produto: " + produto +
            "\nQuantidade: " + quantidade +
            "\nTotal: R$ " + total.toFixed(2)
        );
    }
}


// Botão do Controle
document.getElementById("alertbtn1").onclick = function () {
    verificaraquantidade("nome1", "Controle", 220);
};


// Botão do Mouse
document.getElementById("alertbtn2").onclick = function () {
    verificaraquantidade("nome2", "Mouse Gamer", 120);
};


// Botão do Headset
document.getElementById("alertbtn3").onclick = function () {
    verificaraquantidade("nome3", "Headset", 150);
};


// Botão do Teclado
document.getElementById("alertbtn4").onclick = function () {
    verificaraquantidade("nome4", "Teclado Mecânico", 250);
};