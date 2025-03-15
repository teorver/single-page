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

    // Function to initialize LightGallery
    function initializeLightGallery(selector) {
        const galleryElement = document.querySelector(selector);
        if (!galleryElement) {
            console.error('LightGallery element not found for selector:', selector);
            return;
        }

        console.log('Initializing LightGallery for:', selector);
        lightGallery(galleryElement, {
            speed: 500,
            download: false,
            counter: true,
            zoom: true,
            thumbnail: true,
            plugins: [],
            dynamic: true,
            dynamicEl: Array.from(document.querySelectorAll(`${selector} a`)).map(el => ({
                src: el.getAttribute('data-src'),
                thumb: el.querySelector('img').getAttribute('src'),
                subHtml: el.getAttribute('data-sub-html')
            })),
            beforeOpen: () => console.log('LightGallery opening for:', selector),
            afterOpen: () => console.log('LightGallery opened for:', selector),
            onInit: () => console.log('LightGallery initialized for:', selector)
        }).on('onBeforeSlide', function() {
            console.log('Slide changed to index:', this.index);
        });
    }
});