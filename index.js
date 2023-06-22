var setadireita = window.document.getElementById("seta-direita")
var leornardo = window.document.getElementById("leornardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita(){
    leornardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top: 55px"
}

function rolarparaesquerda(){
    samantha.style ="display:none"
    leornardo.style ="display:flex"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}

