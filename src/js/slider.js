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
    console.log('Document ready, initializing FlexSlider and PhotoSwipe');

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

    // PhotoSwipe initialization
    const initPhotoSwipeFromDOM = function(gallerySelector) {
        const galleryElements = document.querySelectorAll(gallerySelector);
        galleryElements.forEach(function(element, index) {
            element.setAttribute('data-pswp-index', index); // Add index for tracking
            element.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Opening PhotoSwipe for:', this.getAttribute('data-pswp-src'));

                // Collect all gallery items
                const items = [];
                galleryElements.forEach(function(el) {
                    const src = el.getAttribute('data-pswp-src');
                    const width = parseInt(el.getAttribute('data-pswp-width'), 10);
                    const height = parseInt(el.getAttribute('data-pswp-height'), 10);
                    const alt = el.querySelector('img').getAttribute('alt');
                    items.push({
                        src: src,
                        w: width,
                        h: height,
                        title: alt
                    });
                });

                // Options for PhotoSwipe
                const options = {
                    index: parseInt(this.getAttribute('data-pswp-index'), 10),
                    bgOpacity: 0.8,
                    showHideOpacity: true,
                    counterEl: true,
                    shareEl: false,
                    zoomEl: true,
                    fullscreenEl: true
                };

                // Initialize PhotoSwipe
                const pswpElement = document.querySelectorAll('.pswp')[0];
                const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            });
        });
    };

    // Initialize PhotoSwipe for both sliders
    initPhotoSwipeFromDOM('.image-gallery');
});