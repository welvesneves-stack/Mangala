let ver = document.getElementById("ver")
let fechar = document.getElementById("fechar")
let modal = document.getElementById("modal")

ver.addEventListener("click", (abrirmodal)=>{
    modal.classList.toggle("AbrirModal")
})
fechar.addEventListener("click", (fecharmodal)=>{
    modal.classList.remove("AbrirModal")
})