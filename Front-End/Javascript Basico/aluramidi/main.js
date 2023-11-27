//fazendo tocar 
function tocarsom(idelementoaudio) {
        document.querySelector(idelementoaudio).play()
}

//Pela todas as classes e cria uma arrey 
 const listateclas = document.querySelectorAll('.tecla')

 //Atribuindo a função onclick para todos on indices da lista

 for (let contador = 0 ; contador < listateclas.length; contador ++){
    const tecla = listateclas[contador]

    const instrumento = tecla.classList[1]

    const idaudio = `#som_${instrumento}`
   
    tecla.onclick = function(){
        tocarsom(idaudio)
    } 


    //Adcinionando uma classe no buttom quando precinar enter
    tecla.onkeydown = function(evento){
       // console.log(evento)
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')

        }
        
    }

    //Remove a classe no buttom quando precinar enter
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

