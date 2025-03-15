// $(document).ready(function() {
//     $('.education-slider').flexslider({
//         animation: 'slide',
//         slideshow: false,
//         itemWidth: 300, // Base width per item
//         itemMargin: 0,  // No margin to avoid gaps
//         minItems: 1,
//         maxItems: 3,    // Show 3 items
//         move: 3,        // Move 3 items at a time
//         controlNav: false,
//         directionNav: true,
//     });
//
//     $('.reviews-slider').flexslider({
//         animation: 'slide',
//         slideshow: false,
//         itemWidth: 300, // Base width per item
//         itemMargin: 0,  // No margin to avoid gaps
//         minItems: 1,
//         maxItems: 2,    // Show 2 items
//         move: 2,        // Move 2 items at a time
//         controlNav: false,
//         directionNav: true,
//     });
// });

$(document).ready(function() {
    console.log('Document ready, initializing FlexSlider and LightGallery');

    // FlexSlider for Education
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3,
        move: 3,
        controlNav: false,
        directionNav: true,
        smoothHeight: true,
        start: function(slider) {
            console.log('Education Slider initialized, slides:', slider.count);
        }
    });

    // FlexSlider for Reviews
    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300,
        itemMargin: 0,
        minItems: 1,
        maxItems: 2,
        move: 2,
        controlNav: false,
        directionNav: true,
        smoothHeight: true,
        start: function(slider) {
            console.log('Reviews Slider initialized, slides:', slider.count);
        }
    });

    // Initialize LightGallery for both sliders
    lightGallery(document.querySelector('.education-slider .lg-gallery'), {
        speed: 500,
        download: false, // Disable download button
        counter: true,
        zoom: true,
        thumbnail: true,
        plugins: [],
        dynamic: true,
        dynamicEl: Array.from(document.querySelectorAll('.education-slider .lg-gallery a')).map(el => ({
            src: el.getAttribute('data-src'),
            thumb: el.querySelector('img').getAttribute('src'),
            subHtml: el.getAttribute('data-sub-html')
        })),
        beforeOpen: () => console.log('LightGallery opening'),
        afterOpen: () => console.log('LightGallery opened')
    });

    lightGallery(document.querySelector('.reviews-slider .lg-gallery'), {
        speed: 500,
        download: false,
        counter: true,
        zoom: true,
        thumbnail: true,
        plugins: [],
        dynamic: true,
        dynamicEl: Array.from(document.querySelectorAll('.reviews-slider .lg-gallery a')).map(el => ({
            src: el.getAttribute('data-src'),
            thumb: el.querySelector('img').getAttribute('src'),
            subHtml: el.getAttribute('data-sub-html')
        })),
        beforeOpen: () => console.log('LightGallery opening'),
        afterOpen: () => console.log('LightGallery opened')
    });
});