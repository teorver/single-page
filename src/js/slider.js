// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper', {
//         direction: 'horizontal',
//         loop: true,
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 40,

//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });

//     document.querySelectorAll('.fancybox-item').forEach(item => {
//         item.addEventListener('click', () => {
//             currentSlideIndex = swiper.realIndex;
//         });
//     });

//     Fancybox.bind('[data-fancybox="gallery"]', {
//         Thumbs: {
//             autoStart: false
//         },
//         on: {
//             close: () => {
//                 document.activeElement.blur();
//             }
//         }
//     });
// });


$(document).ready(function() {
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        // itemWidth: 200, // Updated from 300
        itemMargin: 40,
        minItems: 1,
        maxItems: 3,
        // controlNav: true,
        directionNav: true
    });

    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        // itemWidth: 150, // Updated from 200
        itemMargin: 50,
        minItems: 1,
        maxItems: 2,
        // controlNav: true,
        directionNav: true
    });

    // Fancybox.bind('[data-fancybox="gallery"]', {
    //     Thumbs: { autoStart: false },
    //     on: {
    //         close: () => {
    //             document.activeElement.blur();
    //         }
    //     }
    // });
});
