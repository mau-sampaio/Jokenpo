let jogo = {
    jogador: 0,
    CPU: 0
}

const jogada = {
    1: "img/tesoura.png",
    2: "img/papel.png",
    3: "img/pedra.png"
}

function iniciarPartida() {
    let escolha = parseInt(prompt("Digite a sua escolha: \n 1 = tesoura \n 2 = Papel \n 3 = Pedra"));

    let cpuEscolha = parseInt(Math.random() * 3 + 1);

    if (escolha > 0 && escolha <= 3) mostrarPainel(escolha, cpuEscolha);

    switch (escolha) {
        case 1:
            if (cpuEscolha === 3) mostrarResultado("CPU");
            else if (cpuEscolha === 2) mostrarResultado("jogador")
            else mostrarResultado();
            break;
        case 2:
            if (cpuEscolha === 3) mostrarResultado("jogador")
            else if (cpuEscolha === 1) mostrarResultado("CPU");
            else mostrarResultado();
            break;
        case 3:
            if (cpuEscolha === 2) mostrarResultado("CPU");
            else if (cpuEscolha === 1) mostrarResultado("jogador")
            else mostrarResultado();
            break;
        default:
            document.querySelector(".resultado h2").textContent = "Opção invalida!"
    }

    document.querySelector(".placarJogador h2").textContent = jogo.jogador;
    document.querySelector(".placarCPU h2").textContent = jogo.CPU;

    if (jogo.jogador == 2 || jogo.CPU == 2) reiniciarJogo();
}

function mostrarResultado(resultado) {
    if (resultado == "jogador") {
        jogo.jogador += 1;
        document.querySelector(".resultado h2").textContent = "Você ganhou 😊";
    } else if (resultado == "CPU") {
        jogo.CPU += 1;
        document.querySelector(".resultado h2").textContent = "Você perdeu 🥲";
    } else {
        document.querySelector(".resultado h2").textContent = "Empate 😶";
    }
}

function mostrarPainel(escolha, cpuEscolha) {
    document.querySelector(".jogador img").src = jogada[escolha];
    document.querySelector(".cpu img").src = jogada[cpuEscolha];

    document.querySelector(".jogador ").style.display = "block";
    document.querySelector(".cpu ").style.display = "block";
    document.querySelector(".versus ").style.display = "block";
}

function reiniciarJogo() {
    const reiniciar = confirm(jogo.jogador == 2 ? "Você ganhou!\n Gostaria de começar uma nova partida?" : "Você perdeu!\n Gostaria de começar uma nova partida?")
   
    jogo = {
        jogador: 0,
        CPU: 0
    }

    if (reiniciar) {
        document.querySelector(".jogador ").style.display = "none";
        document.querySelector(".cpu ").style.display = "none";
        document.querySelector(".versus ").style.display = "none";
    
        document.querySelector(".resultado h2").textContent = "";
        iniciarPartida(); 
    } else {
        document.querySelector(".botao button").textContent = "Nova Partida!";
    }
}