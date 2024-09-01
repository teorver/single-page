document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', function() {
        navigation.classList.toggle('active');
        burgerMenu.classList.toggle('open-menu');
    });
});