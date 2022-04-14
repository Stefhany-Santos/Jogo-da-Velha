var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

alterarJogador('X');

function escolherCard(id) {
    if (vencedor !== null) {
        return;
    }

    var card = document.getElementById(id);
    if (card.innerHTML !== '-') {
        return;
    }

    card.innerHTML = jogador;
    card.style.color = '#fff';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    alterarJogador(jogador);
    verificarVencedor();
}

function alterarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function verificarVencedor(){
    var card1 = document.getElementById(1);
    var card2 = document.getElementById(2);
    var card3 = document.getElementById(3);
    var card4 = document.getElementById(4);
    var card5 = document.getElementById(5);
    var card6 = document.getElementById(6);
    var card7 = document.getElementById(7);
    var card8 = document.getElementById(8);
    var card9 = document.getElementById(9);

    if (verificarSequencia(card1, card2, card3)) {
        alterarCorCard(card1, card2, card3);
        alterarVencedor(card1);
        return;
    }

    if (verificarSequencia(card4, card5, card6)) {
        alterarCorCard(card4, card5, card6);
        alterarVencedor(card4);
        return;
    }

    if (verificarSequencia(card7, card8, card9)) {
        alterarCorCard(card7, card8, card9);
        alterarVencedor(card7);
        return;
    }

    if (verificarSequencia(card1, card4, card7)) {
        alterarCorCard(card1, card4, card7);
        alterarVencedor(card1);
        return;
    }

    if (verificarSequencia(card2, card5, card8)) {
        alterarCorCard(card2, card5, card8);
        alterarVencedor(card2);
        return;
    }

    if (verificarSequencia(card3, card6, card9)) {
        alterarCorCard(card3, card6, card9);
        alterarVencedor(card3);
        return;
    }

    if (verificarSequencia(card1, card5, card9)) {
        alterarCorCard(card1, card5, card9);
        alterarVencedor(card1);
        return;
    }

    if (verificarSequencia(card3, card5, card7)) {
        alterarCorCard(card3, card5, card7);
        alterarVencedor(card3);
    }
}

function alterarVencedor(card) {
    vencedor = card.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function alterarCorCard(card1, card2, card3) {
    card1.style.background = '#26cd87';
    card2.style.background = '#26cd87';
    card3.style.background = '#26cd87';
}

function verificarSequencia(card1, card2, card3) {
    var eigual = false;

    if (card1.innerHTML !== '-' && card1.innerHTML === card2.innerHTML && card2.innerHTML === card3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var card = document.getElementById(i);
        card.style.background = '#8a2be2';
        card.style.color = '#000';
        card.innerHTML = '-';
    }

    alterarJogador('X');
}