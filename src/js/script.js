const burger = document.querySelector('.header__burger');
const burgerModal = document.querySelector('.burgerModal');
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    burgerModal.classList.toggle('burgerActive')
}) 

