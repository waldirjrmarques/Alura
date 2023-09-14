
function tocasom(idelentoaudio) {
    document.querySelector(idelentoaudio).play();
}

const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
//enquanto
while (contador < listadeteclas.length) {

    listadeteclas[contador].onclick =  function () {
        tocasom('')
    };

    contador = contador + 1;
}

