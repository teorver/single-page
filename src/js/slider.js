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

    $('.image-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Preload previous and next images
        },
        image: {
            titleSrc: function(item) {
                return item.el.find('img').attr('alt'); // Use alt text as caption
            }
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        closeOnContentClick: true,
        closeBtnInside: true,
        callbacks: {
            beforeOpen: function() {
                console.log('Magnific Popup opening for:', this.st.el[0].href); // Debug log
            },
            open: function() {
                console.log('Magnific Popup opened'); // Debug log
            },
            beforeClose: function() {
                console.log('Magnific Popup closing'); // Debug log
            }
        }
    }).on('click', function(e) {
        e.preventDefault(); // Ensure default link behavior is prevented
        console.log('Clicked link:', $(this).attr('href')); // Debug click event
        $(this).magnificPopup('open');
    });
});