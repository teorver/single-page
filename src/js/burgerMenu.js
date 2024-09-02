document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    let headerContainer = document.querySelector('.header__container');
    let burgerMenu = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.navigation');

    document.addEventListener('scroll', () => {
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

    burgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('active');
        burgerMenu.classList.toggle('open-menu');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                burgerMenu.classList.remove('open-menu');
            }
        });
    });
});
