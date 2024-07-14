document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.navigation');
    // let headerContainer = document.querySelector('.header__container');

    burgerMenu.addEventListener('click', function() {
        navigation.classList.toggle('active');
        burgerMenu.classList.toggle('open-menu');
        // headerContainer.classList.toggle('img-change');
    });
});