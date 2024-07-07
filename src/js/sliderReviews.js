document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-reviews', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,

        pagination: {
            el: '.swiper-pagination-review',
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
                document.activeElement.blur();
            }
        }
    });
});
