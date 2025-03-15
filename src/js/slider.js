$(document).ready(function() {
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Matches SCSS base width
        itemMargin: 40,
        minItems: 1,
        maxItems: 3,
        controlNav: false,
        directionNav: true,
        smoothHeight: true // Allows height to adapt responsively
    });

    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Matches SCSS base width
        itemMargin: 50,
        minItems: 1,
        maxItems: 2,
        controlNav: false,
        directionNav: true,
        smoothHeight: true
    });
});
