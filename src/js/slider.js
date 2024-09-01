document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    document.querySelectorAll('.fancybox-item').forEach(item => {
        item.addEventListener('click', () => {
            currentSlideIndex = swiper.realIndex;
        });
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            autoStart: false
        },
        on: {
            close: () => {
                document.activeElement.blur(); // Remove focus from the currently focused element
            }
        }
    });
});
