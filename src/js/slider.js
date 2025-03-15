$(document).ready(function() {
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Base width per item
        itemMargin: 0,  // No margin to avoid gaps
        minItems: 1,
        maxItems: 3,    // Show 3 items
        move: 3,        // Move 3 items at a time
        controlNav: false,
        directionNav: true,
    });

    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Base width per item
        itemMargin: 0,  // No margin to avoid gaps
        minItems: 1,
        maxItems: 2,    // Show 2 items
        move: 2,        // Move 2 items at a time
        controlNav: false,
        directionNav: true,
    });

    // Initialize Magnific Popup for image galleries
    $('.image-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // Enable gallery mode
            navigateByImgClick: true,
            preload: [0,1] // Preload previous and next images
        },
        image: {
            titleSrc: function(item) {
                return item.el.find('img').attr('alt'); // Use the alt text as the caption
            }
        },
        removalDelay: 300, // Delay for closing animation
        mainClass: 'mfp-fade', // Fade animation
        closeOnContentClick: true,
        closeBtnInside: true
    });
});