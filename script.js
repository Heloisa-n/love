var oculto = document.querySelector(".ocultar");
var btn = document.querySelector(".botao");
var textinho = document.querySelector(".caixa_do_textinho")


btn.addEventListener("click", ()=>{

    btn.classList.add("ocultar");
    oculto.classList.remove("ocultar");
    textinho.classList.add("fadein");

})
