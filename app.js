function tocarimagem(){
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "visible"
    joao.classList.add("pastaAbertaAnimacao")
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "hidden"
    joao1.classList.remove("pastaAbertaAnimacao")
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "hidden"
    joao2.classList.remove("pastaAbertaAnimacao")
    musica2 = document.getElementById("power")
    musica2.pause()
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "hidden"
    joao3.classList.remove("pastaAbertaAnimacao")
    musica3 = document.getElementById("poze")
    musica3.pause()
    parabens = document.getElementById("parabens")
    parabens.pause()
    setTimeout(() => {
        musica = document.getElementById("life")
        musica.play()
        musica.currentTime = 0
        musica.loop = true
    },500);
}

function fechar(){
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "hidden"
    joao.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    
}

function tocarimagem1(){
    
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "hidden"
    joao.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "visible"
    joao1.classList.add("pastaAbertaAnimacao")
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "hidden"
    joao2.classList.remove("pastaAbertaAnimacao")
    musica2 = document.getElementById("power")
    musica2.pause()
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "hidden"
    joao3.classList.remove("pastaAbertaAnimacao")
    musica3 = document.getElementById("poze")
    musica3.pause()
    parabens = document.getElementById("parabens")
    parabens.pause()
    setTimeout(() => {
        musica1 = document.getElementById("guerreiro")
        musica1.play()
        musica1.currentTime = 0
        musica1.loop = true
    },500);
}

function fechar1(){
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "hidden"
    joao1.classList.remove("pastaAbertaAnimacao")
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
}

function tocarimagem2(){
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "hidden"
    joao.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "hidden"
    joao1.classList.remove("pastaAbertaAnimacao")
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "visible"
    joao2.classList.add("pastaAbertaAnimacao")
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "hidden"
    joao3.classList.remove("pastaAbertaAnimacao")
    musica3 = document.getElementById("poze")
    musica3.pause()
    parabens = document.getElementById("parabens")
    parabens.pause()
    setTimeout(() => {
        musica2 = document.getElementById("power")
        musica2.play()
        musica2.currentTime = 0
        musica2.loop = true
    },100);
}


function fechar2(){
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "hidden"
    joao2.classList.remove("pastaAbertaAnimacao")
    musica2 = document.getElementById("power")
    musica2.pause()
}

function tocarimagem3(){
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "hidden"
    joao.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "hidden"
    joao1.classList.remove("pastaAbertaAnimacao")
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "hidden"
    joao2.classList.remove("pastaAbertaAnimacao")
    musica2 = document.getElementById("power")
    musica2.pause()
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "visible"
    joao3.classList.add("pastaAbertaAnimacao")
    parabens = document.getElementById("parabens")
    parabens.pause()
    setTimeout(() => {
        musica3 = document.getElementById("poze")
        musica3.play()
        musica3.currentTime = 0
        musica3.loop = true
    },500);
}


function fechar3(){
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "hidden"
    joao3.classList.remove("pastaAbertaAnimacao")
    musica3 = document.getElementById("poze")
    musica3.pause()
}

function musicatoca(){
    parabens = document.getElementById("parabens")
    parabens.play()
    parabens.currentTime = 0;
    parabens.loop = true
    joao = document.querySelector (".pastaaberta")
    joao.style.visibility = "hidden"
    joao.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    joao1 = document.querySelector (".pastaaberta1")
    joao1.style.visibility = "hidden"
    joao1.classList.remove("pastaAbertaAnimacao")
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
    joao2 = document.querySelector (".pastaaberta2")
    joao2.style.visibility = "hidden"
    joao2.classList.remove("pastaAbertaAnimacao")
    musica2 = document.getElementById("power")
    musica2.pause()
    joao3 = document.querySelector (".pastaaberta3")
    joao3.style.visibility = "hidden"
    joao3.classList.remove("pastaAbertaAnimacao")
    musica = document.getElementById("life")
    musica.pause()
    musica1 = document.getElementById("guerreiro")
    musica1.pause()
    musica2 = document.getElementById("power")
    musica2.pause()
    musica3 = document.getElementById("poze")
    musica3.pause()
}

function mensagemboa(){
    black = document.querySelector(".black")
    black.classList.remove("pastaAbertaAnimacao1")
    black.style.visibility = "hidden"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.remove("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "hidden"
    player = document.querySelector(".player")
    player.classList.remove("pastaAbertaAnimacao1")
    player.style.visibility = "hidden"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.remove("pastaAbertaAnimacao1")
    playergoku.style.visibility = "hidden"
    patrick = document.querySelector(".patrick")
    patrick.classList.add("pastaAbertaAnimacao1")
    patrick.style.visibility = "hidden"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.add("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "hidden"
    stylo = document.querySelector(".stylo")
    stylo.classList.add("pastaAbertaAnimacao1")
    stylo.style.visibility = "visible"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.add("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "visible"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.remove("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "hidden"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.remove("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "hidden"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "hidden"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "hidden"

}

function mensagemboa1(){
    black = document.querySelector(".black")
    black.classList.remove("pastaAbertaAnimacao1")
    black.style.visibility = "hidden"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.remove("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "hidden"
    player = document.querySelector(".player")
    player.classList.remove("pastaAbertaAnimacao1")
    player.style.visibility = "hidden"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.remove("pastaAbertaAnimacao1")
    playergoku.style.visibility = "hidden"
    patrick = document.querySelector(".patrick")
    patrick.classList.add("pastaAbertaAnimacao1")
    patrick.style.visibility = "hidden"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.add("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "hidden"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.add("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "visible"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.add("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "visible"
    stylo = document.querySelector(".stylo")
    stylo.classList.remove("pastaAbertaAnimacao1")
    stylo.style.visibility = "hidden"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.remove("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "hidden"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "hidden"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "hidden"
}

function mensagemboa2(){
    black = document.querySelector(".black")
    black.classList.remove("pastaAbertaAnimacao1")
    black.style.visibility = "hidden"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.remove("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "hidden"
    player = document.querySelector(".player")
    player.classList.remove("pastaAbertaAnimacao1")
    player.style.visibility = "hidden"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.remove("pastaAbertaAnimacao1")
    playergoku.style.visibility = "hidden"
    patrick = document.querySelector(".patrick")
    patrick.classList.add("pastaAbertaAnimacao1")
    patrick.style.visibility = "hidden"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.add("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "hidden"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "visible"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "visible"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.remove("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "hidden"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.remove("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "hidden"
    stylo = document.querySelector(".stylo")
    stylo.classList.remove("pastaAbertaAnimacao1")
    stylo.style.visibility = "hidden"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.remove("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "hidden"
}

function mensagemboa3(){
    black = document.querySelector(".black")
    black.classList.remove("pastaAbertaAnimacao1")
    black.style.visibility = "hidden"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.remove("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "hidden"
    player = document.querySelector(".player")
    player.classList.remove("pastaAbertaAnimacao1")
    player.style.visibility = "hidden"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.remove("pastaAbertaAnimacao1")
    playergoku.style.visibility = "hidden"
    patrick = document.querySelector(".patrick")
    patrick.classList.add("pastaAbertaAnimacao1")
    patrick.style.visibility = "visible"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.add("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "visible"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "hidden"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "hidden"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.remove("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "hidden"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.remove("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "hidden"
    stylo = document.querySelector(".stylo")
    stylo.classList.remove("pastaAbertaAnimacao1")
    stylo.style.visibility = "hidden"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.remove("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "hidden"
}

function mensagemboa4(){
    black = document.querySelector(".black")
    black.classList.remove("pastaAbertaAnimacao1")
    black.style.visibility = "hidden"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.remove("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "hidden"
    player = document.querySelector(".player")
    player.classList.add("pastaAbertaAnimacao1")
    player.style.visibility = "visible"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.add("pastaAbertaAnimacao1")
    playergoku.style.visibility = "visible"
    patrick = document.querySelector(".patrick")
    patrick.classList.remove("pastaAbertaAnimacao1")
    patrick.style.visibility = "hidden"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.remove("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "hidden"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "hidden"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "hidden"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.remove("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "hidden"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.remove("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "hidden"
    stylo = document.querySelector(".stylo")
    stylo.classList.remove("pastaAbertaAnimacao1")
    stylo.style.visibility = "hidden"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.remove("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "hidden"
}

function mensagemboa5(){
    black = document.querySelector(".black")
    black.classList.add("pastaAbertaAnimacao1")
    black.style.visibility = "visible"
    blackgoku = document.querySelector(".blackgoku")
    blackgoku.classList.add("pastaAbertaAnimacao1")
    blackgoku.style.visibility = "visible"
    player.classList.remove("pastaAbertaAnimacao1")
    player.style.visibility = "hidden"
    playergoku = document.querySelector(".playergoku")
    playergoku.classList.remove("pastaAbertaAnimacao1")
    playergoku.style.visibility = "hidden"
    patrick = document.querySelector(".patrick")
    patrick.classList.remove("pastaAbertaAnimacao1")
    patrick.style.visibility = "hidden"
    patrickgoku = document.querySelector(".patrickgoku")
    patrickgoku.classList.remove("pastaAbertaAnimacao1")
    patrickgoku.style.visibility = "hidden"
    lipe = document.querySelector(".lipe")
    lipe.classList.add("pastaAbertaAnimacao1")
    lipe.style.visibility = "hidden"
    lipegoku = document.querySelector(".lipegoku")
    lipegoku.classList.add("pastaAbertaAnimacao1")
    lipegoku.style.visibility = "hidden"
    rodrigo = document.querySelector(".rodrigo")
    rodrigo.classList.remove("pastaAbertaAnimacao1")
    rodrigo.style.visibility = "hidden"
    rodrigogoku = document.querySelector(".rodrigogoku")
    rodrigogoku.classList.remove("pastaAbertaAnimacao1")
    rodrigogoku.style.visibility = "hidden"
    stylo = document.querySelector(".stylo")
    stylo.classList.remove("pastaAbertaAnimacao1")
    stylo.style.visibility = "hidden"
    stylogoku = document.querySelector(".stylogoku")
    stylogoku.classList.remove("pastaAbertaAnimacao1")
    stylogoku.style.visibility = "hidden"
}