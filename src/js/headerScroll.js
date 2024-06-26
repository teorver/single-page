document.addEventListener('DOMContentLoaded',  () => {
    let header = document.querySelector('header');
    let headerContainer = document.querySelector('.header__container');

    document.addEventListener('scroll',  () => {
        let scrollPosition = window.scrollY;
        let headerHeight = header.offsetHeight;

        if (scrollPosition > headerHeight) {
            header.classList.add('scrolled');
            headerContainer.classList.add('scrolled-border');
        } else {
            header.classList.remove('scrolled');
            headerContainer.classList.remove('scrolled-border');
        }
    });
});