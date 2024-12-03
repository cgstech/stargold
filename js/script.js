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


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Funcionalidade de arraste com o mouse
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // velocidade do arraste
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Funcionalidade de deslizar com o dedo (touch)
    let touchStartX;
    let touchStartScroll;

    carousel.addEventListener('touchstart', (e) => {
        isDown = true;
        touchStartX = e.touches[0].pageX; // Pega a posição inicial do toque
        touchStartScroll = carousel.scrollLeft; // Pega a posição inicial do carrossel
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const touchMoveX = e.touches[0].pageX; // Pega a nova posição do toque
        const moveDistance = touchMoveX - touchStartX; // Distância do movimento do toque
        carousel.scrollLeft = touchStartScroll - moveDistance; // Move o carrossel com base no movimento
    });

    carousel.addEventListener('touchend', () => {
        isDown = false;
    });

    // Deslizar automaticamente
    let scrollAmount = 0;  // Controla a quantidade de rolagem
    const cardWidth = document.querySelector('.card').offsetWidth + 20;  // Largura de um card mais a margem

    function autoSlide() {
        if (scrollAmount < carousel.scrollWidth - carousel.offsetWidth) {
            scrollAmount += cardWidth;  // Move para o próximo card
            carousel.style.transform = `translateX(-${scrollAmount}px)`;  // Move o carrossel
        } else {
            scrollAmount = 0; // Reinicia o carrossel
            carousel.style.transform = `translateX(0px)`; // Volta ao início
        }
    }

    setInterval(autoSlide, 3000);  // Altera os itens a cada 3 segundos
});
