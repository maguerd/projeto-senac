// Array que vai armazenar as músicas
let playlist = [];

// Função para adicionar música
function adicionarMusica() {
    let campoMusica = document.getElementById("musica");
    let musica = campoMusica.value.trim();

    if (musica === "") {
        alert("Digite o nome de uma música!");
        return;
    }

    playlist.push(musica);

    campoMusica.value = "";

    alert("🎵 Música adicionada com sucesso!");
}

// Função para mostrar a programação
function mostrarProgramacao() {
    let lista = document.getElementById("lista");

    if (playlist.length === 0) {
        lista.innerHTML = "<p>🎵 Nenhuma música foi adicionada ainda.</p>";
        return;
    }

    let conteudo = "<h2>🎶 Minha Playlist</h2>";
    conteudo += "<ul>";

    for (let i = 0; i < playlist.length; i++) {
        conteudo += "<li>" + (i + 1) + " - " + playlist[i] + "</li>";
    }

    conteudo += "</ul>";

    lista.innerHTML = conteudo;
}

// Função para mostrar mensagem com o nome
function mostrarMensagem() {
    let campoNome = document.getElementById("nome");
    let nome = campoNome.value.trim();

    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }

    let lista = document.getElementById("lista");

    lista.innerHTML +=
        "<p>🎧 Olá, " + nome + "! Aproveite sua playlist! 🎵</p>";

    campoNome.value = "";
}