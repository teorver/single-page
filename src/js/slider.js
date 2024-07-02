// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper', {
//         direction: 'horizontal', // Default direction
//         loop: true,
//         slidesPerView: 3, // Show up to 4 elements
//         spaceBetween: 20,
//
//         // Pagination
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
//
//     let currentSlideIndex = 0;
//
//     document.querySelectorAll('.fancybox-item').forEach(item => {
//         item.addEventListener('click', () => {
//             currentSlideIndex = swiper.realIndex;
//         });
//     });
//
//     Fancybox.bind('[data-fancybox="gallery"]', {
//         on: {
//             close: () => {
//                 swiper.slideToLoop(currentSlideIndex, 0, false);
//                 document.activeElement.blur(); // Remove focus from the currently focused element
//             }
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', // Default direction
        loop: true,
        slidesPerView: 3, // Show up to 4 elements
        spaceBetween: 20,

        // Pagination
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
