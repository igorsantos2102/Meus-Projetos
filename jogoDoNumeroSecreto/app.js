let listaDeNumerosSorteados = [];
let limiteDeNumerosSorteados = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteDeNumerosSorteados}`);

}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);

    }else if(chute > numeroSecreto){

        exibirTextoNaTela('p', 'Escolha um número menor');

    }else{
        exibirTextoNaTela('p', 'Escolha um número maior');
    }
    tentativas++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumerosSorteados + 1);
    let qtdDeElementosNaLista = listaDeNumerosSorteados.length;

    if(qtdDeElementosNaLista == limiteDeNumerosSorteados){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

