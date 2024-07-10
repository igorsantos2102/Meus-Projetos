let inputText = document.getElementById('inputText');

const letrasMinusculas = () => textoMinusculo = inputText.value.toLowerCase();

const removerAcentuacao = () => letrasMinusculas().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const removeAtribute = () => document.getElementById('copy').removeAttribute('hidden');

const addClass = () => {
    let saidaTexto = document.getElementById('saidaTexto');
    saidaTexto.classList.toggle('output_Text', true);
}

const removeElement = () => {
    const image = document.getElementById('image');
    if (image) image.remove();
    
    const paragraph = document.querySelector('.paragraph');
    if (paragraph) paragraph.remove();
}



function criptografar() {
    addClass();
    let outputText = removerAcentuacao().replace(/e/g, 'enter')
                                        .replace(/i/g, 'imes')
                                        .replace(/a/g, 'ai')
                                        .replace(/o/g, 'ober')
                                        .replace(/u/g, 'ufat');
     document.querySelector('.output_Text').innerHTML = outputText;

    removeElement();
    removeAtribute();
}

function descriptografar() {
    addClass();
    let outputText = removerAcentuacao().replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
                              
     document.querySelector('.output_Text').innerHTML = outputText;

     removeElement();
     removeAtribute();
}



function copiarTexto() {
    let copyText = document.querySelector('.output_Text').innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Texto copiado!");
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}

document.getElementById('copy').addEventListener('click', copiarTexto());
