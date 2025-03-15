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
});