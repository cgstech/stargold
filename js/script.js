const botaoCarrinho = document.querySelector('#btnCar')
const containerCarrinho = document.querySelector('.container-cart')
const btnMenu = document.querySelector('#btnMenu')
const linkMenu = document.querySelector('.links-menu')
const ctBtn = document.querySelector('.icons')

botaoCarrinho.addEventListener("click", function(event){
    event.preventDefault()
    containerCarrinho.classList.toggle("show")
})

btnMenu.addEventListener("click", function(event){
    event.preventDefault()
    linkMenu.classList.toggle("show")
})